import { NextRequest, NextResponse } from 'next/server';

const RENDER_BACKEND_URL = 'https://builtsense-backend-vg0b.onrender.com/api/audit-requests';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Check mandatory fields per guide
    const { building_name, rep_name, phone, consent } = body;
    if (!building_name || typeof building_name !== 'string' || !building_name.trim() ||
        !rep_name || typeof rep_name !== 'string' || !rep_name.trim() ||
        !phone || typeof phone !== 'string' || !phone.trim() ||
        consent !== true) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Forward to Render backend
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 60000); // Render cold starts can take ~50s

    try {
      const response = await fetch(RENDER_BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });

      clearTimeout(timeout);
      const data = await response.json().catch(() => ({}));

      return NextResponse.json(data, {
        status: response.status,
        headers: corsHeaders,
      });
    } catch (fetchErr: any) {
      clearTimeout(timeout);
      console.error('[API Proxy] Error forwarding to Render backend:', fetchErr);
      return NextResponse.json(
        { error: 'Could not connect to backend server' },
        { status: 502, headers: corsHeaders }
      );
    }
  } catch (err: any) {
    console.error('[API Proxy] Invalid request:', err);
    return NextResponse.json(
      { error: 'Invalid JSON request body' },
      { status: 400, headers: corsHeaders }
    );
  }
}

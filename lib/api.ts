import { AuditRequestPayload, AuditRequestResponse, EstimatorCalculation } from '@/types';

/**
 * Client API services for BUILTSENSE
 * Submits audit requests to the local Next.js proxy (/api/audit-requests)
 * which forwards to Render & Supabase.
 */

export async function submitAuditRequest(
  payload: AuditRequestPayload
): Promise<AuditRequestResponse> {
  payload.consent = true;

  const res = await fetch('/api/audit-requests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ref_code) {
    throw new Error(data.error || 'Failed to submit audit request.');
  }

  return data;
}

export function calculateEstimator(area: number, buildingTypeId: string, attributeValue: number): EstimatorCalculation {
  const rate = buildingTypeId === 'hospitals' ? 145 : buildingTypeId === 'commercial' ? 120 : buildingTypeId === 'villas' ? 110 : buildingTypeId === 'schools' ? 82 : 95;
  const baseCost = area * rate;
  return {
    area,
    rate,
    buildingType: buildingTypeId,
    attributeValue,
    minCost: baseCost * 0.85,
    maxCost: baseCost * 1.15,
    timelineWeeks: Math.max(3, Math.min(16, Math.round(area / 6000) + 2))
  };
}

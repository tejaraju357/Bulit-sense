'use client';

import React from 'react';

export function CareersModal() {
  return (
    <>
      <div className="modal-overlay" id="careersModal" role="dialog" aria-modal="true" aria-labelledby="careersTitle">
  <div className="modal-dialog" style={{ maxWidth: '680px' } as React.CSSProperties}>
    <div className="modal-header">
      <div className="modal-header-title" id="careersTitle">
        <span>BUILTSENSE / CAREERS</span>
        <span style={{ fontSize: '10px', padding: '2px 6px', background: 'var(--c-lime-soft)', color: 'var(--c-lime)', borderRadius: '2px' } as React.CSSProperties}>3 OPENINGS</span>
      </div>
      <button className="modal-close-btn" id="closeCareersModal" aria-label="Close modal">✕</button>
    </div>

    <div className="modal-body" style={{ padding: '28px 24px' } as React.CSSProperties}>
      <div className="mono-tag" style={{ marginBottom: '8px' } as React.CSSProperties}>BUILD THE FUTURE OF DIAGNOSTIC CAPEX</div>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', marginBottom: '12px', color: 'var(--ink)' } as React.CSSProperties}>Join Our Engineering & Survey Team</h3>
      <p style={{ color: 'var(--mute)', fontSize: '14.5px', lineHeight: '1.6', marginBottom: '20px' } as React.CSSProperties}>
        We are building India's premier predictive building intelligence platform. If you love drones, thermography, concrete diagnostics, and high-integrity civil engineering, join us!
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' } as React.CSSProperties}>
        <div style={{ background: 'var(--bg-card-subtle)', border: '1px solid var(--line)', borderRadius: '6px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' } as React.CSSProperties}>
          <div>
            <strong style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', color: 'var(--ink)', display: 'block' } as React.CSSProperties}>Senior Building Diagnostic Engineer</strong>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--mute)' } as React.CSSProperties}>Pune / Mumbai · Full-time · 3+ yrs structural diagnostic experience</span>
          </div>
          <a href="mailto:careers@builtsense.com?subject=Application%20-%20Senior%20Diagnostic%20Engineer" className="btn-outline" style={{ fontSize: '11.5px', padding: '8px 14px' } as React.CSSProperties}>Apply ↗</a>
        </div>

        <div style={{ background: 'var(--bg-card-subtle)', border: '1px solid var(--line)', borderRadius: '6px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' } as React.CSSProperties}>
          <div>
            <strong style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', color: 'var(--ink)', display: 'block' } as React.CSSProperties}>Commercial Drone & Thermal Pilot</strong>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--mute)' } as React.CSSProperties}>Bengaluru · Full-time · DGCA certified with FLIR / thermal payload experience</span>
          </div>
          <a href="mailto:careers@builtsense.com?subject=Application%20-%20Drone%20Pilot" className="btn-outline" style={{ fontSize: '11.5px', padding: '8px 14px' } as React.CSSProperties}>Apply ↗</a>
        </div>

        <div style={{ background: 'var(--bg-card-subtle)', border: '1px solid var(--line)', borderRadius: '6px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' } as React.CSSProperties}>
          <div>
            <strong style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', color: 'var(--ink)', display: 'block' } as React.CSSProperties}>Civil Estimator & Quantity Surveyor</strong>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--mute)' } as React.CSSProperties}>Hybrid / Pune · Full-time · Rate analysis & housing society capex modeling</span>
          </div>
          <a href="mailto:careers@builtsense.com?subject=Application%20-%20Quantity%20Surveyor" className="btn-outline" style={{ fontSize: '11.5px', padding: '8px 14px' } as React.CSSProperties}>Apply ↗</a>
        </div>
      </div>

      <div style={{ background: 'var(--c-lime-soft)', border: '1px solid var(--c-lime)', borderRadius: '6px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' } as React.CSSProperties}>
        <div>
          <strong style={{ color: 'var(--ink)', fontSize: '13px', display: 'block' } as React.CSSProperties}>Don't see your specific role?</strong>
          <span style={{ color: 'var(--mute)', fontSize: '12px' } as React.CSSProperties}>Email your portfolio or resume to <a href="mailto:careers@builtsense.com" style={{ color: 'var(--c-lime)', fontWeight: '600' } as React.CSSProperties}>careers@builtsense.com</a></span>
        </div>
        <a href="mailto:careers@builtsense.com?subject=General%20Application%20-%20Builtsense" className="btn-lime" style={{ fontSize: '12px', padding: '8px 16px' } as React.CSSProperties}>Send General Application ↗</a>
      </div>
    </div>
  </div>
</div>

{/* ==================== POPUP MODAL 1: SAMPLE REPORT WITH DOWNLOAD ==================== */}
    </>
  );
}

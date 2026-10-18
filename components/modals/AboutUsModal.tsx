'use client';

import React from 'react';

export function AboutUsModal() {
  return (
    <>
      <div className="modal-overlay" id="aboutUsModal" role="dialog" aria-modal="true" aria-labelledby="aboutUsTitle">
  <div className="modal-dialog" style={{ maxWidth: '680px' } as React.CSSProperties}>
    <div className="modal-header">
      <div className="modal-header-title" id="aboutUsTitle">
        <span>BUILTSENSE / ABOUT US</span>
        <span style={{ fontSize: '10px', padding: '2px 6px', background: 'var(--c-lime-soft)', color: 'var(--c-lime)', borderRadius: '2px' } as React.CSSProperties}>COMPANY BRIEF</span>
      </div>
      <button className="modal-close-btn" id="closeAboutModal" aria-label="Close modal">✕</button>
    </div>

    <div className="modal-body" style={{ padding: '28px 24px' } as React.CSSProperties}>
      <div className="mono-tag" style={{ marginBottom: '8px' } as React.CSSProperties}>PREDICTIVE INFRASTRUCTURE ENGINEERING</div>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', marginBottom: '14px', color: 'var(--ink)' } as React.CSSProperties}>Certainty for the next five years of your building.</h3>
      <p style={{ color: 'var(--mute)', fontSize: '14.5px', lineHeight: '1.6', marginBottom: '20px' } as React.CSSProperties}>
        BUILTSENSE was founded by diagnostic civil engineers and sensor technologists to solve the deepest frustration in Indian housing societies and institutional campuses: unpredictable, reactive, and escalating repair expenses.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' } as React.CSSProperties}>
        <div style={{ background: 'var(--bg-card-subtle)', border: '1px solid var(--line)', borderRadius: '6px', padding: '16px' } as React.CSSProperties}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-lime)', fontWeight: '700', marginBottom: '4px' } as React.CSSProperties}>01 / DIAGNOSTICS FIRST</div>
          <p style={{ fontSize: '13px', color: 'var(--ink-secondary)', margin: '0', lineHeight: '1.5' } as React.CSSProperties}>Drone thermography, moisture mapping, and riser endoscopes detect seepage pathways before plaster fractures.</p>
        </div>
        <div style={{ background: 'var(--bg-card-subtle)', border: '1px solid var(--line)', borderRadius: '6px', padding: '16px' } as React.CSSProperties}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-lime)', fontWeight: '700', marginBottom: '4px' } as React.CSSProperties}>02 / FIXED PRICING</div>
          <p style={{ fontSize: '13px', color: 'var(--ink-secondary)', margin: '0', lineHeight: '1.5' } as React.CSSProperties}>No mid-execution cost surges. Sinking fund-aligned 5-year capital budgets delivered with fixed rate quotes.</p>
        </div>
        <div style={{ background: 'var(--bg-card-subtle)', border: '1px solid var(--line)', borderRadius: '6px', padding: '16px' } as React.CSSProperties}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-lime)', fontWeight: '700', marginBottom: '4px' } as React.CSSProperties}>03 / ESCROW MILESTONES</div>
          <p style={{ fontSize: '13px', color: 'var(--ink-secondary)', margin: '0', lineHeight: '1.5' } as React.CSSProperties}>Vendors receive payouts strictly upon verified photo checkpoints and quality tests approved by our engineers.</p>
        </div>
        <div style={{ background: 'var(--bg-card-subtle)', border: '1px solid var(--line)', borderRadius: '6px', padding: '16px' } as React.CSSProperties}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-lime)', fontWeight: '700', marginBottom: '4px' } as React.CSSProperties}>04 / 5-YEAR WARRANTY</div>
          <p style={{ fontSize: '13px', color: 'var(--ink-secondary)', margin: '0', lineHeight: '1.5' } as React.CSSProperties}>Backed by written legal society warranties with periodic re-sensor audits throughout the warranty lifespan.</p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '14px', borderTop: '1px solid var(--line)' } as React.CSSProperties}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--mute)' } as React.CSSProperties}>Headquarters: Pune · Operations: Mumbai, Bengaluru, Hyderabad</span>
        <button type="button" className="btn-lime" id="btnAboutBookAudit">Book Audit for Your Society ↗</button>
      </div>
    </div>
  </div>
</div>

{/* ==================== POPUP MODAL 4: CAREERS ==================== */}
    </>
  );
}

'use client';

import React from 'react';

export function SampleReportModal() {
  return (
    <>
      <div className="modal-overlay" id="sampleReportModal" role="dialog" aria-modal="true" aria-labelledby="sampleReportTitle">
  <div className="modal-dialog">
    <div className="modal-header">
      <div className="modal-header-title" id="sampleReportTitle">
        <span>BUILTSENSE / SAMPLE REPORT</span>
        <span style={{ fontSize: '10px', padding: '2px 6px', background: 'var(--c-lime-soft)', color: 'var(--c-lime)', borderRadius: '2px' } as React.CSSProperties}>VERIFIED AUDIT</span>
      </div>
      <button className="modal-close-btn" id="closeReportModal" aria-label="Close modal">✕</button>
    </div>

    <div className="modal-body">
      {/* Report Header Banner */}
      <div className="report-header-banner">
        <div className="report-title-meta">
          <strong>Tower B · Sunrise CHS, Pune</strong>
          <span>180 Units · 14 Floors · Audit ID: BS-AUD-2026-004</span>
        </div>
        <div className="report-health-badge">
          <div className="health-score">84<small style={{ fontSize: '16px', color: 'var(--mute)' } as React.CSSProperties}>/100</small></div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--mute)', letterSpacing: '0.08em', textTransform: 'uppercase' } as React.CSSProperties}>HEALTH INDEX</span>
        </div>
      </div>

      {/* Report Section 1 */}
      <div className="report-section-block">
        <div className="report-section-title">01 / EXECUTIVE DIAGNOSIS & CRITICAL SYSTEMS</div>
        <table className="report-table">
          <thead>
            <tr>
              <th>System</th>
              <th>Status</th>
              <th>Observed Condition</th>
              <th>Action Yr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>SYS-01 Waterproofing</strong></td>
              <td><span style={{ color: 'var(--c-lime)' } as React.CSSProperties}>Monitored</span></td>
              <td>Ponding near outlet #2, mortar wear</td>
              <td>Year 1</td>
            </tr>
            <tr>
              <td><strong>SYS-03 Plumbing Riser</strong></td>
              <td><span style={{ color: 'var(--c-orange)' } as React.CSSProperties}>Alert</span></td>
              <td>1.4 Bar pressure drop, Joint 14B micro-fissure</td>
              <td>Year 2</td>
            </tr>
            <tr>
              <td><strong>SYS-04 Façade Paint</strong></td>
              <td><span style={{ color: 'var(--mute)' } as React.CSSProperties}>Stable</span></td>
              <td>Weathering on west face, no active leak</td>
              <td>Year 3</td>
            </tr>
            <tr>
              <td><strong>SYS-05 Solar Common</strong></td>
              <td><span style={{ color: 'var(--c-lime)' } as React.CSSProperties}>High ROI</span></td>
              <td>120 kW rooftop space ready, 3.4 yr payback</td>
              <td>Year 2/4</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Report Section 2 */}
      <div className="report-section-block">
        <div className="report-section-title">02 / FIVE-YEAR PREDICTIVE CAPEX PLAN</div>
        <table className="report-table">
          <thead>
            <tr>
              <th>Timeline</th>
              <th>Scheduled Scope</th>
              <th>Fixed Quote</th>
              <th>Sinking Fund Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Year 1</td>
              <td>Terrace Membrane Coat + Joint Sealing</td>
              <td>₹24.0 L</td>
              <td><span style={{ color: 'var(--c-lime)' } as React.CSSProperties}>100% Funded</span></td>
            </tr>
            <tr>
              <td>Year 2</td>
              <td>Riser Epoxy Relining + 60 kW Solar Phase 1</td>
              <td>₹56.0 L</td>
              <td><span style={{ color: 'var(--c-lime)' } as React.CSSProperties}>Allocated</span></td>
            </tr>
            <tr>
              <td>Year 3</td>
              <td>Exterior Elastomeric Façade Waterproof Coat</td>
              <td>₹46.0 L</td>
              <td><span style={{ color: 'var(--c-orange)' } as React.CSSProperties}>Requires Reserve Planning</span></td>
            </tr>
            <tr>
              <td>Year 4</td>
              <td>Solar Phase 2 + Sump Pump Modernization</td>
              <td>₹57.0 L</td>
              <td><span style={{ color: 'var(--c-orange)' } as React.CSSProperties}>Reserve Gap: ₹63 L</span></td>
            </tr>
            <tr>
              <td>Year 5</td>
              <td>Internal Common Lines + Clubhouse Refresh</td>
              <td>₹20.0 L</td>
              <td><span>Future Provision</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '12px', color: 'var(--mute)', lineHeight: '1.5', margin: '0' } as React.CSSProperties}>
        * Based on ultrasonic flow testing, thermal infrared scanning, and digital drone orthomosaic model for Tower B.
      </p>
    </div>

    <div className="modal-footer">
      <button type="button" className="btn-lime" id="btnDownloadReportDoc">Download Sample Report (PDF) ↓</button>
      <button type="button" className="btn-outline" id="btnBookFromReport">Book Audit for Your Building ↗</button>
    </div>
  </div>
</div>

{/* ==================== POPUP MODAL 2: 2-STEP BOOK BUILDING AUDIT ==================== */}
    </>
  );
}

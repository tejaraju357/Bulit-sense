'use client';

import React from 'react';

export function BookAuditModal() {
  return (
    <>
      <div className="modal-overlay" id="bookAuditModal" role="dialog" aria-modal="true" aria-labelledby="bookAuditTitle">
  <div className="modal-dialog">
    <div className="modal-header">
      <div className="modal-header-title" id="bookAuditTitle">
        <span>BOOK A BUILDING AUDIT</span>
        <span style={{ fontSize: '10px', padding: '2px 6px', background: 'var(--c-lime-soft)', color: 'var(--c-lime)', borderRadius: '2px' } as React.CSSProperties}>HEALTH CHECK</span>
      </div>
      <button className="modal-close-btn" id="closeAuditModal" aria-label="Close modal">✕</button>
    </div>

    <div className="modal-body">
      {/* Step Navigation Indicators */}
      <div className="step-nav-bar" id="stepNavBar">
        <span className="step-pill active" id="stepPill1">01 / BUILDING DETAILS</span>
        <span style={{ color: 'var(--line)' } as React.CSSProperties}>——</span>
        <span className="step-pill" id="stepPill2">02 / INSPECTION SCOPE</span>
      </div>

      {/* Step 1 Form Page */}
      <div className="step-page active" id="stepPage1">
        {/* 1. Selection of Building Type */}
        <div className="form-field" style={{ marginBottom: '14px' } as React.CSSProperties}>
          <label style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mute)', display: 'block' } as React.CSSProperties}>
            SELECT BUILDING TYPE *
          </label>
          <div className="bldg-type-group" id="bldgTypeGroup" role="radiogroup" aria-label="Building Type Selection">
            <button type="button" className="bldg-type-btn active" data-bldg="apartments" role="radio" aria-checked="true">
              <span className="bldg-type-icon">🏢</span> Apartments
            </button>
            <button type="button" className="bldg-type-btn" data-bldg="school" role="radio" aria-checked="false">
              <span className="bldg-type-icon">🏫</span> School
            </button>
            <button type="button" className="bldg-type-btn" data-bldg="commercial" role="radio" aria-checked="false">
              <span className="bldg-type-icon">🏛️</span> Commercial Spaces
            </button>
            <button type="button" className="bldg-type-btn" data-bldg="hospital" role="radio" aria-checked="false">
              <span className="bldg-type-icon">🏥</span> Hospital
            </button>
            <button type="button" className="bldg-type-btn" data-bldg="others" role="radio" aria-checked="false">
              <span className="bldg-type-icon">🏗️</span> Others
            </button>
          </div>
          <input type="hidden" id="step1BuildingType" value="apartments" />
        </div>

        <div className="form-field">
          <label htmlFor="step1Building" id="step1BuildingLabel">SOCIETY / BUILDING NAME *</label>
          <input type="text" id="step1Building" placeholder="e.g. Sunrise Greens CHS" required />
        </div>

        <div className="form-row-2col">
          <div className="form-field">
            <label htmlFor="step1City">CITY *</label>
            <input type="text" id="step1City" placeholder="e.g. Pune, Mumbai, Bengaluru" required />
          </div>
          <div className="form-field">
            <label htmlFor="step1Attr1" id="step1Attr1Label">TOTAL UNITS / FLATS *</label>
            <input type="text" id="step1Attr1" placeholder="e.g. 180" required />
          </div>
        </div>

        <div className="form-row-2col">
          <div className="form-field">
            <label htmlFor="step1Name">REPRESENTATIVE NAME *</label>
            <input type="text" id="step1Name" placeholder="Your name" required />
          </div>
          <div className="form-field">
            <label htmlFor="step1Role" id="step1RoleLabel">COMMITTEE ROLE</label>
            <select id="step1Role" style={{ color: 'var(--ink)', background: 'var(--modal-bg)' } as React.CSSProperties}>
              <option value="Secretary">Secretary</option>
              <option value="Chairman">Chairman</option>
              <option value="Treasurer">Treasurer</option>
              <option value="Committee Member">Committee Member</option>
              <option value="Resident">Flat Owner / Resident</option>
            </select>
          </div>
        </div>

        <div className="form-row-2col">
          <div className="form-field">
            <label htmlFor="step1Phone">PHONE NUMBER (FOR WHATSAPP & AUDIT CALL) *</label>
            <input type="tel" id="step1Phone" placeholder="+91 98 0000 0000" required />
          </div>
          <div className="form-field">
            <label htmlFor="step1Attr2" id="step1Attr2Label">NUMBER OF TOWERS / WINGS</label>
            <input type="text" id="step1Attr2" placeholder="e.g. 4 Towers" />
          </div>
        </div>
      </div>

      {/* Step 2 Form Page */}
      <div className="step-page" id="stepPage2">
        <label style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mute)', display: 'block' } as React.CSSProperties}>
          SELECT REPAIR SYSTEMS TO ASSESS *
        </label>
        
        <div className="scope-checkboxes-grid" id="scopeCheckboxesGrid">
          <label className="scope-label">
            <input type="checkbox" checked value="Waterproofing" />
            <span>Waterproofing (Terrace & Basement)</span>
          </label>
          <label className="scope-label">
            <input type="checkbox" checked value="Plumbing & Risers" />
            <span>Plumbing Lines & Main Risers</span>
          </label>
          <label className="scope-label">
            <input type="checkbox" checked value="Exterior Paint" />
            <span>Exterior Paint & Façade Cracks</span>
          </label>
          <label className="scope-label">
            <input type="checkbox" value="Solar Rooftop" />
            <span>Solar Rooftop & Energy Audit</span>
          </label>
          <label className="scope-label">
            <input type="checkbox" checked value="5-Year CapEx" />
            <span>5-Year Sinking Fund Budgeting</span>
          </label>
          <label className="scope-label">
            <input type="checkbox" value="Clubhouse" />
            <span>Clubhouse & Amenities Redesign</span>
          </label>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '18px' } as React.CSSProperties}>
          <div className="form-field">
            <label htmlFor="step2Urgency">DESIRED AUDIT TIMEFRAME</label>
            <select id="step2Urgency" style={{ color: 'var(--ink)', background: 'var(--modal-bg)' } as React.CSSProperties}>
              <option value="Next 7 Days (Immediate)">Next 7 Days (Urgent)</option>
              <option value="Within 2-3 Weeks" selected>Within 2-3 Weeks</option>
              <option value="Next Quarter Planning">Next Quarter / AGM Planning</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="step2Notes">ANY NOTABLE ISSUES (OPTIONAL)</label>
            <input type="text" id="step2Notes" placeholder="e.g. Monsoon seepage on 12th floor" />
          </div>
        </div>
      </div>

      {/* Step 3 / Confirmation Screen */}
      <div className="step-page" id="stepPageSuccess">
        <div className="audit-success-box">
          <div className="audit-success-icon">✓</div>
          <h3 style={{ fontSize: '26px', marginBottom: '8px' } as React.CSSProperties}>Building Audit Requested!</h3>
          <p style={{ color: 'var(--mute)', maxWidth: '44ch', margin: '0 auto 8px' } as React.CSSProperties}>
            Thank you, <strong id="successRepName" style={{ color: 'var(--ink)' } as React.CSSProperties}></strong>. We have received the audit request for <strong id="successBuildingName" style={{ color: 'var(--ink)' } as React.CSSProperties}></strong>.
          </p>
          <div id="successDetailsBadge" style={{ display: 'inline-block', margin: '4px 0 10px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--c-lime)', background: 'var(--c-lime-soft)', padding: '4px 12px', borderRadius: '4px', border: '1px solid rgba(16,185,129,0.3)' } as React.CSSProperties}></div>
          <div className="audit-ref-tag" id="successRefCode">REF: AUDIT-BS-2026-881</div>
          <p style={{ fontSize: '13px', color: 'var(--mute)', lineHeight: '1.6', maxWidth: '48ch', margin: '0 auto' } as React.CSSProperties}>
            Our structural scanning coordinator will contact your committee to confirm the site inspection date and provide the drone flight survey checklist.
          </p>
        </div>
      </div>
    </div>

    {/* Modal Footer Navigation */}
    <div className="modal-footer" id="modalFooterNav">
      <button type="button" className="btn-outline" id="btnStepBack" style={{ display: 'none' } as React.CSSProperties}>← Back</button>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' } as React.CSSProperties}>
        <button type="button" className="btn-lime" id="btnStepNext">Next: Inspection Scope →</button>
        <button type="button" className="btn-lime" id="btnStepSubmit" style={{ display: 'none' } as React.CSSProperties}>Confirm & Book Audit ↗</button>
        <button type="button" className="btn-lime" id="btnStepDone" style={{ display: 'none' } as React.CSSProperties}>Done</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

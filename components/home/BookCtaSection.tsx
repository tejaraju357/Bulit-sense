'use client';

import React from 'react';

export function BookCtaSection() {
  return (
    <>
      <section className="section-block pad" id="book">
    <div className="mono-tag" style={{ color: 'var(--c-lime)' } as React.CSSProperties}>BUILDING HEALTH CHECK</div>
    
    <div className="audit-cta-grid">
      <div>
        <h2>Know your building’s<br />next five years.</h2>
        <p style={{ color: 'var(--mute)', margin: '18px 0 24px', maxWidth: '44ch' } as React.CSSProperties}>Start with a building health check. Understand the issues, plan your repairs, and get clarity on the cost ahead.</p>
        <span className="mono-tag" style={{ textTransform: 'none' } as React.CSSProperties}>Form is ready for your preferred submission connection.</span>
      </div>

      <div className="audit-form-card">
        <div className="form-field">
          <label htmlFor="directName">NAME</label>
          <input type="text" id="directName" placeholder="Your name" />
        </div>
        <div className="form-field">
          <label htmlFor="directPhone">PHONE</label>
          <input type="tel" id="directPhone" placeholder="+91 98 0000 0000" />
        </div>
        <div className="form-field">
          <label htmlFor="directBuilding">BUILDING AND CITY</label>
          <input type="text" id="directBuilding" placeholder="Tower B, Pune" />
        </div>
        <button type="button" className="btn-lime" id="btnDirectSubmit" style={{ alignSelf: 'flex-start', marginTop: '8px' } as React.CSSProperties}>Book my audit ↗</button>
      </div>
    </div>
  </section>



    </>
  );
}

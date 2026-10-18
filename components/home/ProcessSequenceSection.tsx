'use client';

import React from 'react';

export function ProcessSequenceSection() {
  return (
    <>
      <section className="section-block pad" id="sequence">
    <div className="mono-tag">FROM INSPECTION TO EXECUTION</div>
    <h2>From first scan to long-term confidence.</h2>

    <div className="process-grid">
      {/* 01 / SCAN */}
      <div className="process-step-card">
        <div className="step-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80')" } as React.CSSProperties}></div>
        <div className="step-card-overlay"></div>
        <div className="step-card-content">
          <span className="step-number">01 / SCAN</span>
          <h3 className="step-title">Scan</h3>
          <p className="step-desc">Drone, thermal, and moisture survey.</p>
        </div>
      </div>

      {/* 02 / DIAGNOSE */}
      <div className="process-step-card">
        <div className="step-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80')" } as React.CSSProperties}></div>
        <div className="step-card-overlay"></div>
        <div className="step-card-content">
          <span className="step-number">02 / DIAGNOSE</span>
          <h3 className="step-title">Diagnose</h3>
          <p className="step-desc">Building health report ranking issues by urgency and cost.</p>
        </div>
      </div>

      {/* 03 / PLAN */}
      <div className="process-step-card">
        <div className="step-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80')" } as React.CSSProperties}></div>
        <div className="step-card-overlay"></div>
        <div className="step-card-content">
          <span className="step-number">03 / PLAN</span>
          <h3 className="step-title">Plan</h3>
          <p className="step-desc">A five-year roadmap matched to the sinking fund.</p>
        </div>
      </div>

      {/* 04 / QUOTE */}
      <div className="process-step-card">
        <div className="step-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80')" } as React.CSSProperties}></div>
        <div className="step-card-overlay"></div>
        <div className="step-card-content">
          <span className="step-number">04 / QUOTE</span>
          <h3 className="step-title">Quote</h3>
          <p className="step-desc">Itemized fixed pricing across verified vendors.</p>
        </div>
      </div>

      {/* 05 / EXECUTE */}
      <div className="process-step-card">
        <div className="step-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80')" } as React.CSSProperties}></div>
        <div className="step-card-overlay"></div>
        <div className="step-card-content">
          <span className="step-number">05 / EXECUTE</span>
          <h3 className="step-title">Execute</h3>
          <p className="step-desc">Photo logs and escrow-held milestone payments.</p>
        </div>
      </div>

      {/* 06 / MONITOR */}
      <div className="process-step-card">
        <div className="step-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80')" } as React.CSSProperties}></div>
        <div className="step-card-overlay"></div>
        <div className="step-card-content">
          <span className="step-number">06 / MONITOR</span>
          <h3 className="step-title">Monitor</h3>
          <p className="step-desc">Scheduled re-checks throughout the warranty.</p>
        </div>
      </div>
    </div>
  </section>

  {/* ==================== EARLY COST ESTIMATE SECTION (EXACT MATCH TO USER SCREENSHOT) ==================== */}
    </>
  );
}

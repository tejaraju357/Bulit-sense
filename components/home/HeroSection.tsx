'use client';

import React from 'react';

export function HeroSection() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
  <section className="section-block hero-section pad">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="hero-kicker">Predictive capex for housing societies</div>
        <h1>YOUR BUILDING’S NEXT 5 YEARS</h1>
        <div className="hero-subline">THE BILL, PREDICTED TODAY</div>
        <div className="hero-features-line">
          <span>Comprehensive Assessment</span>
          <span className="hero-bullet-dot"></span>
          <span>Precise Prioritisation</span>
          <span className="hero-bullet-dot"></span>
          <span>Budget & Cashflow</span>
          <span className="hero-bullet-dot"></span>
          <span>Support</span>
        </div>
        <div className="hero-actions">
          <a href="#forecast" className="btn-lime" id="btnHeroForecast">5 Years Repair Cost ↗</a>
          <a href="#estimate" className="btn-outline" id="btnHeroEstimate">Estimate by Sq Feet ↓</a>
        </div>
      </div>

      {/* Architectural Inspection Drawing Box (Exact Framer SVG) */}
      <div className="hero-cad-box" id="cadBox">
        <div className="cad-badge-bar">
          <span className="cad-live-indicator"><span className="cad-live-dot"></span> LIVE SENSOR TELEMETRY</span>
          <span>120 FPS SCAN</span>
        </div>
        
        <div className="hero-svg-wrapper">
          <svg viewBox="0 0 720 520" id="buildingSvg" aria-label="Architectural building inspection drawing">
            {/* Background CAD Grid */}
            <g fill="none" stroke="currentColor" strokeWidth="1" opacity=".12">
              <path d="M0 80H720M0 160H720M0 240H720M0 320H720M0 400H720M80 0V520M160 0V520M240 0V520M320 0V520M400 0V520M480 0V520M560 0V520M640 0V520"/>
            </g>
            {/* 3D Building Wireframe */}
            <g fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M130 420V146L360 42L590 146V420Z"/>
              <path d="M130 146L360 246L590 146M360 42V246M360 246V420M180 168V420M240 194V420M300 220V420M420 220V420M480 194V420M540 168V420"/>
              <path d="M130 420H590M96 452H624"/>
            </g>
            {/* Windows / Openings */}
            <g className="cad-windows" fill="currentColor" opacity="0.85">
              <path d="M188 190h32v42h-32zM250 216h32v42h-32zM412 216h32v42h-32zM474 190h32v42h-32zM188 270h32v42h-32zM250 296h32v42h-32zM412 296h32v42h-32zM474 270h32v42h-32z"/>
            </g>
            {/* Inspection Hotspots: Roof Drainage & Parapets */}
            <g fill="#e2b868" stroke="#141715" strokeWidth="2">
              <circle cx="220" cy="170" r="9" className="cad-pin" data-pin="parapet-left" style={{ cursor: 'pointer' } as React.CSSProperties}/>
              <circle cx="360" cy="110" r="9" className="cad-pin" data-pin="roof-drainage" style={{ cursor: 'pointer' } as React.CSSProperties}/>
              <circle cx="500" cy="170" r="9" className="cad-pin" data-pin="parapet-right" style={{ cursor: 'pointer' } as React.CSSProperties}/>
            </g>
            {/* Inspection Hotspot: Riser Access */}
            <g fill="#dfc28d" stroke="#1a202c" strokeWidth="2">
              <circle cx="360" cy="312" r="10" className="cad-pin" data-pin="riser-access" style={{ cursor: 'pointer' } as React.CSSProperties}/>
            </g>
            {/* Leader Lines & Text from Framer Sketch */}
            <g fill="currentColor" font-family="var(--font-mono)" font-size="13">
              <text x="38" y="34" font-weight="600" opacity="0.9">TOWER B / SAMPLE INSPECTION</text>
              <text x="412" y="104" font-weight="500">02 / ROOF DRAINAGE</text>
              <text x="390" y="334" font-weight="500" fill="#dfc28d">04 / RISER ACCESS</text>
              <text x="118" y="478" font-size="12" opacity="0.75">SECTION A—A · 180 UNITS · NOT TO SCALE</text>
            </g>
            <g stroke="#1a202c" strokeWidth="1.5">
              <path d="M432 108h-58l-14 4M390 338h-40l-20-20"/>
            </g>
          </svg>
        </div>
      </div>
    </div>

    {/* Proof Points / Stats */}
    <div className="hero-stats-row">
      <div className="stat-item">
        <strong>140+</strong>
        <span>BUILDINGS SCANNED</span>
      </div>
      <div className="stat-item">
        <strong>5 yr</strong>
        <span>WRITTEN WARRANTY</span>
      </div>
      <div className="stat-item">
        <strong>100%</strong>
        <span>MILESTONE PAYMENTS</span>
      </div>
      <div className="stat-item">
        <strong>3 wk</strong>
        <span>AUDIT TO QUOTE</span>
      </div>
    </div>
  </section>

  {/* ==================== FIVE-YEAR FORECAST SECTION ==================== */}
    </>
  );
}

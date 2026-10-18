'use client';

import React from 'react';

export function BuildingSystemsSection() {
  return (
    <>
      <section className="section-block pad" id="systems">
    <div className="mono-tag">INSPECT EVERY SYSTEM</div>
    <h2>Every repair begins with<br />understanding the building.</h2>

    <div className="systems-card-grid">
            {/* LEFT: Interactive 3D Cutaway Building Grid with On-Image Telemetry */}
      <div className="systems-visual-card" id="systemsVisualCard">
        {/* 7-Layer Cross-Fading Images Stage */}
        <div className="systems-img-stage" id="systemsImgStage">
          {/* Default Overview Infographic */}
          <img className="systems-stage-img active" data-stage="default" src="https://res.cloudinary.com/deukqrxtt/image/upload/v1792221641/Cutaway_Building_Systems_Infographic_pyjqae.png" alt="Cutaway Building Systems Overview" loading="eager" />
          {/* SYS-01 Waterproofing */}
          <img className="systems-stage-img" data-stage="0" src="https://res.cloudinary.com/deukqrxtt/image/upload/v1792221647/Neon_Waterproofing_in_a_Cutaway_Building_qtgl30.png" alt="SYS-01 Waterproofing System" loading="eager" />
          {/* SYS-02 Leakage repair */}
          <img className="systems-stage-img" data-stage="1" src="https://res.cloudinary.com/deukqrxtt/image/upload/v1792221641/Neon_Leakage_Repair_Building_Cutaway_ke06bp.png" alt="SYS-02 Leakage Repair System" loading="eager" />
          {/* SYS-03 Plumbing lines */}
          <img className="systems-stage-img" data-stage="2" src="https://res.cloudinary.com/deukqrxtt/image/upload/v1792221641/Neon_Plumbing_Cutaway_of_Modern_Building_ijwuvq.png" alt="SYS-03 Plumbing Lines System" loading="eager" />
          {/* SYS-04 Painting */}
          <img className="systems-stage-img" data-stage="3" src="https://res.cloudinary.com/deukqrxtt/image/upload/v1792221641/Modern_Building_Cutaway_with_Painting_Callout_bj9jx5.png" alt="SYS-04 Painting System" loading="eager" />
          {/* SYS-05 Solar */}
          <img className="systems-stage-img" data-stage="4" src="https://res.cloudinary.com/deukqrxtt/image/upload/v1792221641/Solar_Panels_on_a_Modern_Cutaway_Building_wx3zbj.png" alt="SYS-05 Solar System" loading="eager" />
          {/* SYS-06 Clubhouse redesign */}
          <img className="systems-stage-img" data-stage="5" src="https://res.cloudinary.com/deukqrxtt/image/upload/v1792221641/Neon-Highlighted_Clubhouse_Building_Section_wfrbsb.png" alt="SYS-06 Clubhouse Redesign System" loading="eager" />
        </div>

        {/* Ambient Vignette & Architectural CAD Grid Overlay */}
        <div className="systems-stage-vignette"></div>
        <div className="systems-blueprint-grid"></div>

        {/* Top HUD Telemetry Indicator */}
        <div className="systems-visual-label-top">
          <span className="hud-pulse-dot"></span>
          <span>LIVE 3D CUTAWAY MODEL • TOWER B</span>
        </div>

        {/* FLOATING ON-IMAGE TELEMETRY HUD (MATCHING SCREENSHOT) */}
        <div className="stage-telemetry-overlay" id="stageTelemetryOverlay">
          <div className="stage-telemetry-card" id="stageTelemetryCard" title="Click to view full verified audit report">
            <div className="st-card-header">
              <div className="st-trade-title" id="stTradeTitle">OVERALL HEALTH</div>
              <div className="st-circle-icon" id="stCircleIcon">
                <svg className="st-ring-svg" viewBox="0 0 36 36">
                  <path className="st-ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="st-ring-fill" id="stRingFill" strokeDasharray="84, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="st-ring-center-dot" id="stCenterDot"></span>
              </div>
            </div>

            <div className="st-score-row">
              <div className="st-big-num" id="stBigNum">84<small>/100</small></div>
              <div className="st-status-pill" id="stStatusPill">MONITORED</div>
            </div>

            <div className="st-slider-wrap">
              <div className="st-slider-bar">
                <div className="st-slider-fill" id="stSliderFill" style={{ width: '84%' } as React.CSSProperties}>
                  <span className="st-slider-pip"></span>
                </div>
              </div>
            </div>

            <div className="st-submetrics">
              <div className="st-metric-row">
                <span className="st-m-label" id="stSubLabel1">Trades Scanned</span>
                <span className="st-m-val" id="stSubVal1">6 of 6 Systems Active</span>
              </div>
              <div className="st-metric-row">
                <span className="st-m-label" id="stSubLabel2">Critical Path</span>
                <span className="st-m-val" id="stSubVal2">Year 1-2 Priority Focus</span>
              </div>
              <div className="st-metric-row">
                <span className="st-m-label" id="stSubLabel3">5-Yr Capex</span>
                <span className="st-m-val" id="stSubVal3">₹203 L Projected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Systems Detail & Trade Functions Card */}
      <div className="systems-detail-card" id="systemsDetailCard">
        <span className="sys-tag-header" id="sysTag">OVERVIEW • 6 BUILDING SYSTEMS</span>
        <h3 className="sys-title" id="sysTitle">Full Cutaway Systems</h3>
        <p className="sys-desc" id="sysDesc">We scan every trade • from terrace waterproofing to basement risers • and model how each will age over the next 5 years.</p>
        <div className="sys-inspection-meta" id="sysMeta">Click any system below to inspect engineering diagnostics and live on-image telemetry.</div>

        <div className="sys-buttons-list" id="sysButtonsList">
          <button className="sys-btn" aria-pressed="true" data-index="default" type="button">
            <i style={{ background: 'var(--c-lime)' } as React.CSSProperties}></i>
            <span>OVERVIEW / All 6 Systems</span>
          </button>
          <button className="sys-btn" aria-pressed="false" data-index="0" type="button">
            <i style={{ background: '#c8e56b' } as React.CSSProperties}></i>
            <span>SYS-01 / Waterproofing</span>
          </button>
          <button className="sys-btn" aria-pressed="false" data-index="1" type="button">
            <i style={{ background: '#e69b63' } as React.CSSProperties}></i>
            <span>SYS-02 / Leakage repair</span>
          </button>
          <button className="sys-btn" aria-pressed="false" data-index="2" type="button">
            <i style={{ background: '#bfc6b9' } as React.CSSProperties}></i>
            <span>SYS-03 / Plumbing lines</span>
          </button>
          <button className="sys-btn" aria-pressed="false" data-index="3" type="button">
            <i style={{ background: '#dcd8cd' } as React.CSSProperties}></i>
            <span>SYS-04 / Painting</span>
          </button>
          <button className="sys-btn" aria-pressed="false" data-index="4" type="button">
            <i style={{ background: '#c8e56b' } as React.CSSProperties}></i>
            <span>SYS-05 / Solar</span>
          </button>
          <button className="sys-btn" aria-pressed="false" data-index="5" type="button">
            <i style={{ background: '#9fc3a9' } as React.CSSProperties}></i>
            <span>SYS-06 / Clubhouse redesign</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* ==================== PROCESS SEQUENCE SECTION ==================== */}
    </>
  );
}

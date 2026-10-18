'use client';

import React from 'react';

export function EstimatorSection() {
  return (
    <>
      <section className="section-block pad" id="estimate">
    <div className="mono-tag">EARLY COST ESTIMATE</div>
    <h2>Understand the scale of your next repair.</h2>
    <p style={{ color: 'var(--mute)', maxWidth: '68ch', margin: '12px 0 28px', fontSize: '16px' } as React.CSSProperties}>Explore an indicative cost range using the existing standard rate assumptions. A firm quote follows the site audit.</p>

    <div className="estimator-container-card">
      {/* Tabs matching Screenshot */}
      <div className="estimator-tabs-bar" role="tablist" id="estTabs">
        <button className="estimator-tab-btn" aria-selected="true" data-rate="95" type="button">Waterproofing</button>
        <button className="estimator-tab-btn" aria-selected="false" data-rate="30" type="button">Painting</button>
        <button className="estimator-tab-btn" aria-selected="false" data-rate="160" type="button">Plumbing</button>
        <button className="estimator-tab-btn" aria-selected="false" data-rate="620" type="button">Solar</button>
      </div>

      {/* Area Row matching Screenshot */}
      <div className="estimator-input-row">
        <div>
          <span className="mono-tag" style={{ marginBottom: '0' } as React.CSSProperties}>AREA</span>
          <strong className="estimator-area-val" id="estAreaDisplay">20,000</strong>
          <span className="estimator-rate-note" id="estRateNote">sq ft · ₹95 per sq ft</span>
        </div>
        <div>
          <input type="range" className="lime-slider" id="estAreaSlider" min="2000" max="100000" step="1000" value="20000" aria-label="Area in square feet" />
        </div>
      </div>

      {/* Results Grid matching Screenshot */}
      <div className="estimator-results-grid">
        <div>
          <span className="mono-tag" style={{ marginBottom: '0' } as React.CSSProperties}>INDICATIVE RANGE</span>
          <strong className="estimator-res-number" id="estRangeDisplay">₹16.1 L – ₹21.9 L</strong>
        </div>
        <div>
          <span className="mono-tag" style={{ marginBottom: '0' } as React.CSSProperties}>TIMELINE / WARRANTY</span>
          <strong className="estimator-res-number" id="estTimelineDisplay">5 wk</strong>
          <span style={{ fontSize: '14px', color: 'var(--mute)', display: 'block', marginTop: '4px' } as React.CSSProperties}>5-year warranty claim</span>
        </div>
      </div>

      {/* Actions Bar matching Screenshot */}
      <div className="estimator-actions-bar">
        <p className="estimator-disclaimer-note">Indicative only. Standard rate assumptions are verified during the building audit.</p>
        <div className="estimator-btn-group">
          <button type="button" className="btn-lime" id="btnViewReport">VIEW REPORT ↗</button>
          <button type="button" className="btn-outline" id="btnEstBookAudit">BOOK A BUILDING AUDIT</button>
        </div>
      </div>
    </div>
  </section>

  {/* ==================== PROJECT RECORD SECTION ==================== */}
    </>
  );
}

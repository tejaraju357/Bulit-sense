'use client';

import React from 'react';

export function ForecastSection() {
  return (
    <>
      <section className="section-block pad" id="forecast">
    <div className="mono-tag">SAMPLE BUILDING FORECAST / TOWER B / 180 UNITS</div>
    <div className="forecast-layout">
      <div className="forecast-summary-box">
        <h2>Five years of repairs.<br />One clear plan.</h2>
        <div style={{ marginTop: '24px' } as React.CSSProperties}>
          <span className="mono-tag" style={{ marginBottom: '0' } as React.CSSProperties}>TOTAL PROJECTED REPAIRS</span>
          <div className="big-stat-number">₹2.03 Cr</div>
        </div>
        <p className="forecast-copy">About ₹1,880 per flat per month. The current sinking fund stands at ₹1.40 Cr, leaving a ₹63 L gap to plan for now.</p>
        <div className="funds-breakdown">
          <div className="fund-col">
            <span>CURRENT SINKING FUND</span>
            <strong>₹1.40 Cr</strong>
          </div>
          <div className="fund-col">
            <span>FUNDING GAP</span>
            <strong style={{ color: 'var(--c-orange)' } as React.CSSProperties}>₹63 L</strong>
          </div>
        </div>
      </div>

      {/* Interactive Forecast Chart */}
      <div className="chart-container-card">
        <div className="chart-header-row">
          <span>Five-year spend forecast</span>
          <span>₹ lakh / year</span>
        </div>

        <div className="chart-bars-group" id="forecastBars" role="group" aria-label="Yearly spend columns">
          <button type="button" className="chart-year-btn" aria-label="Year 1, ₹24 lakh" aria-pressed="false" data-idx="0">
            <strong className="chart-year-val">24 L</strong>
            <div className="chart-stack-rail">
              <div className="chart-stack-body" style={{ height: '42.1%' } as React.CSSProperties}>
                <div style={{ height: '75%', width: '100%', background: '#ffffff', minHeight: '2px' } as React.CSSProperties}></div>
                <div style={{ height: '25%', width: '100%', background: '#d9d9d9', minHeight: '2px' } as React.CSSProperties}></div>
              </div>
            </div>
            <span className="chart-year-tag">Y1</span>
          </button>
          <button type="button" className="chart-year-btn" aria-label="Year 2, ₹56 lakh" aria-pressed="true" data-idx="1">
            <strong className="chart-year-val">56 L</strong>
            <div className="chart-stack-rail">
              <div className="chart-stack-body" style={{ height: '98.2%' } as React.CSSProperties}>
                <div style={{ height: '7.1%', width: '100%', background: '#ffffff', minHeight: '2px' } as React.CSSProperties}></div>
                <div style={{ height: '39.3%', width: '100%', background: '#d9d9d9', minHeight: '2px' } as React.CSSProperties}></div>
                <div style={{ height: '53.6%', width: '100%', background: '#ff6500', minHeight: '2px' } as React.CSSProperties}></div>
              </div>
            </div>
            <span className="chart-year-tag">Y2</span>
          </button>
          <button type="button" className="chart-year-btn" aria-label="Year 3, ₹46 lakh" aria-pressed="false" data-idx="2">
            <strong className="chart-year-val">46 L</strong>
            <div className="chart-stack-rail">
              <div className="chart-stack-body" style={{ height: '80.7%' } as React.CSSProperties}>
                <div style={{ height: '17.4%', width: '100%', background: '#d9d9d9', minHeight: '2px' } as React.CSSProperties}></div>
                <div style={{ height: '82.6%', width: '100%', background: '#afafaf', minHeight: '2px' } as React.CSSProperties}></div>
              </div>
            </div>
            <span className="chart-year-tag">Y3</span>
          </button>
          <button type="button" className="chart-year-btn" aria-label="Year 4, ₹57 lakh" aria-pressed="false" data-idx="3">
            <strong className="chart-year-val">57 L</strong>
            <div className="chart-stack-rail">
              <div className="chart-stack-body" style={{ height: '100%' } as React.CSSProperties}>
                <div style={{ height: '21.1%', width: '100%', background: '#ffffff', minHeight: '2px' } as React.CSSProperties}></div>
                <div style={{ height: '78.9%', width: '100%', background: '#ff6500', minHeight: '2px' } as React.CSSProperties}></div>
              </div>
            </div>
            <span className="chart-year-tag">Y4</span>
          </button>
          <button type="button" className="chart-year-btn" aria-label="Year 5, ₹20 lakh" aria-pressed="false" data-idx="4">
            <strong className="chart-year-val">20 L</strong>
            <div className="chart-stack-rail">
              <div className="chart-stack-body" style={{ height: '35.1%' } as React.CSSProperties}>
                <div style={{ height: '30%', width: '100%', background: '#ffffff', minHeight: '2px' } as React.CSSProperties}></div>
                <div style={{ height: '70%', width: '100%', background: '#d9d9d9', minHeight: '2px' } as React.CSSProperties}></div>
              </div>
            </div>
            <span className="chart-year-tag">Y5</span>
          </button>
        </div>

        <div className="chart-legend" id="chartLegend">
          <span><i style={{ background: '#ffffff' } as React.CSSProperties}></i> Waterproofing</span>
          <span><i style={{ background: '#d9d9d9' } as React.CSSProperties}></i> Plumbing</span>
          <span><i style={{ background: '#afafaf' } as React.CSSProperties}></i> Painting</span>
          <span><i style={{ background: '#ff6500' } as React.CSSProperties}></i> Solar</span>
          <span><i style={{ background: '#4a4a4a' } as React.CSSProperties}></i> Clubhouse</span>
        </div>

        <div className="chart-selected-detail" id="chartDetailBox" aria-live="polite">
          <div className="chart-selected-title">Y2 · ₹ 56 L</div>
          <div className="chart-selected-chips">
            <span><i style={{ background: '#ffffff' } as React.CSSProperties}></i> Waterproofing ₹ 4 L</span>
            <span><i style={{ background: '#d9d9d9' } as React.CSSProperties}></i> Plumbing ₹ 22 L</span>
            <span><i style={{ background: '#ff6500' } as React.CSSProperties}></i> Solar ₹ 30 L</span>
          </div>
        </div>

        <p className="chart-sub-disclaimer">Illustrative sample data for Tower B, 180 units. A firm quote follows the site audit.</p>
      </div>
    </div>
  </section>

  {/* ==================== BUILDING SYSTEMS SECTION ==================== */}
    </>
  );
}

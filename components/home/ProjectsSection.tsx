'use client';

import React from 'react';

export function ProjectsSection() {
  return (
    <>
      <section className="section-block pad" id="projects">
    <div className="mono-tag">PROJECT RECORD</div>
    <h2>Planned carefully.<br />Delivered transparently.</h2>
    <p style={{ color: 'var(--mute)', margin: '12px 0 0', maxWidth: '68ch', fontSize: '16px' } as React.CSSProperties}>Verified diagnostic, structural repair, and renewable energy deployments across residential societies and institutional campuses.</p>

    {/* Filter Buttons Bar: Apartments and Schools (Only those two) */}
    <div className="project-filter-bar" role="tablist" aria-label="Filter project records">
      <button className="project-filter-btn active" data-filter="apartment" type="button" aria-selected="true">
        <span>Apartments & Societies</span>
        <span className="count-badge">5</span>
      </button>
      <button className="project-filter-btn" data-filter="school" type="button" aria-selected="false">
        <span>Schools & Campuses</span>
        <span className="count-badge">5</span>
      </button>
    </div>

    <div className="project-ledger-table" id="projectLedgerTable">
      <div className="project-row header-row">
        <span>Project & City</span>
        <span>Type</span>
        <span>Scope of Work</span>
        <span>Scale / Units</span>
        <span>Duration</span>
        <span>Status</span>
      </div>

      {/* APARTMENTS & SOCIETIES RECORDS */}
      <div className="project-row" data-type="apartment">
        <div>
          <span className="project-name">Sunrise CHS, Pune</span>
          <span style={{ display: 'block', fontSize: '12px', color: 'var(--mute)', fontFamily: 'var(--font-mono)', marginTop: '2px' } as React.CSSProperties}>Kothrud · 14 Floors</span>
        </div>
        <span><span className="project-type-tag apartment">Apartment</span></span>
        <span>Terrace waterproofing & joint seals</span>
        <span>180 units · 3 Towers</span>
        <span>5 weeks</span>
        <span className="status-badge delivered">DELIVERED</span>
      </div>

      <div className="project-row" data-type="apartment">
        <div>
          <span className="project-name">Lakeview Towers, Mumbai</span>
          <span style={{ display: 'block', fontSize: '12px', color: 'var(--mute)', fontFamily: 'var(--font-mono)', marginTop: '2px' } as React.CSSProperties}>Powai · 24 Floors</span>
        </div>
        <span><span className="project-type-tag apartment">Apartment</span></span>
        <span>Main riser shaft epoxy relining</span>
        <span>312 units · 2 Towers</span>
        <span>9 weeks</span>
        <span className="status-badge delivered">DELIVERED</span>
      </div>

      <div className="project-row" data-type="apartment">
        <div>
          <span className="project-name">Orchid Greens, Bengaluru</span>
          <span style={{ display: 'block', fontSize: '12px', color: 'var(--mute)', fontFamily: 'var(--font-mono)', marginTop: '2px' } as React.CSSProperties}>Whitefield · 12 Floors</span>
        </div>
        <span><span className="project-type-tag apartment">Apartment</span></span>
        <span>Common-area rooftop solar 120 kW</span>
        <span>96 units · 1 Tower</span>
        <span>6 weeks</span>
        <span className="status-badge delivered">DELIVERED</span>
      </div>

      <div className="project-row" data-type="apartment">
        <div>
          <span className="project-name">Palm Court, Hyderabad</span>
          <span style={{ display: 'block', fontSize: '12px', color: 'var(--mute)', fontFamily: 'var(--font-mono)', marginTop: '2px' } as React.CSSProperties}>Gachibowli · 18 Floors</span>
        </div>
        <span><span className="project-type-tag apartment">Apartment</span></span>
        <span>Clubhouse redesign & basement sump</span>
        <span>240 units · 4 Towers</span>
        <span>12 weeks</span>
        <span className="status-badge delivered">DELIVERED</span>
      </div>

      <div className="project-row" data-type="apartment">
        <div>
          <span className="project-name">Godrej Horizon, Pune</span>
          <span style={{ display: 'block', fontSize: '12px', color: 'var(--mute)', fontFamily: 'var(--font-mono)', marginTop: '2px' } as React.CSSProperties}>Undri · 16 Floors</span>
        </div>
        <span><span className="project-type-tag apartment">Apartment</span></span>
        <span>Façade structural crack injection & paint</span>
        <span>220 units · 3 Towers</span>
        <span>7 weeks</span>
        <span className="status-badge delivered">DELIVERED</span>
      </div>

      {/* SCHOOLS & CAMPUSES RECORDS */}
      <div className="project-row" data-type="school" data-hidden="true">
        <div>
          <span className="project-name">Heritage International School, Pune</span>
          <span style={{ display: 'block', fontSize: '12px', color: 'var(--mute)', fontFamily: 'var(--font-mono)', marginTop: '2px' } as React.CSSProperties}>Baner · Main Campus</span>
        </div>
        <span><span className="project-type-tag school">School Campus</span></span>
        <span>Academic blocks rooftop seal & drainage</span>
        <span>2,400 students · 4 blocks</span>
        <span>4 weeks</span>
        <span className="status-badge delivered">DELIVERED</span>
      </div>

      <div className="project-row" data-type="school" data-hidden="true">
        <div>
          <span className="project-name">St. Xavier's High School Campus, Mumbai</span>
          <span style={{ display: 'block', fontSize: '12px', color: 'var(--mute)', fontFamily: 'var(--font-mono)', marginTop: '2px' } as React.CSSProperties}>Fort Campus · Heritage Wing</span>
        </div>
        <span><span className="project-type-tag school">School Campus</span></span>
        <span>Riser line rehab & science lab plumbing</span>
        <span>1,850 students · 3 blocks</span>
        <span>6 weeks</span>
        <span className="status-badge delivered">DELIVERED</span>
      </div>

      <div className="project-row" data-type="school" data-hidden="true">
        <div>
          <span className="project-name">Delhi Public School (South), Bengaluru</span>
          <span style={{ display: 'block', fontSize: '12px', color: 'var(--mute)', fontFamily: 'var(--font-mono)', marginTop: '2px' } as React.CSSProperties}>Kanakapura Rd · 12 Acres</span>
        </div>
        <span><span className="project-type-tag school">School Campus</span></span>
        <span>Façade elastomeric coat & sports pavilion</span>
        <span>3,200 students · 5 blocks</span>
        <span>8 weeks</span>
        <span className="status-badge delivered">DELIVERED</span>
      </div>

      <div className="project-row" data-type="school" data-hidden="true">
        <div>
          <span className="project-name">Oakridge Global Campus, Hyderabad</span>
          <span style={{ display: 'block', fontSize: '12px', color: 'var(--mute)', fontFamily: 'var(--font-mono)', marginTop: '2px' } as React.CSSProperties}>Bachupally · Junior & Senior</span>
        </div>
        <span><span className="project-type-tag school">School Campus</span></span>
        <span>80 kW rooftop solar & auditorium seal</span>
        <span>2,100 students · 2 blocks</span>
        <span>7 weeks</span>
        <span className="status-badge delivered">DELIVERED</span>
      </div>

      <div className="project-row" data-type="school" data-hidden="true">
        <div>
          <span className="project-name">Symbiosis International Campus, Pune</span>
          <span style={{ display: 'block', fontSize: '12px', color: 'var(--mute)', fontFamily: 'var(--font-mono)', marginTop: '2px' } as React.CSSProperties}>Viman Nagar · Academic Wing</span>
        </div>
        <span><span className="project-type-tag school">School Campus</span></span>
        <span>Basement storm sump & waterproofing audit</span>
        <span>3,800 students · 6 blocks</span>
        <span>5 weeks</span>
        <span className="status-badge delivered">DELIVERED</span>
      </div>
    </div>
  </section>

  {/* ==================== BOOK AN AUDIT SECTION ==================== */}
    </>
  );
}

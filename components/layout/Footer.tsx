'use client';

import React from 'react';

export function Footer() {
  return (
    <>
      <footer className="site-footer pad" id="siteFooter">
  <div className="footer-top-grid">
    {/* Brand / Column 1 */}
    <div className="footer-col footer-col-brand">
      <a href="#top" className="footer-brand-title">
        BUILTSENSE
        <span className="footer-status-dot" title="Network active"></span>
      </a>
      <p className="footer-brand-desc">
        Predictive building intelligence & 5-year capital expenditure roadmaps for housing societies and educational campuses. Fixed-price repairs with written warranties.
      </p>
      <div className="footer-cert-tags">
        <span className="footer-pill-tag"><i className="tag-dot"></i> ISO 9001:2015</span>
        <span className="footer-pill-tag">140+ Audited</span>
        <span className="footer-pill-tag">5-Year Warranty</span>
      </div>
    </div>

    {/* Column 2: About Us */}
    <div className="footer-col" id="footerAboutUs">
      <h4 className="footer-col-heading">ABOUT US</h4>
      <ul className="footer-nav-list">
        <li><button type="button" className="footer-action-link" id="btnFooterAboutModal">Company Story & Mission ↗</button></li>
        <li><a href="#sequence" className="footer-link">Drone & Thermal Methodology</a></li>
        <li><a href="#systems" className="footer-link">6 Diagnostic Inspection Systems</a></li>
        <li><a href="#forecast" className="footer-link">5-Year Capex Forecasting</a></li>
        <li><a href="#projects" className="footer-link">Verified Project Records</a></li>
      </ul>
    </div>

    {/* Column 3: Careers */}
    <div className="footer-col" id="footerCareers">
      <div className="footer-heading-with-badge">
        <h4 className="footer-col-heading">CAREERS</h4>
        <span className="hiring-badge">HIRING</span>
      </div>
      <ul className="footer-nav-list">
        <li><button type="button" className="footer-action-link" id="btnFooterCareersModal">Explore Open Roles (3) ↗</button></li>
        <li><span className="career-role-item">Diagnostic Engineer <small>· Pune</small></span></li>
        <li><span className="career-role-item">Drone Survey Pilot <small>· Mumbai</small></span></li>
        <li><span className="career-role-item">Civil Capex Estimator <small>· Bengaluru</small></span></li>
        <li style={{ marginTop: '4px' } as React.CSSProperties}>
          <a href="mailto:careers@builtsense.com" className="footer-link-highlight">Apply: careers@builtsense.com ↗</a>
        </li>
      </ul>
    </div>

    {/* Column 4: Contact Us */}
    <div className="footer-col" id="footerContactUs">
      <h4 className="footer-col-heading">CONTACT US</h4>
      <ul className="footer-contact-list">
        <li>
          <span className="contact-label">DIRECT HELPLINE</span>
          <a href="tel:+919820012345" className="contact-value">+91 98200 12345</a>
        </li>
        <li>
          <span className="contact-label">EMAIL INQUIRIES</span>
          <a href="mailto:audits@builtsense.com" className="contact-value">audits@builtsense.com</a>
        </li>
        <li>
          <span className="contact-label">OPERATING HUBS</span>
          <span className="contact-value-text">Mumbai · Pune · Bengaluru · Hyderabad</span>
        </li>
      </ul>
      <a href="#book" className="btn-lime footer-cta-btn" id="btnFooterBookAudit">Book Site Audit ↗</a>
    </div>
  </div>

  <div className="footer-bottom-bar">
    <div className="footer-copyright">
      © 2026 BUILTSENSE Technologies Pvt. Ltd. All rights reserved.
    </div>
    <div className="footer-status-indicator">
      <span className="live-dot-pulse"></span> Diagnostic Telemetry & Sensors Online
    </div>
    <div className="footer-legal-links">
      <button type="button" className="footer-sub-link" id="btnFooterPrivacy">Privacy</button>
      <span className="sep">·</span>
      <button type="button" className="footer-sub-link" id="btnFooterTerms">Terms</button>
      <span className="sep">·</span>
      <a href="#top" className="footer-sub-link">Back to Top ↑</a>
    </div>
  </div>
</footer>
    </>
  );
}

'use client';

import React from 'react';

export function Navbar() {
  return (
    <>
      <header className="site-header pad">
  <a href="#top" className="logo-wordmark">BUILTSENSE</a>
  
  <nav className="nav-links">
    <a href="#forecast">Forecast</a>
    <a href="#systems">Building systems</a>
    <a href="#sequence">Process</a>
    <a href="#estimate">Estimate</a>
    <a href="#projects">Projects</a>
  </nav>

  <div className="nav-right">
    {/* Light / Dark Mode Toggle Button */}
    <button className="theme-toggle-btn" id="themeToggle" aria-label="Toggle theme" type="button">
      <span id="themeIcon">☀</span>
      <span id="themeLabel">LIGHT</span>
    </button>
    <button className="btn-audit" id="btnNavBookAudit" type="button">Book audit</button>
    <button className="mobile-menu-btn" id="mobileMenuBtn" aria-expanded="false" type="button">Menu +</button>
  </div>
</header>
    </>
  );
}

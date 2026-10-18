// BUILTSENSE Titanium Client Interactive Logic
function initBuiltsense() {
  if (window.__builtsenseInitialized) {
    return;
  }
  window.__builtsenseInitialized = true;


  // Safe helper to update the range slider progress bar
  function updateSliderProgress() {
    const slider = document.getElementById('estAreaSlider');
    if (!slider) return;
    const min = Number(slider.min) || 2000;
    const max = Number(slider.max) || 100000;
    const val = Number(slider.value) || 20000;
    const progress = ((val - min) / (max - min)) * 100;
    slider.style.setProperty('--progress', progress + '%');
  }

  // 1. THEME TOGGLE (LIGHT & DARK MODE)
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('builtsense_theme_titanium', theme);
      localStorage.setItem('builtsense_theme', theme);
    } catch(e) {}
    const icon = document.getElementById('themeIcon');
    const label = document.getElementById('themeLabel');
    if (icon && label) {
      if (theme === 'light') {
        icon.textContent = '☾';
        label.textContent = 'DARK';
      } else {
        icon.textContent = '☀';
        label.textContent = 'LIGHT';
      }
    }
    updateSliderProgress();
    console.log('[THEME] Applied theme:', theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    console.log('[THEME] Toggling from', current, 'to', next);
    applyTheme(next);
  }

  window.applyTheme = applyTheme;
  window.toggleTheme = toggleTheme;

  let savedTheme = 'dark';
  try {
    savedTheme = localStorage.getItem('builtsense_theme_titanium') || 
      localStorage.getItem('builtsense_theme') || 
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  } catch(e) {}
  applyTheme(savedTheme);

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.onclick = function(e) {
      if (e) e.preventDefault();
      toggleTheme();
    };
  }

  // 2. MOBILE MENU TOGGLE
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
      mobileMenuBtn.textContent = isOpen ? 'Close −' : 'Menu +';
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.textContent = 'Menu +';
      });
    });
  }

  // 3. FORECAST STACKED BAR CHART
  const categories = [
    { name: 'Waterproofing', color: '#ffffff' },
    { name: 'Plumbing', color: '#d9d9d9' },
    { name: 'Painting', color: '#afafaf' },
    { name: 'Solar', color: '#ff6500' },
    { name: 'Clubhouse', color: '#4a4a4a' }
  ];

  const forecastData = [
    [18, 6, 0, 0, 0],       // Y1: 24L
    [4, 22, 0, 30, 0],      // Y2: 56L
    [0, 8, 38, 0, 0],       // Y3: 46L
    [12, 0, 0, 45, 0],      // Y4: 57L
    [6, 14, 0, 0, 0]        // Y5: 20L
  ];

  const chartDetailBox = document.getElementById('chartDetailBox');
  const yearButtons = Array.from(document.querySelectorAll('.chart-year-btn'));

  function renderChartDetail(yearIdx) {
    const d = forecastData[yearIdx];
    if (!d || !chartDetailBox) return;
    const total = d.reduce((acc, v) => acc + v, 0);
    const breakdown = d.map((v, catIdx) => {
      if (!v) return null;
      return '<span><i style="background:' + categories[catIdx].color + '"></i> ' + categories[catIdx].name + ' ₹ ' + v + ' L</span>';
    }).filter(Boolean).join('');

    chartDetailBox.innerHTML = 
      '<div class="chart-selected-title">Y' + (yearIdx + 1) + ' · ₹ ' + total + ' L</div>' +
      '<div class="chart-selected-chips">' + breakdown + '</div>';

    yearButtons.forEach((btn, idx) => {
      btn.setAttribute('aria-pressed', String(idx === yearIdx));
    });
  }

  yearButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => renderChartDetail(i));
  });

    // 4. INTERACTIVE SYSTEMS EXPLORER (CLICK-ONLY ON-IMAGE TELEMETRY)
  const SYSTEM_IMAGES = {
    default: 'https://res.cloudinary.com/deukqrxtt/image/upload/v1792221641/Cutaway_Building_Systems_Infographic_pyjqae.png',
    0: 'https://res.cloudinary.com/deukqrxtt/image/upload/v1792221647/Neon_Waterproofing_in_a_Cutaway_Building_qtgl30.png',
    1: 'https://res.cloudinary.com/deukqrxtt/image/upload/v1792221641/Neon_Leakage_Repair_Building_Cutaway_ke06bp.png',
    2: 'https://res.cloudinary.com/deukqrxtt/image/upload/v1792221641/Neon_Plumbing_Cutaway_of_Modern_Building_ijwuvq.png',
    3: 'https://res.cloudinary.com/deukqrxtt/image/upload/v1792221641/Modern_Building_Cutaway_with_Painting_Callout_bj9jx5.png',
    4: 'https://res.cloudinary.com/deukqrxtt/image/upload/v1792221641/Solar_Panels_on_a_Modern_Cutaway_Building_wx3zbj.png',
    5: 'https://res.cloudinary.com/deukqrxtt/image/upload/v1792221641/Neon-Highlighted_Clubhouse_Building_Section_wfrbsb.png'
  };

  try {
    Object.values(SYSTEM_IMAGES).forEach(src => {
      const preloadImg = new Image();
      preloadImg.src = src;
    });
  } catch (e) {
    console.warn('Image preloader note:', e);
  }

  const defaultOverviewData = {
    tag: 'OVERVIEW • 6 BUILDING SYSTEMS',
    title: 'Full Cutaway Systems',
    desc: 'We scan every trade • from terrace waterproofing to basement risers • and model how each will age over the next 5 years.',
    meta: 'Click any trade on the list below to update the live on-image telemetry and 3D diagnostics.',
    status: 'CLICK TRADES TO INSPECT',
    telemetry: {
      trade: 'OVERALL HEALTH',
      score: 84,
      status: 'MONITORED',
      isAlert: false,
      sub1L: 'Trades Scanned',
      sub1V: '6 of 6 Systems Active',
      sub2L: 'Critical Path',
      sub2V: 'Year 1-2 Priority Focus',
      sub3L: '5-Yr Capex',
      sub3V: '₹203 L Projected'
    }
  };

  const systems = [
    {
      id: 'SYS-01',
      title: 'Waterproofing',
      desc: 'Terrace, basement, sump, and podium tanks.',
      meta: 'Audit Score: 82/100 (Monitored) • Membrane condition • drainage falls • Year 1 Capex',
      status: 'SYS-01: TERRACE & BASEMENT WATERPROOFING ACTIVE',
      color: '#cbd5e1',
      telemetry: {
        trade: 'WATERPROOFING',
        score: 82,
        status: 'MONITORED',
        isAlert: false,
        sub1L: 'Observed Condition',
        sub1V: 'Ponding near outlet #2',
        sub2L: 'Action Plan',
        sub2V: 'Year 1 Membrane Coat',
        sub3L: 'Sinking Fund',
        sub3V: '₹24.0 L (100% Funded)'
      }
    },
    {
      id: 'SYS-02',
      title: 'Leakage repair',
      desc: 'Seepage, cracks, and expansion joints across towers.',
      meta: 'Audit Score: 64/100 (High Alert) • Thermal dampness mapping • injection sealing • Immediate Action',
      status: 'SYS-02: JOINT SEEPAGE & CRACK DIAGNOSTICS ACTIVE',
      color: '#e2b868',
      telemetry: {
        trade: 'LEAKAGE REPAIR',
        score: 64,
        status: 'HIGH ALERT',
        isAlert: true,
        sub1L: 'Observed Condition',
        sub1V: 'Joint 14B micro-fissure',
        sub2L: 'Action Plan',
        sub2V: 'PU Pressure Grout',
        sub3L: 'Sinking Fund',
        sub3V: '₹18.5 L (Reserve Required)'
      }
    },
    {
      id: 'SYS-03',
      title: 'Plumbing lines',
      desc: 'Main risers, pressure booster pumps, and relining.',
      meta: 'Audit Score: 71/100 (Alert) • Cavitation detection • ultrasonic wall thickness • Year 2 Capex',
      status: 'SYS-03: MAIN RISER & PRESSURE FLOW ACTIVE',
      color: '#94a3b8',
      telemetry: {
        trade: 'PLUMBING LINES',
        score: 71,
        status: 'ALERT',
        isAlert: true,
        sub1L: 'Observed Condition',
        sub1V: '1.4 Bar pressure drop',
        sub2L: 'Action Plan',
        sub2V: 'Ultrasonic Relining',
        sub3L: 'Sinking Fund',
        sub3V: '₹56.0 L (Allocated)'
      }
    },
    {
      id: 'SYS-04',
      title: 'Painting',
      desc: 'Exterior weather shield façade and common corridors.',
      meta: 'Audit Score: 88/100 (Stable) • Elastomeric coats • weather barrier durability • Year 3 Capex',
      status: 'SYS-04: FAÇADE WEATHER SHIELD ACTIVE',
      color: '#f1f5f9',
      telemetry: {
        trade: 'FAÇADE PAINT',
        score: 88,
        status: 'STABLE',
        isAlert: false,
        sub1L: 'Observed Condition',
        sub1V: 'West face weathering',
        sub2L: 'Action Plan',
        sub2V: 'Year 3 Weather Shield',
        sub3L: 'Sinking Fund',
        sub3V: '₹46.0 L (Scheduled)'
      }
    },
    {
      id: 'SYS-05',
      title: 'Solar',
      desc: 'Rooftop photovoltaic plants for common-area power.',
      meta: 'Audit Score: 95/100 (Prime / High ROI) • Solar irradiance • 120 kW ready • 3.4 yr payback',
      status: 'SYS-05: ROOFTOP PHOTOVOLTAIC ARRAY ACTIVE',
      color: '#cbd5e1',
      telemetry: {
        trade: 'SOLAR PV ARRAY',
        score: 95,
        status: 'HIGH ROI',
        isAlert: false,
        sub1L: 'Rooftop Ready',
        sub1V: '120 kW Space Cleared',
        sub2L: 'Payback Period',
        sub2V: '3.4 Yr Payback Window',
        sub3L: 'Capex Offset',
        sub3V: '₹57.0 L (Phase 1 & 2)'
      }
    },
    {
      id: 'SYS-06',
      title: 'Clubhouse redesign',
      desc: 'Interiors, gym, pool deck, and community spaces.',
      meta: 'Audit Score: 85/100 (Good Condition) • Acoustic comfort • community space flow • Year 5 Capex',
      status: 'SYS-06: PODIUM & COMMUNITY AMENITIES ACTIVE',
      color: '#e2e8f0',
      telemetry: {
        trade: 'CLUBHOUSE & DECK',
        score: 85,
        status: 'GOOD',
        isAlert: false,
        sub1L: 'Amenity Condition',
        sub1V: 'Minor pool deck wear',
        sub2L: 'Action Plan',
        sub2V: 'Year 5 Modernization',
        sub3L: 'Sinking Fund',
        sub3V: '₹20.0 L (Future Provision)'
      }
    }
  ];

  const sysTag = document.getElementById('sysTag');
  const sysTitle = document.getElementById('sysTitle');
  const sysDesc = document.getElementById('sysDesc');
  const sysMeta = document.getElementById('sysMeta');
  const sysStageImgs = Array.from(document.querySelectorAll('.systems-stage-img'));
  const sysBtns = Array.from(document.querySelectorAll('.sys-btn'));

  // On-Image Telemetry Elements
  const stTradeTitle = document.getElementById('stTradeTitle');
  const stBigNum = document.getElementById('stBigNum');
  const stStatusPill = document.getElementById('stStatusPill');
  const stRingFill = document.getElementById('stRingFill');
  const stCenterDot = document.getElementById('stCenterDot');
  const stSliderFill = document.getElementById('stSliderFill');
  const stSubLabel1 = document.getElementById('stSubLabel1');
  const stSubVal1 = document.getElementById('stSubVal1');
  const stSubLabel2 = document.getElementById('stSubLabel2');
  const stSubVal2 = document.getElementById('stSubVal2');
  const stSubLabel3 = document.getElementById('stSubLabel3');
  const stSubVal3 = document.getElementById('stSubVal3');
  const stageTelemetryCard = document.getElementById('stageTelemetryCard');

  let activeTradeKey = 'default';

  function setSystemVisual(key) {
    activeTradeKey = key;

    // 1. Cross-fade image stage
    sysStageImgs.forEach(img => {
      const match = String(img.dataset.stage) === String(key);
      img.classList.toggle('active', match);
    });

    // 2. Update trade detail text
    const activeData = (key === 'default') ? defaultOverviewData : systems[key];
    if (key === 'default') {
      if (sysTag) sysTag.textContent = defaultOverviewData.tag;
      if (sysTitle) sysTitle.textContent = defaultOverviewData.title;
      if (sysDesc) sysDesc.textContent = defaultOverviewData.desc;
      if (sysMeta) sysMeta.textContent = defaultOverviewData.meta;
    } else {
      if (activeData) {
        if (sysTag) sysTag.textContent = activeData.id + ' • SCORE: ' + activeData.telemetry.score + '/100';
        if (sysTitle) sysTitle.textContent = activeData.title;
        if (sysDesc) sysDesc.textContent = activeData.desc;
        if (sysMeta) sysMeta.textContent = activeData.meta;
      }
    }

    // 3. Update right-side buttons state
    sysBtns.forEach(btn => {
      const isSelected = String(btn.dataset.index) === String(key);
      btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    });

    // 4. Update ON-IMAGE TELEMETRY CARD (Only one for the active image)
    if (activeData && activeData.telemetry) {
      const t = activeData.telemetry;
      if (stTradeTitle) stTradeTitle.textContent = t.trade;
      if (stBigNum) stBigNum.innerHTML = t.score + '<small>/100</small>';
      if (stStatusPill) {
        stStatusPill.textContent = t.status;
        stStatusPill.classList.toggle('alert', !!t.isAlert);
      }
      if (stRingFill) {
        stRingFill.setAttribute('stroke-dasharray', t.score + ', 100');
        stRingFill.classList.toggle('alert', !!t.isAlert);
      }
      if (stCenterDot) {
        stCenterDot.classList.toggle('alert', !!t.isAlert);
      }
      if (stSliderFill) {
        stSliderFill.style.width = t.score + '%';
        stSliderFill.classList.toggle('alert', !!t.isAlert);
      }
      if (stSubLabel1) stSubLabel1.textContent = t.sub1L;
      if (stSubVal1) stSubVal1.textContent = t.sub1V;
      if (stSubLabel2) stSubLabel2.textContent = t.sub2L;
      if (stSubVal2) stSubVal2.textContent = t.sub2V;
      if (stSubLabel3) stSubLabel3.textContent = t.sub3L;
      if (stSubVal3) stSubVal3.textContent = t.sub3V;
    }
  }

  // CLICK-ONLY BINDINGS (No hover triggers! Changes strictly on click)
  sysBtns.forEach(btn => {
    const key = btn.dataset.index;
    btn.addEventListener('click', () => {
      const alreadyActive = (activeTradeKey === key);
      setSystemVisual(key);
      if (alreadyActive) {
        const repModal = document.getElementById('sampleReportModal');
        if (repModal && typeof openModal === 'function') openModal(repModal);
      }
    });
  });

  // Clicking the on-image telemetry card launches the verified report modal
  if (stageTelemetryCard) {
    stageTelemetryCard.addEventListener('click', () => {
      const repModal = document.getElementById('sampleReportModal');
      if (repModal && typeof openModal === 'function') openModal(repModal);
    });
  }


  // 5. EARLY COST ESTIMATOR (MATCHING SCREENSHOT)
  let currentRate = 95;
  const estTabs = document.querySelectorAll('.estimator-tab-btn');
  const estAreaSlider = document.getElementById('estAreaSlider');
  const estAreaDisplay = document.getElementById('estAreaDisplay');
  const estRateNote = document.getElementById('estRateNote');
  const estRangeDisplay = document.getElementById('estRangeDisplay');
  const estTimelineDisplay = document.getElementById('estTimelineDisplay');

  function formatMoney(amount) {
    if (amount >= 1e7) {
      return '₹' + (amount / 1e7).toFixed(1) + ' Cr';
    } else {
      return '₹' + (amount / 1e5).toFixed(1) + ' L';
    }
  }

  function updateEstimator() {
    if (!estAreaSlider) return;
    const area = Number(estAreaSlider.value) || 20000;
    const base = area * currentRate;
    if (estAreaDisplay) estAreaDisplay.textContent = area.toLocaleString('en-IN');
    if (estRateNote) estRateNote.textContent = 'sq ft · ₹' + currentRate + ' per sq ft';
    
    const low = base * 0.85;
    const high = base * 1.15;
    if (estRangeDisplay) estRangeDisplay.textContent = formatMoney(low) + ' – ' + formatMoney(high);

    const weeks = Math.max(3, Math.min(16, Math.round(area / 6000) + 2));
    if (estTimelineDisplay) estTimelineDisplay.textContent = weeks + ' wk';
    updateSliderProgress();
  }

  estTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      estTabs.forEach(t => t.setAttribute('aria-selected', 'false'));
      tab.setAttribute('aria-selected', 'true');
      currentRate = Number(tab.dataset.rate) || 95;
      updateEstimator();
    });
  });

  if (estAreaSlider) {
    estAreaSlider.addEventListener('input', updateEstimator);
    updateEstimator();
  }

  // 6. POPUP MODAL HANDLERS
  const sampleReportModal = document.getElementById('sampleReportModal');
  const bookAuditModal = document.getElementById('bookAuditModal');
  const btnViewReport = document.getElementById('btnViewReport');
  const closeReportModal = document.getElementById('closeReportModal');
  const closeAuditModal = document.getElementById('closeAuditModal');
  const btnDownloadReportDoc = document.getElementById('btnDownloadReportDoc');
  const btnBookFromReport = document.getElementById('btnBookFromReport');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (btnViewReport && sampleReportModal) {
    btnViewReport.addEventListener('click', () => openModal(sampleReportModal));
  }
  if (closeReportModal && sampleReportModal) {
    closeReportModal.addEventListener('click', () => closeModal(sampleReportModal));
  }
  if (sampleReportModal) {
    sampleReportModal.addEventListener('click', (e) => {
      if (e.target === sampleReportModal) closeModal(sampleReportModal);
    });
  }

  // DOWNLOAD SAMPLE REPORT FILE
  if (btnDownloadReportDoc) {
    btnDownloadReportDoc.addEventListener('click', () => {
      const reportText = [
        '========================================================================',
        'BUILTSENSE — PREDICTIVE BUILDING INTELLIGENCE & CAPEX REPORT',
        '========================================================================',
        'SAMPLE FIELD INSPECTION REPORT: TOWER B / SUNRISE CHS, PUNE',
        'Audit Reference: BS-AUD-2026-004',
        'Date of Survey: 15 October 2026',
        'Building Specs: 180 Units | 14 Floors | 2 Basement Levels | Built 2018',
        'Structural Health Index: 84 / 100 [GRADE B+ / GOOD CONDITION]',
        '========================================================================',
        '',
        '1. EXECUTIVE DIAGNOSIS BY SYSTEM',
        '------------------------------------------------------------------------',
        'SYS-01: TERRACE WATERPROOFING & RAIN GUTTERS',
        '- Condition: Moderate ponding observed adjacent to rainwater outlet #2.',
        '- Moisture Meter Reading: 28% beneath screed layer.',
        '- Recommendation: Elastomeric polyurethane waterproofing membrane coat.',
        '- Planned Timeline: Year 1',
        '- Fixed Price Allocation: ₹ 3,60,000',
        '',
        'SYS-03: MAIN WATER SUPPLY RISERS & SHAFT',
        '- Condition: 1.4 Bar pressure loss detected during peak gravity drop test.',
        '- Acoustic Ultrasound: Joint 14B micro-cavitation internal rust.',
        '- Recommendation: Trenchless epoxy structural relining.',
        '- Planned Timeline: Year 2 (Priority Intervention)',
        '- Fixed Price Allocation: ₹ 8,40,000',
        '',
        'SYS-04: EXTERNAL FAÇADE & WEATHER COATING',
        '- Condition: Superficial hairline cracks along western elevation.',
        '- Recommendation: Elastic crack injection seal + 2 coats weather barrier.',
        '- Planned Timeline: Year 3',
        '- Fixed Price Allocation: ₹ 38,00,000',
        '',
        'SYS-05: COMMON-AREA ROOFTOP SOLAR',
        '- Condition: 14,000 sq ft unobstructed shadow-free area available.',
        '- Feasibility: 120 kW On-Grid Rooftop Plant (3.4 yr ROI).',
        '- Planned Timeline: Year 2 & 4',
        '- Investment Allocation: ₹ 45,00,000 (Subsidized net rate)',
        '',
        '========================================================================',
        '2. FIVE-YEAR SINKING FUND FORECAST (SUMMARY)',
        '------------------------------------------------------------------------',
        'Year 1: ₹ 24,00,000 (Waterproofing ₹18L + Plumbing Repairs ₹6L)',
        'Year 2: ₹ 56,00,000 (Riser Relining ₹22L + Solar Phase 1 ₹30L + Misc ₹4L)',
        'Year 3: ₹ 46,00,000 (Exterior Paint ₹38L + Plumbing ₹8L)',
        'Year 4: ₹ 57,00,000 (Solar Phase 2 ₹45L + Terrace Waterproofing ₹12L)',
        'Year 5: ₹ 20,00,000 (Common Lines ₹14L + Waterproofing Touchups ₹6L)',
        '------------------------------------------------------------------------',
        'TOTAL PROJECTED 5-YEAR CAPEX: ₹ 2,03,00,000 (₹ 2.03 Cr)',
        'Current Society Sinking Fund:  ₹ 1,40,00,000 (₹ 1.40 Cr)',
        'Reserve Gap to Provision:     ₹   63,00,000 (₹ 63 L)',
        'Per Flat Monthly Sinking Contribution: ~ ₹ 1,880 / month',
        '========================================================================',
        '3. EXECUTION PROTOCOL & WARRANTIES',
        '- All contractors vetted under BUILTSENSE verified vendor registry.',
        '- 100% Escrow-held milestone release upon third-party drone audit.',
        '- 5-Year Comprehensive Written Society Warranty.',
        '========================================================================',
        'To book an audit for your society, visit: https://obvious-goblin-344822.framer.app',
        '© 2026 BUILTSENSE. All rights reserved.'
      ].join(String.fromCharCode(10));

      const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'BUILTSENSE_Tower_B_Sample_Audit_Report.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  if (btnBookFromReport) {
    btnBookFromReport.addEventListener('click', () => {
      closeModal(sampleReportModal);
      setTimeout(() => openAuditModal(), 200);
    });
  }

  // 7. TWO-STEP BOOK AUDIT MODAL LOGIC
  const stepPage1 = document.getElementById('stepPage1');
  const stepPage2 = document.getElementById('stepPage2');
  const stepPageSuccess = document.getElementById('stepPageSuccess');
  const stepPill1 = document.getElementById('stepPill1');
  const stepPill2 = document.getElementById('stepPill2');
  const btnStepNext = document.getElementById('btnStepNext');
  const btnStepBack = document.getElementById('btnStepBack');
  const btnStepSubmit = document.getElementById('btnStepSubmit');
  const btnStepDone = document.getElementById('btnStepDone');
  const stepNavBar = document.getElementById('stepNavBar');
  const scopeCheckboxesGrid = document.getElementById('scopeCheckboxesGrid');

  // Building Type Configuration Schema (Apartments, School, Commercial Spaces, Hospital, Others)
  const BUILDING_CONFIGS = {
    apartments: {
      typeTitle: 'Apartments & Housing Society',
      buildingLabel: 'SOCIETY / BUILDING NAME *',
      buildingPlaceholder: 'e.g. Sunrise Greens CHS',
      attr1Label: 'TOTAL UNITS / FLATS *',
      attr1Placeholder: 'e.g. 180',
      attr2Label: 'NUMBER OF TOWERS / WINGS',
      attr2Placeholder: 'e.g. 4 Towers',
      roleLabel: 'COMMITTEE ROLE',
      roles: ['Secretary', 'Chairman', 'Treasurer', 'Committee Member', 'Flat Owner / Resident'],
      badge: 'Apartments & Society',
      scopes: [
        { value: 'Waterproofing', label: 'Waterproofing (Terrace & Basement)', checked: true },
        { value: 'Plumbing & Risers', label: 'Plumbing Lines & Main Risers', checked: true },
        { value: 'Exterior Paint', label: 'Exterior Paint & Façade Cracks', checked: true },
        { value: 'Solar Rooftop', label: 'Solar Rooftop & Energy Audit', checked: false },
        { value: '5-Year CapEx', label: '5-Year Sinking Fund Budgeting', checked: true },
        { value: 'Clubhouse', label: 'Clubhouse & Amenities Redesign', checked: false }
      ]
    },
    school: {
      typeTitle: 'School / Educational Campus',
      buildingLabel: 'SCHOOL / CAMPUS NAME *',
      buildingPlaceholder: 'e.g. St. Xavier\'s International School',
      attr1Label: 'TOTAL CLASSROOMS *',
      attr1Placeholder: 'e.g. 45 classrooms',
      attr2Label: 'CAMPUS BLOCKS / ACRES',
      attr2Placeholder: 'e.g. 3 blocks / 5 acres',
      roleLabel: 'ADMINISTRATION ROLE',
      roles: ['Principal / Director', 'Estate & Facilities Manager', 'Administrative Officer', 'Trustee / Management Board', 'Parent / PTA Member'],
      badge: 'School & Campus',
      scopes: [
        { value: 'Classrooms Seepage', label: 'Classrooms & Lab Roof Waterproofing', checked: true },
        { value: 'Campus Plumbing', label: 'Drinking Water & Restroom Risers', checked: true },
        { value: 'Playground Drainage', label: 'Sports Turf & Campus Storm Drainage', checked: true },
        { value: 'Fire Safety', label: 'Campus Fire Safety & Evacuation Audit', checked: false },
        { value: 'School CapEx', label: '5-Year Institutional CapEx Budgeting', checked: true },
        { value: 'Solar Campus', label: 'Rooftop Solar & Energy Resilience', checked: false }
      ]
    },
    commercial: {
      typeTitle: 'Commercial Space / Tech Park',
      buildingLabel: 'COMMERCIAL PROPERTY / TECH PARK NAME *',
      buildingPlaceholder: 'e.g. Cyber City Tower A',
      attr1Label: 'TOTAL OFFICES / WORKSPACES *',
      attr1Placeholder: 'e.g. 60 office suites',
      attr2Label: 'TOTAL FLOORS / GLA (SQ FT)',
      attr2Placeholder: 'e.g. 14 floors / 120,000 sq ft',
      roleLabel: 'FACILITY DESIGNATION',
      roles: ['Facility Director', 'Operations / Maintenance Head', 'Asset Owner / Landlord', 'Property Manager', 'Corporate Tenant Representative'],
      badge: 'Commercial Space',
      scopes: [
        { value: 'Façade Glazing', label: 'Façade & Curtain Glazing Integrity', checked: true },
        { value: 'HVAC & Plumbing', label: 'HVAC Chiller & Drainage Risers', checked: true },
        { value: 'Basement Sump', label: 'Multi-Level Basement Waterproofing', checked: true },
        { value: 'Power Substation', label: 'High-Tension Power & Solar Audit', checked: false },
        { value: 'Commercial CapEx', label: '5-Year Commercial Asset CapEx Plan', checked: true },
        { value: 'Elevator Shafts', label: 'Elevator Shaft & Mechanical Diagnostics', checked: false }
      ]
    },
    hospital: {
      typeTitle: 'Hospital / Healthcare Complex',
      buildingLabel: 'HOSPITAL / HEALTHCARE FACILITY NAME *',
      buildingPlaceholder: 'e.g. Apollo Super Specialty Hospital',
      attr1Label: 'BED CAPACITY / WARDS *',
      attr1Placeholder: 'e.g. 250 beds / 12 wards',
      attr2Label: 'ICU / SURGICAL WINGS',
      attr2Placeholder: 'e.g. 2 wings / 30 ICUs',
      roleLabel: 'HEALTHCARE DESIGNATION',
      roles: ['Medical Superintendent / Director', 'Hospital Administrator', 'Facility & Bio-Safety Engineer', 'Trustee / Executive Board', 'Operations Coordinator'],
      badge: 'Hospital & Healthcare',
      scopes: [
        { value: 'OT Seepage', label: 'OT & ICU Critical Seepage Shielding', checked: true },
        { value: 'Medical Effluent', label: 'Medical Effluent & Water Supply Risers', checked: true },
        { value: 'Cleanroom Seals', label: 'Cleanroom & Negative Pressure Air Seals', checked: true },
        { value: 'Emergency Power', label: 'Emergency Power & Generator Isolation', checked: false },
        { value: 'Hospital CapEx', label: '5-Year Healthcare Infrastructure CapEx', checked: true },
        { value: 'Sterile Drainage', label: 'Sterilization & Bio-Drainage Inspection', checked: false }
      ]
    },
    others: {
      typeTitle: 'Other Institutional / Complex',
      buildingLabel: 'FACILITY / COMPLEX NAME *',
      buildingPlaceholder: 'e.g. Apex Industrial & Logistics Hub',
      attr1Label: 'TOTAL UNITS / BAYS *',
      attr1Placeholder: 'e.g. 24 industrial bays',
      attr2Label: 'ESTIMATED BUILT-UP AREA',
      attr2Placeholder: 'e.g. 45,000 sq ft',
      roleLabel: 'REPRESENTATIVE ROLE',
      roles: ['Facility / Complex Manager', 'Maintenance & Civil In-charge', 'Managing Director / Owner', 'General Contractor / Architect', 'Authorized Representative'],
      badge: 'Other Facility',
      scopes: [
        { value: 'Truss Inspection', label: 'Roofing & Structural Truss Inspection', checked: true },
        { value: 'Industrial Drainage', label: 'Heavy Industrial Drainage & Sumps', checked: true },
        { value: 'Load Floor Cracks', label: 'Foundation & Heavy Load Floor Cracks', checked: true },
        { value: 'Power Substation', label: 'Substation & Solar Feasibility', checked: false },
        { value: 'Facility CapEx', label: '5-Year Facility Maintenance CapEx', checked: true },
        { value: 'Perimeter Civil', label: 'Perimeter & Boundary Civil Integrity', checked: false }
      ]
    }
  };

  // Function to switch building type dynamically
  function setBuildingType(typeKey) {
    const config = BUILDING_CONFIGS[typeKey] || BUILDING_CONFIGS.apartments;

    // 1. Update button states
    const bldgBtns = document.querySelectorAll('.bldg-type-btn');
    bldgBtns.forEach(btn => {
      const isSelected = btn.dataset.bldg === typeKey;
      btn.classList.toggle('active', isSelected);
      btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');
    });

    const hiddenType = document.getElementById('step1BuildingType');
    if (hiddenType) hiddenType.value = typeKey;

    // 2. Update Building / Property Name
    const bLabel = document.getElementById('step1BuildingLabel');
    const bInput = document.getElementById('step1Building');
    if (bLabel) bLabel.textContent = config.buildingLabel;
    if (bInput) bInput.placeholder = config.buildingPlaceholder;

    // 3. Update Attribute 1 (Units/Classrooms/Offices/Beds)
    const a1Label = document.getElementById('step1Attr1Label');
    const a1Input = document.getElementById('step1Attr1');
    if (a1Label) a1Label.textContent = config.attr1Label;
    if (a1Input) {
      a1Input.placeholder = config.attr1Placeholder;
    }

    // 4. Update Attribute 2 (Towers/Blocks/Floors/Wings)
    const a2Label = document.getElementById('step1Attr2Label');
    const a2Input = document.getElementById('step1Attr2');
    if (a2Label) a2Label.textContent = config.attr2Label;
    if (a2Input) a2Input.placeholder = config.attr2Placeholder;

    // 5. Update Roles dropdown
    const rLabel = document.getElementById('step1RoleLabel');
    const rSelect = document.getElementById('step1Role');
    if (rLabel) rLabel.textContent = config.roleLabel;
    if (rSelect) {
      rSelect.innerHTML = config.roles
        .map(role => `<option value="${role}">${role}</option>`)
        .join('');
    }

    // 6. Update Step 2 Scope Checkboxes
    if (scopeCheckboxesGrid && config.scopes) {
      scopeCheckboxesGrid.innerHTML = config.scopes
        .map(item => `
          <label class="scope-label">
            <input type="checkbox" ${item.checked ? 'checked' : ''} value="${item.value}">
            <span>${item.label}</span>
          </label>
        `).join('');
    }
  }

  // Bind click handlers to building type buttons
  const bldgTypeButtons = document.querySelectorAll('.bldg-type-btn');
  bldgTypeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const bldgType = btn.dataset.bldg;
      setBuildingType(bldgType);
    });
  });

  // Triggers across the page
  const auditTriggers = [
    document.getElementById('btnNavBookAudit'),
    document.getElementById('btnEstBookAudit'),
    document.getElementById('btnAboutBookAudit')
  ];

  function openAuditModal(preferredType) {
    const currentType = preferredType || (document.getElementById('step1BuildingType') ? document.getElementById('step1BuildingType').value : 'apartments');
    setBuildingType(currentType);
    goToStep(1);
    openModal(bookAuditModal);
  }

  auditTriggers.forEach(btn => {
    if (btn) btn.addEventListener('click', () => openAuditModal());
  });

  if (closeAuditModal) {
    closeAuditModal.addEventListener('click', () => closeModal(bookAuditModal));
  }
  if (bookAuditModal) {
    bookAuditModal.addEventListener('click', (e) => {
      if (e.target === bookAuditModal) closeModal(bookAuditModal);
    });
  }

  // 8. ABOUT US & CAREERS MODALS LOGIC
  const aboutUsModal = document.getElementById('aboutUsModal');
  const careersModal = document.getElementById('careersModal');
  const btnFooterAboutModal = document.getElementById('btnFooterAboutModal');
  const btnFooterCareersModal = document.getElementById('btnFooterCareersModal');
  const closeAboutModal = document.getElementById('closeAboutModal');
  const closeCareersModal = document.getElementById('closeCareersModal');
  const btnAboutBookAudit = document.getElementById('btnAboutBookAudit');
  const btnFooterPrivacy = document.getElementById('btnFooterPrivacy');
  const btnFooterTerms = document.getElementById('btnFooterTerms');

  if (btnFooterAboutModal) {
    btnFooterAboutModal.addEventListener('click', () => openModal(aboutUsModal));
  }
  if (btnFooterCareersModal) {
    btnFooterCareersModal.addEventListener('click', () => openModal(careersModal));
  }
  if (closeAboutModal) {
    closeAboutModal.addEventListener('click', () => closeModal(aboutUsModal));
  }
  if (closeCareersModal) {
    closeCareersModal.addEventListener('click', () => closeModal(careersModal));
  }
  if (aboutUsModal) {
    aboutUsModal.addEventListener('click', (e) => {
      if (e.target === aboutUsModal) closeModal(aboutUsModal);
    });
  }
  if (careersModal) {
    careersModal.addEventListener('click', (e) => {
      if (e.target === careersModal) closeModal(careersModal);
    });
  }
  if (btnAboutBookAudit) {
    btnAboutBookAudit.addEventListener('click', () => {
      closeModal(aboutUsModal);
      setTimeout(() => openAuditModal(), 200);
    });
  }
  if (btnFooterPrivacy) {
    btnFooterPrivacy.addEventListener('click', () => {
      alert('BUILTSENSE Privacy Policy: We uphold strict non-disclosure for building structural data and society financial records.');
    });
  }
  if (btnFooterTerms) {
    btnFooterTerms.addEventListener('click', () => {
      alert('BUILTSENSE Terms of Service: All diagnostic assessments adhere to ASTM & IS standard civil diagnostic engineering frameworks.');
    });
  }

  function goToStep(step) {
    if (!stepNavBar || !stepPage1 || !stepPage2 || !stepPageSuccess) return;
    if (step === 1) {
      stepNavBar.style.display = 'flex';
      stepPage1.classList.add('active');
      stepPage2.classList.remove('active');
      stepPageSuccess.classList.remove('active');
      if (stepPill1) stepPill1.classList.add('active');
      if (stepPill2) stepPill2.classList.remove('active');
      if (btnStepBack) btnStepBack.style.display = 'none';
      if (btnStepNext) btnStepNext.style.display = 'inline-flex';
      if (btnStepSubmit) btnStepSubmit.style.display = 'none';
      if (btnStepDone) btnStepDone.style.display = 'none';
    } else if (step === 2) {
      stepNavBar.style.display = 'flex';
      stepPage1.classList.remove('active');
      stepPage2.classList.add('active');
      stepPageSuccess.classList.remove('active');
      if (stepPill1) stepPill1.classList.remove('active');
      if (stepPill2) stepPill2.classList.add('active');
      if (btnStepBack) btnStepBack.style.display = 'inline-flex';
      if (btnStepNext) btnStepNext.style.display = 'none';
      if (btnStepSubmit) btnStepSubmit.style.display = 'inline-flex';
      if (btnStepDone) btnStepDone.style.display = 'none';
    } else if (step === 3) {
      stepNavBar.style.display = 'none';
      stepPage1.classList.remove('active');
      stepPage2.classList.remove('active');
      stepPageSuccess.classList.add('active');
      if (btnStepBack) btnStepBack.style.display = 'none';
      if (btnStepNext) btnStepNext.style.display = 'none';
      if (btnStepSubmit) btnStepSubmit.style.display = 'none';
      if (btnStepDone) btnStepDone.style.display = 'inline-flex';
    }
  }

  if (btnStepNext) {
    btnStepNext.addEventListener('click', () => {
      const bField = document.getElementById('step1Building');
      const cField = document.getElementById('step1City');
      const aField = document.getElementById('step1Attr1');
      const nField = document.getElementById('step1Name');
      const pField = document.getElementById('step1Phone');

      const building = bField ? bField.value.trim() : '';
      const city = cField ? cField.value.trim() : '';
      const attr1 = aField ? aField.value.trim() : '';
      const name = nField ? nField.value.trim() : '';
      const phone = pField ? pField.value.trim() : '';

      if (!building || !city || !attr1 || !name || !phone) {
        alert('Please fill in all required fields (Building Name, City, Units/Classrooms, Name, and Phone) to proceed.');
        return;
      }
      goToStep(2);
    });
  }

  if (btnStepBack) {
    btnStepBack.addEventListener('click', () => goToStep(1));
  }

    // Send Audit Request Helper (Render backend + fallback proxy)
  const BACKEND_API_URL = 'https://builtsense-backend-vg0b.onrender.com/api/audit-requests';
  const LOCAL_API_URL = '/api/audit-requests';

  // Dedicated submission lock to prevent concurrent/duplicate requests
  let isSubmittingAudit = false;

  async function postAuditRequest(payload) {
    if (isSubmittingAudit) {
      console.warn('[BUILTSENSE API] Submission already in progress, ignoring duplicate call.');
      throw new Error('A submission is already in progress. Please wait.');
    }
    isSubmittingAudit = true;
    payload.consent = true;
    console.log('[BUILTSENSE API] Submitting audit request:', payload);

    try {
      // In Next.js, always use the Next.js API route proxy (/api/audit-requests)
      // which safely forwards to Render server-to-server without browser CORS issues
      // or double-insertion risks.
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 60000);
      let res;
      try {
        res = await fetch(LOCAL_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: controller.signal
        });
      } catch (localErr) {
        // Fallback to direct Render only if local route is unavailable (e.g. standalone file://)
        console.warn('[BUILTSENSE API] Local route unavailable, trying direct Render call...', localErr);
        res = await fetch(BACKEND_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: controller.signal
        });
      }
      clearTimeout(timeout);

      const data = await res.json().catch(() => ({}));
      if (res.ok && data && data.ref_code) {
        return data;
      } else {
        const errMsg = (data && data.error) ? data.error : 'Could not save audit request. Please verify fields.';
        throw new Error(errMsg);
      }
    } finally {
      isSubmittingAudit = false;
    }
  }

  window.postAuditRequest = postAuditRequest;

  if (btnStepSubmit && !btnStepSubmit.__isBound) {
    btnStepSubmit.__isBound = true;
    btnStepSubmit.addEventListener('click', async (e) => {
      e.preventDefault();
      if (btnStepSubmit.disabled || isSubmittingAudit) return;
      const bField = document.getElementById('step1Building');
      const nField = document.getElementById('step1Name');
      const cField = document.getElementById('step1City');
      const a1Field = document.getElementById('step1Attr1');
      const a2Field = document.getElementById('step1Attr2');
      const pField = document.getElementById('step1Phone');
      const rSelect = document.getElementById('step1Role');
      const urgencySelect = document.getElementById('step2Urgency');
      const notesField = document.getElementById('step2Notes');

      const typeKey = document.getElementById('step1BuildingType') ? document.getElementById('step1BuildingType').value : 'apartments';
      const config = BUILDING_CONFIGS[typeKey] || BUILDING_CONFIGS.apartments;

      const building = bField && bField.value.trim() ? bField.value.trim() : '';
      const name = nField && nField.value.trim() ? nField.value.trim() : '';
      const phone = pField && pField.value.trim() ? pField.value.trim() : '';
      const city = cField && cField.value.trim() ? cField.value.trim() : '';
      const attr1 = a1Field && a1Field.value.trim() ? a1Field.value.trim() : '';
      const attr2 = a2Field && a2Field.value.trim() ? a2Field.value.trim() : '';
      const repRole = rSelect && rSelect.value ? rSelect.value : '';
      const timeframe = urgencySelect && urgencySelect.value ? urgencySelect.value : '';
      const notes = notesField && notesField.value.trim() ? notesField.value.trim() : '';

      const checkedTrades = Array.from(document.querySelectorAll('#scopeCheckboxesGrid input[type="checkbox"]:checked'))
        .map(cb => cb.value);

      if (!building || !name || !phone) {
        alert('Please provide building name, contact name, and phone number.');
        goToStep(1);
        return;
      }

      const origBtnText = btnStepSubmit.textContent;
      btnStepSubmit.disabled = true;
      btnStepSubmit.textContent = 'Submitting...';

      const payload = {
        building_name: building,
        rep_name: name,
        phone: phone,
        consent: true,
        building_type: typeKey,
        city: city || undefined,
        attr1: attr1 || undefined,
        attr2: attr2 || undefined,
        rep_role: repRole || undefined,
        scopes: checkedTrades.length > 0 ? checkedTrades : undefined,
        timeframe: timeframe || undefined,
        notes: notes || undefined
      };

      try {
        const responseData = await postAuditRequest(payload);
        const refCode = responseData.ref_code;
        console.log('[BUILTSENSE] Successfully booked audit! Ref code:', refCode);

        const succB = document.getElementById('successBuildingName');
        const succN = document.getElementById('successRepName');
        const succR = document.getElementById('successRefCode');
        const succDetails = document.getElementById('successDetailsBadge');

        if (succB) succB.textContent = building + ' (' + config.badge + ')';
        if (succN) succN.textContent = name;
        if (succR) succR.textContent = 'REF: ' + refCode;
        if (succDetails) {
          const detailsParts = [];
          if (attr1) detailsParts.push(attr1);
          if (attr2) detailsParts.push(attr2);
          if (city) detailsParts.push(city);
          succDetails.textContent = detailsParts.join(' · ') || config.typeTitle;
        }

        goToStep(3);
      } catch (err) {
        console.error('[BUILTSENSE] Booking error:', err);
        alert(err.message || 'Failed to submit audit request. Please try again.');
      } finally {
        btnStepSubmit.disabled = false;
        btnStepSubmit.textContent = origBtnText;
      }
    });
  }

  if (btnStepDone) {
    btnStepDone.addEventListener('click', () => closeModal(bookAuditModal));
  }

  // 9. PROJECT RECORD FILTERING (APARTMENTS & SCHOOLS ONLY)
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
  const projectRows = document.querySelectorAll('.project-row:not(.header-row)');

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isAlreadyActive = btn.classList.contains('active');

      if (isAlreadyActive) {
        // If clicked again, toggle to show both projects
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
        projectRows.forEach(row => row.removeAttribute('data-hidden'));
        return;
      }

      projectFilterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const filter = btn.dataset.filter;

      projectRows.forEach(row => {
        if (row.dataset.type === filter) {
          row.removeAttribute('data-hidden');
        } else {
          row.setAttribute('data-hidden', 'true');
        }
      });
    });
  });


  // Escape key to close modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(sampleReportModal);
      closeModal(bookAuditModal);
      closeModal(aboutUsModal);
      closeModal(careersModal);
    }
  });



  // Expose key modal functions to window for global access
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.openAuditModal = openAuditModal;
  window.setBuildingType = setBuildingType;
  window.goToStep = goToStep;

  // Also hook direct CTA submit from Book Section
  const directBtn = document.getElementById('btnDirectSubmit');
  if (directBtn && !directBtn.__apiDirectBound) {
    directBtn.__apiDirectBound = true;
    directBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      if (directBtn.disabled || isSubmittingAudit) return;
      const dName = document.getElementById('directName')?.value?.trim() || '';
      const dPhone = document.getElementById('directPhone')?.value?.trim() || '';
      const dBuilding = document.getElementById('directBuilding')?.value?.trim() || '';

      // If user clicks without filling or partial, open modal with fields prefilled
      if (!dName || !dPhone || !dBuilding) {
        if (dName && document.getElementById('step1Name')) document.getElementById('step1Name').value = dName;
        if (dPhone && document.getElementById('step1Phone')) document.getElementById('step1Phone').value = dPhone;
        if (dBuilding && document.getElementById('step1Building')) document.getElementById('step1Building').value = dBuilding;
        openAuditModal('apartments');
        return;
      }

      // Mandatory fields are all filled! Submit directly as per Test 2 in Guide
      const origText = directBtn.textContent;
      directBtn.disabled = true;
      directBtn.textContent = 'Booking...';

      const payload = {
        building_name: dBuilding,
        rep_name: dName,
        phone: dPhone,
        consent: true
      };

      try {
        const responseData = await postAuditRequest(payload);
        const refCode = responseData.ref_code;
        console.log('[BUILTSENSE] Direct booking created! Ref code:', refCode);

        // Reset inputs
        const directNameInput = document.getElementById('directName');
        const directPhoneInput = document.getElementById('directPhone');
        const directBuildingInput = document.getElementById('directBuilding');
        if (directNameInput) directNameInput.value = '';
        if (directPhoneInput) directPhoneInput.value = '';
        if (directBuildingInput) directBuildingInput.value = '';

        // Open modal directly on success screen with reference code
        const succB = document.getElementById('successBuildingName');
        const succN = document.getElementById('successRepName');
        const succR = document.getElementById('successRefCode');
        const succDetails = document.getElementById('successDetailsBadge');

        if (succB) succB.textContent = dBuilding;
        if (succN) succN.textContent = dName;
        if (succR) succR.textContent = 'REF: ' + refCode;
        if (succDetails) succDetails.textContent = 'Direct Site Audit Booking';

        openModal(bookAuditModal);
        goToStep(3);
      } catch (err) {
        console.error('[BUILTSENSE] Direct booking error:', err);
        alert(err.message || 'Could not save audit request. Please try again.');
      } finally {
        directBtn.disabled = false;
        directBtn.textContent = origText;
      }
    });
  }

  console.log('[BUILTSENSE] Interactive features loaded & initialized successfully.');
}

// Auto-run on DOM ready or immediate if already loaded
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBuiltsense);
  } else {
    initBuiltsense();
  }
}

// Also export for window
if (typeof window !== 'undefined') {
  window.initBuiltsense = initBuiltsense;
}

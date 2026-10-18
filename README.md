# BUILTSENSE Frontend

> **Predictive capex for housing societies and commercial premises**  
> *Your building's next 5 years, priced today.*

BUILTSENSE is an engineering-first property intelligence platform that helps housing societies, facility managers, and commercial real estate owners forecast maintenance capital expenditures, assess structural health, and prevent emergency infrastructure failures.

---

## 🌟 Key Features

- **📊 5-Year Predictive Capex Forecasting**: Dynamic multi-year expenditure forecasting based on building age, elevation, and system lifecycle analysis.
- **🏢 Interactive Building Systems Explorer**: 3D interactive cutaway visualizations covering Structural, MEP (Mechanical, Electrical, Plumbing), Waterproofing, Elevators, and Fire Safety systems.
- **🧮 Dynamic Capex Estimator**: Interactive calculator that models maintenance budget allocations per flat and overall society reserve requirements.
- **📑 Case Studies & Portfolio Filter**: Real-world society audits showing concrete ROI, cost mitigation, and preventive engineering recommendations.
- **⚡ Seamless Audit Booking**: Streamlined audit booking flow (both modal and inline) connected to the backend API with instant confirmation codes and zero double-submits.
- **🌓 Dark & Light Modes**: Engineered high-contrast dark industrial mode and clean architectural light mode.
- **📱 Fully Responsive**: Fluid, overflow-free layouts tested across mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Custom CSS Variables
- **API Proxy**: Next.js Serverless Route (`/api/audit-requests`) connecting server-to-server with backend on Render & Supabase
- **Icons & Typography**: Barlow font, Lucide/SVG engineering iconography

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.17.0 or higher recommended)
- `npm` or `yarn` or `pnpm`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tejaraju357/Bulit-sense.git
   cd Bulit-sense
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Project Structure

```text
├── app/
│   ├── api/
│   │   └── audit-requests/   # Next.js API proxy to Render/Supabase
│   ├── globals.css           # Global typography, color tokens, and styling
│   ├── layout.tsx            # Root layout with metadata and fonts
│   └── page.tsx              # Clean modular home page composition
├── components/
│   ├── home/                 # Feature-specific home page sections
│   │   ├── HeroSection.tsx
│   │   ├── ForecastSection.tsx
│   │   ├── BuildingSystemsSection.tsx
│   │   ├── ProcessSequenceSection.tsx
│   │   ├── EstimatorSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── BookCtaSection.tsx
│   ├── layout/               # Global navigation and footer
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── modals/               # Interactive modals
│       ├── BookAuditModal.tsx
│       ├── SampleReportModal.tsx
│       ├── AboutUsModal.tsx
│       └── CareersModal.tsx
├── lib/
│   ├── api.ts                # Audit submission client helper
│   └── utils.ts              # Utility functions
├── public/
│   └── bulitsense.js         # Interactive runtime handlers
├── types/
│   └── index.ts              # Strongly-typed TypeScript interfaces
├── next.config.js            # Image domains and build configuration
└── tailwind.config.js        # Tailwind CSS config
```

---

## 🚢 Production Build & Deployment

### Build Locally

```bash
npm run build
npm run start
```

### Deploy to Vercel

This repository is optimized for zero-configuration deployment on **Vercel**:

1. Import the repository `Bulit-sense` into Vercel.
2. Vercel automatically detects Next.js.
3. Click **Deploy**.

---

## 📄 License

Private & Proprietary — BUILTSENSE. All rights reserved.

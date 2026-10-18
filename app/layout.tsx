import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BUILTSENSE [TITANIUM] — Predictive Building Intelligence',
  description: 'Your building’s next 5 years of repairs, predicted today. Multi-disciplinary engineering audits and predictive capital expenditure planning for housing societies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        />
      </head>
      <body className="bg-[var(--bg)] text-[var(--ink)] antialiased transition-colors duration-200">
        {children}
        <script src="/bulitsense.js" defer></script>
      </body>
    </html>
  );
}

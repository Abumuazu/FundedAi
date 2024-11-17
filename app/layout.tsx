import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'FundedAi',
  description: 'Unlock Global Opportunities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}

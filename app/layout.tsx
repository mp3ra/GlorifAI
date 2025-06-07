import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head';
import Image from "next/image"


export const metadata: Metadata = {
  title: 'GlorifAI',
  description: 'Christian app that creates personalized audio prayers and Bible meditations using AI.',
  generator: 'none',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
        {/* You can add more favicon sizes/types if needed */}
      </head>
      <body>{children}</body>
    </html>
  );
}

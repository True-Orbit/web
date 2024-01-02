import React from 'react';
// import type { Metadata } from 'next'
import './styles/reset.css'
import './styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    React.createElement("html", { lang: "en" },
      <body>{children}</body>
    )
  )
}

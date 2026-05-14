import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Loratek — Powering Africa's Digital Future",
  description: 'Enterprise IT and Cybersecurity solutions delivering consulting, integration, and digital transformation across Africa.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

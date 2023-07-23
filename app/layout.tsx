import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ardor Blog',
  description: 'Blog Template Power by Ardor Team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

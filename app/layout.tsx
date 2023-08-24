import type { Metadata } from 'next'
import './styles/globals.scss'


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

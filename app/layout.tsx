import type { Metadata } from 'next'
import Header from './components/header'
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
    <>
      <Header />
      <div>{children}</div>
    </>
  )
}

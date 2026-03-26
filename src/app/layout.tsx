import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '🚚 YYC Food Truck Tracker - Find Calgary\'s Best Street Food!',
  description: 'Discover delicious food trucks across Calgary! Track your favorite vendors, find trucks near you, and explore the vibrant YYC street food scene.',
  keywords: 'Calgary, food truck, YYC, street food, tacos, burgers, food finder',
  openGraph: {
    title: '🚚 YYC Food Truck Tracker',
    description: 'Find Calgary\'s best food trucks near you!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
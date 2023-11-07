import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/base/reset.scss'
import '../styles/base/base.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio DavidAlbort',
  description: 'Portfolio of presentation of the Roger David Alba Ortega',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

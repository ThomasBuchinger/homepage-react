import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TitleBar from '../../components/layoutComponets'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BUC LAB homepage',
  description: 'A Homepage that show exactly what I want to see',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <TitleBar />

      <main style={{ margin: "50px" }}>{children}</main>
    </body>
    </html>
  )
}

import { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: 'External BUC LAB homepage',
  description: 'External View',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body >
      <main style={{ margin: "50px" }}>{children}</main>
    </body>
    </html>
  )
}

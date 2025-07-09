import type React from "react"
import { Lora } from "next/font/google"
import "./globals.css"

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={lora.variable}>
      <body className={lora.className}>{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };

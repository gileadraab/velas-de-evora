import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { playfair, inter, whisper } from "./fonts"

export const metadata: Metadata = {
  title: "Velas de Evora - Artesanais, Naturais, Elegantes",
  description:
    "Velas artesanais com ervas naturais e cromoterapia. Cada vela criada com propósito e energia específica.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable} ${whisper.variable}`}>
      <body>{children}</body>
    </html>
  )
}

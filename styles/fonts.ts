import { Playfair_Display, Inter, Whisper } from "next/font/google"

// Main serif font for headings and elegant text
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
})

// Sans-serif font for body text and UI elements
export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

// Script font for decorative brand elements
export const whisper = Whisper({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-whisper",
})

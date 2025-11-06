import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

import { Footer } from "./_components/Footer"
import { Header } from "./_components/Header"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Aesthetic Tile",
  description: "High-end tile & stone installations",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/img/favicon-180x180.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  other: {
    "google-site-verification": "vOLr6fqjEKzuwF9ohWxZlFV9UHPyAP5rTEi-a9Wq-fM",
  },
}

export const viewport: Viewport = {
  themeColor: "#0A4E2C",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col bg-white text-slate-800 antialiased`}>
        <Script id="trusted-types-policy" strategy="beforeInteractive">
          {`
            if (typeof window !== 'undefined' && window.trustedTypes && !window.trustedTypes.defaultPolicy) {
              window.trustedTypes.createPolicy('default', {
                createHTML: (input) => input,
                createScript: (input) => input,
                createScriptURL: (input) => input,
              });
            }
          `}
        </Script>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

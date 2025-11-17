import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ThemeProvider from '@/components/theme-provider'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: 'Sneha Kesharwani - Professional Makeup Artist & Cosmetologist',
  description: 'Professional makeup artist, hair stylist, and cosmetology expert. Offering bridal makeup, hair services, nail art, and skin treatments.',
  keywords: 'makeup artist, cosmetologist, bridal makeup, hair styling, nail art, skin treatments',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

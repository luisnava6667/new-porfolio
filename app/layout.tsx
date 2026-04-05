import { Onest } from 'next/font/google'
import { ProviderTheme, ToastProvider } from '@/provider'
import { Metadata } from 'next'
import { Footer } from '@/components'
import './globals.css'
import { GoogleAnalytics } from 'nextjs-google-analytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://luisnavarro.vercel.app'),
  title: 'Frontend Developer React & Next.js en Argentina | Luis Navarro',
  description:
    'Frontend Developer en Argentina especializado en React, Next.js y aplicaciones SaaS. Desarrollo interfaces rápidas, escalables y optimizadas para negocio.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Desarrollador Web Argentina',
    'Desarrollador Web Buenos Aires',
    'SaaS Developer',
    'Fullstack Developer React Node',
    'TypeScript Developer'
  ],
  alternates: {
    canonical: 'https://luisnavarro.vercel.app/'
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    url: 'https://luisnavarro.vercel.app/',
    siteName: 'Luis Navarro Portfolio',
    title: 'React & Next.js Developer | Luis Navarro',
    description:
      'Desarrollador Frontend en Buenos Aires especializado en React, Next.js y TypeScript. Construyo aplicaciones SaaS rápidas y escalables.',
    locale: 'es_AR',
    images: [
      {
        url: '/me.png',
        width: 1200,
        height: 630,
        alt: 'Luis Navarro Frontend Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React & Next.js Developer | Luis Navarro',
    description: 'Frontend Developer · React · Next.js · TypeScript · Buenos Aires',
    images: ['/me.png']
  }
}

const onest = Onest({ subsets: ['latin'] })
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body
        className={`bg-gradient-to-br from-[#f8fafc] via-[#eef2f7] to-[#e2e8f0] dark:bg-gradient-to-br dark:from-[#0f172a] dark:via-[#0b1f1a] dark:to-[#020617] text-black dark:text-white ${onest.className}`}>
        <ProviderTheme>
          <ToastProvider>{children}</ToastProvider>
        </ProviderTheme>
        <Footer />
      </body>
    </html>
  )
}

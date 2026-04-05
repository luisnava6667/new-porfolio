import { Onest } from 'next/font/google'
import { ProviderTheme, ToastProvider } from '@/provider'
import { Metadata } from 'next'
import { Footer } from '@/components'
import './globals.css'
import { GoogleAnalytics } from 'nextjs-google-analytics'

export const metadata: Metadata = {
  title: 'Porfolio - Luis Rodolfo Navarro',
  description:
    'Descubre el trabajo y los proyectos de Luis Rodolfo Navarro, un desarrollador dedicado a la creación de aplicaciones web innovadoras con un enfoque en el rendimiento y la experiencia del usuario.',
  openGraph: {
    type: 'website',
    url: 'https://luisnavarro.vercel.app/',
    title: 'Portafolio - Luis Rodolfo Navarro',
    description:
      'Descubre el trabajo y los proyectos de Luis Rodolfo Navarro, un desarrollador dedicado a la creación de aplicaciones web innovadoras con un enfoque en el rendimiento y la experiencia del usuario.',
    images: [
      {
        url: 'https://luisnavarro.vercel.app/porfolio.webp',
        width: 1200,
        height: 630,
        alt: 'Portafolio - Luis Rodolfo Navarro'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',

    title: 'Portafolio - Luis Rodolfo Navarro',
    description:
      'Descubre el trabajo y los proyectos de Luis Rodolfo Navarro, un desarrollador dedicado a la creación de aplicaciones web innovadoras con un enfoque en el rendimiento y la experiencia del usuario.',
    images: ['https://luisnavarro.vercel.app/porfolio.webp']
  }
}

const onest = Onest({ subsets: ['latin'] })
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`bg-gradient-to-t from-teal-100 to-slate-300 dark:bg-gradient-to-br dark:from-[#0f172a] dark:via-[#0b1f1a] dark:to-[#020617] text-black dark:text-white ${onest.className}`}>
        <ProviderTheme>
          <ToastProvider>{children}</ToastProvider>
        </ProviderTheme>
        <Footer />
      </body>
    </html>
  )
}

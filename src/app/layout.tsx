import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { RootProviders } from './providers'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

// Importando Poppins do Google Fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Inclua os pesos que você deseja usar
})

export const metadata: Metadata = {
  title: 'Meninas Digitais',
  description: 'Meninas Digitais',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <RootProviders>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </RootProviders>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MTG Introduksjon',
  description: 'Introduksjon til MTG',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='no'>
      <body className={inter.className}>
        <main className='grid min-h-screen min-w-screen gap-6 grid-cols-1 p-4 lg:grid-cols-6 lg:p-12 bg-stone-700 text-stone-200'>
          {children}
        </main>
      </body>
    </html>
  )
}

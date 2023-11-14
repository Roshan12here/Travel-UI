import type { Metadata } from 'next'

import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'TravewlEX',
  description: 'A modern trvaeeling UX/UI App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
      className='bg-light-gray'
      >
        <Navbar/>
        <main
        className='relative overflow-hidden bg-light-gray'
        >
          {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}

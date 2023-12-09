import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'
import {ToastProvider} from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/confetti-providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learn Hub',
  description: 'This is a learning management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      
      <html lang="en">
        <body className={inter.className } >
          <ConfettiProvider />
          <ToastProvider />
          {children}
          </body>
      </html>
    </ClerkProvider>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar/navbar";
const inter = Inter({ subsets: ['latin'],variable:'--font-inter' })

export const metadata: Metadata = {
  title: 'Develop With Mohib',
  description: 'Turn your business ideas into highly functional and fine quality code with mohib',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={'bg-primary__dark'}>
      <div className={inter.className}>{children}</div>
    <Navbar/>
    </body>
    </html>
  )
}

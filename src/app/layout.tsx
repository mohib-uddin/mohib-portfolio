import './globals.css'
import type { Metadata } from 'next'
import { Poppins} from 'next/font/google'
import Navbar from "@/components/navbar/navbar";
import Provider from "@/context/providers/theme-provider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Poppins({ subsets: ['latin'],variable:'--font-inter',weight:[
    '700','400','900'
  ] })

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
    <html lang="en" suppressHydrationWarning={true}>
    <body  className={`${inter.className}`} >
    <Provider>
      <main>{children}</main>
      <ToastContainer/>
      <Navbar/>
    </Provider>
    </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import Header from '@/components/header/index'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header/>
          <div className='m-6'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

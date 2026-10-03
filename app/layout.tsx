import Link from 'next/link'
import './globals.css'
import {Metadata} from "next";

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
      <html lang="en">
      <body>
      <h1 className='p-4.5'>Campus Bookings</h1>

      <nav className='flex items-center justify-evenly bg-slate-900 p-4' aria-label="Main">
          <Link href="/">Home</Link>
          <Link href="/resources">Resources</Link>
          <Link href='/bookings'>Bookings</Link>
      </nav>

      <main>{children}</main>

      <footer className='flex items-start bg-slate-900 p-4'>Footer</footer>
      </body>
      </html>
  )
}

export const metadata: Metadata = {
    title: {
        template: '%s · Campus Bookings',
        default: 'Campus Bookings',
    },
}
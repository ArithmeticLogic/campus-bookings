import './globals.css'
import NavLinks from '@/app/_components/nav-links'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s · Campus Bookings',
        default: 'Campus Bookings',
    },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
      <html lang="en">
      <body>
      <h1 className='p-4.5'>Campus Bookings</h1>

      <nav className='flex items-center justify-evenly bg-slate-900 p-4' aria-label="Main">
          <NavLinks />
      </nav>

      <main className='max-w-5xl mx-auto p-6 wrapper on'>
          {children}
      </main>

      <footer className='flex items-start bg-slate-900 p-4'>Footer</footer>
      </body>
      </html>
  )
}
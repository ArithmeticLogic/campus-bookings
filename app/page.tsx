import Link from "next/link";

export default function Home() {
  return (
      <main>
          <h1 className='p-4.5'>{metadata.title}</h1>

          <h1>Welcome</h1>
      </main>
  )
}

export const metadata = {
    title: 'Home',
}
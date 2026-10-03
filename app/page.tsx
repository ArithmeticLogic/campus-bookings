import Link from "next/link";

export default function Home() {
  return (
      <main>
          <h1 className='p-4.5'>{metadata.title}</h1>

          <p>Rooms, IT kit and sports facilities.</p>
        <ul>
          <li>Study rooms</li>
          <li>IT equipment</li>
          <li>Sports facilities</li>
        </ul>
        <p>Built by YOUR NAME · SOUD2528</p>
      </main>
  )
}

export const metadata = {
    title: 'Home',
}
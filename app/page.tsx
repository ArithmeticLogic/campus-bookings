import Link from "next/link";

export default function Home() {
  return (
      <main>
          <Link href="/boundary">Boundary</Link>
        <h1>Campus Bookings</h1>
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
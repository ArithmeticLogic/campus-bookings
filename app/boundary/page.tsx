import Link from 'next/link'
import ClickCounter from './click-counter'

export default function BoundaryPage() {
    console.log("[server] page rendered")
    const secret = process.env.SECRET_MESSAGE ?? ""
    const time = new Date().toLocaleTimeString()
    return (
        <main>
            <h1>Server vs Client</h1>
            <p>Server time: {time}</p>
            <p>Secret length: {secret.length}</p>
            <ClickCounter start={3} />
            <Link href="/">Home</Link>
        </main>
    )
}
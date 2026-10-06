import Link from 'next/link'

export default function NotFound() {
    return (
        <main>
            <h1 className="p-4">Error</h1>
            <Link href='/resources'>Resources</Link>
        </main>
    )
}
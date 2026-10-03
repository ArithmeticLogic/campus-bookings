import { resources } from '@/lib/resources'

export default function Resources() {
    return (
        <main>
            <h1 className='p-4.5'>{metadata.title}</h1>

            <ul>
                {resources.map((resource) => (
                    <li key={resource.id}>
                        {resource.name}
                    </li>
                    ))}
            </ul>
        </main>
    )
}

export const metadata = {
    title: 'Resources',
}
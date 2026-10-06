import { resources } from '@/lib/resources'
import ResourceCard from '@/app/resources/resource-card.tsx'

export const metadata = {
    title: 'Resources',
}

export default function Resources() {
    return (
        // Mobile first design
        <main>
            <h1 className="p-4">{metadata.title}</h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource) => (
                    <ResourceCard
                        key={resource.id}
                        resource={resource}
                        popular={false}
                    />
                ))}
            </div>
        </main>
    )
}
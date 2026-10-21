import { prisma } from "@/lib/prisma";
import ResourceCard from "@/app/resources/resource-card";

export const metadata = {
  title: "Resources",
};

export default async function Resources() {
  const resources = await prisma.resource.findMany({
    orderBy: { name: "asc" },
    include: {
      // Because building exists within resources
      building: true,
    },
  });

  return (
    // Mobile first design
    <main>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            popular={false} // Not set properly yet
          />
        ))}
      </div>
    </main>
  );
}

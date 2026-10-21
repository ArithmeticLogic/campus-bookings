import Link from "next/link";
import type { Prisma } from "@/app/generated/prisma/client";

// Telling TypeScript that a payload including building relation is present
type Props = {
  resource: Prisma.ResourceGetPayload<{
    include: { building: true };
  }>;
  popular?: boolean;
};

export default function ResourceCard({ resource, popular }: Props) {
  return (
    <article className="card p-4 rounded-xl bg-violet-400 dark:bg-violet-950">
      <h2 className="font-bold">{resource.name}</h2>
      <p>Seats: {resource.capacity}</p>
      <p>Type: {resource.type}</p>
      <p>Building: {resource.building?.name ?? "Not assigned"}</p>
      {popular && <p>Popular this week</p>}

      <div className="flex-1 border-t bg-black dark:bg-white m-1.5"></div>

      <div className="flex justify-center">
        <Link
          className="px-6 py-2 rounded-lg
            transition-colors ease-in-out duration-300
          bg-violet-300 dark:bg-violet-700 hover:bg-violet-200 dark:hover:bg-violet-800"
          href={`/resources/${resource.slug}`}
        >
          View
        </Link>
      </div>
    </article>
  );
}

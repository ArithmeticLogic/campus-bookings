import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function ResourcePage(
  props: PageProps<"/resources/[id]">,
) {
  const { id } = await props.params;
  const resource = await prisma.resource.findUnique({
    where: { slug: id },
    include: { building: true },
  });

  if (!resource) notFound();

  return (
    <article>
      <h2 className="font-bold">{resource.name}</h2>
      <p>Seats: {resource.capacity}</p>
      <p>Type: {resource.type}</p>
      <p>Location: {resource.building?.name ?? "Not assigned"}</p>
    </article>
  );
}

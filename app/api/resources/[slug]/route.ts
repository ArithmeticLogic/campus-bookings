import { prisma } from "@/lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const resource = await prisma.resource.findUnique({
    where: { slug },
    include: { bookings: true },
  });

  if (!resource) return Response.json({ error: "Not found" }, { status: 404 });

  return Response.json(resource);
}

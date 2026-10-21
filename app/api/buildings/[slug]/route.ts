import { prisma } from "@/lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const building = await prisma.building.findUnique({
    where: { slug },
    include: { resources: true },
  });

  if (!building) return Response.json({ error: "Not found" }, { status: 404 });

  return Response.json(building);
}

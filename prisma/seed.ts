import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  // Delete existing data
  await prisma.booking.deleteMany(); // Children first
  await prisma.user.deleteMany();
  await prisma.resource.deleteMany(); // Children first
  await prisma.building.deleteMany();

  // Create building
  await prisma.building.create({
    data: {
      slug: "tes1",
      name: "Building 1",
      resources: {
        createMany: {
          data: [
            {
              slug: "g12",
              name: "Study Room G12",
              type: "room",
              capacity: 6,
            },
            {
              slug: "lab2",
              name: "Mac Lab 2",
              type: "room",
              capacity: 24,
            },
            {
              slug: "cam1",
              name: "Camera Kit",
              type: "equipment",
              capacity: 1,
            },
            {
              slug: "court",
              name: "Sports Hall",
              type: "sport",
              capacity: 30,
            },
          ],
        },
      },
    },
  });

  // Create a second building with no resources
  await prisma.building.create({
    data: {
      slug: "tes2",
      name: "Building 2",
    },
  });

  // Find the study room
  const g12 = await prisma.resource.findUniqueOrThrow({
    where: { slug: "g12" },
  });

  // Create student and booking
  await prisma.user.create({
    data: {
      email: "amy@example.ac.uk",
      name: "Amy Student",
      role: "student",
      bookings: {
        create: {
          resourceId: g12.id,
          startsAt: new Date("2026-10-06T10:00:00Z"),
          endsAt: new Date("2026-10-06T11:00:00Z"),
        },
      },
    },
  });

  // Create admin
  await prisma.user.create({
    data: {
      email: "tylor@example.ac.uk",
      name: "Tylor Admin",
      role: "admin",
    },
  });
}

main().finally(() => prisma.$disconnect());

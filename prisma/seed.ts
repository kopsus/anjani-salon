import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    [{ username: "admin" }, { username: "mila" }].map(async (user) => {
      const password = await bcrypt.hash("user123", 10);
      return prisma.user.create({
        data: {
          ...user,
          password,
        },
      });
    })
  );

  await Promise.all(
    [
      {
        image: "/product1.jpg",
        title: "Toner",
        price: 30000,
      },
      {
        image: "/product2.jpg",
        title: "Cream malam",
        price: 100000,
      },
    ].map((product) => prisma.produk.create({ data: product }))
  );

  await Promise.all(
    [
      {
        title: "Infus Whitening",
        image: "/service1.jpg",
      },
      {
        title: "Cauter Keratosis",
        image: "/service2.jpg",
      },
    ].map((service) => prisma.service.create({ data: service }))
  );

  console.log("Seeding data berhasil.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

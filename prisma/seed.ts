import { PrismaClient } from "@/lib/generated/prisma/client";
import type { Prisma } from "../lib/generated/prisma/client";

import {faker} from "@faker-js/faker";
const prisma=new PrismaClient();

async function  main():Promise<void> {
  const categories=[
   "Phones",
   "Laptops",
   "Audio",
   "Fashion",
   "Sneaker",
   "Game"
  ]as const;
  const products:Prisma.ProductCreateManyInput[]=Array.from({length:20},()=>{
    const price=faker.number.float({
           min: 50,
        max: 2000,
        fractionDigits: 2,
    })
    return{
      name: faker.commerce.productName(),
        price,
        salePrice: faker.datatype.boolean()
          ? Number((price * 0.9).toFixed(2))
          : null,
        images: [faker.image.url()],
        category: faker.helpers.arrayElement(categories),
        stock: faker.number.int({ min: 0, max: 100 }),
        isFeatured: faker.datatype.boolean(),
        isActive: true,
    }
  })
  await prisma.product.createMany({
    data:products
  });
  console.log("20 products created")
}

main().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
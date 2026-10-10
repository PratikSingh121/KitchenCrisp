import { PrismaClient } from "@prisma/client";
import { sampleProducts } from "../src/lib/products";
const db = new PrismaClient();
async function main() {
  for (const p of sampleProducts) await db.product.upsert({ where: { id: p.id }, create: p, update: {} });
  console.log("Kitchen Krisp sample catalogue seeded. Replace example products with your real catalogue before launch.");
}
main().finally(() => db.$disconnect());

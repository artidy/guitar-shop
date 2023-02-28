import { PrismaClient } from '@prisma/client';

import { createRandomProduct } from '../helpers';

const START_COUNT = 0;
const DEFAULT_PRODUCT_COUNT = 10;
const FINISHED_MESSAGE = 'База была заполнена';

const prisma = new PrismaClient();

async function fillDb(productCount: number = DEFAULT_PRODUCT_COUNT) {

  for (let i = START_COUNT; i < productCount; i++) {
    await prisma.product.upsert({
      where: { id: i + 1 },
      update : {},
      create: createRandomProduct()
    });
  }

  console.info(FINISHED_MESSAGE);
}


fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })

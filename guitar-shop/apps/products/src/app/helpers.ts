import { faker } from '@faker-js/faker';

import {
  ARTICLE_LENGTH,
  GUITAR_STRINGS,
  ImageIndex,
  Price,
  ProductImageSettings
} from './app.constant';

const GUITAR_TYPES = ['электро', 'аккустика', 'укулеле'];

function createRandomProduct() {
  return {
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    createdAt: faker.date.past(),
    previewPath: `${ProductImageSettings.DefaultName}-${faker.datatype.number({
      min: ImageIndex.Min,
      max: ImageIndex.Max
    })}.${ProductImageSettings.DefaultType}`,
    type: faker.helpers.arrayElement(GUITAR_TYPES),
    article: faker.random.alphaNumeric(ARTICLE_LENGTH),
    stringCount: faker.helpers.arrayElement<number>(GUITAR_STRINGS),
    price: faker.datatype.number({ min: Price.Min, max: Price.Max })
  }
}

export {
  createRandomProduct
}

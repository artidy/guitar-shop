import { faker } from '@faker-js/faker';
import path from 'path';

import {
  ARTICLE_LENGTH,
  ASSETS_DIRECTORY,
  GUITAR_STRINGS,
  GUITAR_TYPES,
  ImageIndex,
  Price,
  ProductImageSettings
} from './app.constant';

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

const getShortPathDirectory = (filePath: string) => {
  return path.join(ASSETS_DIRECTORY, filePath);
}

const getFullPathDirectory = (filePath: string) => {
  return path.join(__dirname, getShortPathDirectory(filePath));
}

export {
  createRandomProduct,
  getShortPathDirectory,
  getFullPathDirectory,
}

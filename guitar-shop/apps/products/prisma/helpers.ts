import { faker } from '@faker-js/faker';

enum ProductImageSettings {
  Folder = 'assets/img/products',
  DefaultName = 'catalog-product',
  DefaultType = 'png'
}

enum ImageIndex {
  Min = 0,
  Max = 8
}

enum Price {
  Min = 100,
  Max = 1000000
}

const ARTICLE_LENGTH = 10;
const GUITAR_STRINGS = [4, 6, 7, 12];
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

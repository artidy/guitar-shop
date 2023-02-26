import { GuitarType } from '@guitar-shop/shared-types';

enum ImageIndex {
  Min = 0,
  Max = 8
}

enum Price {
  Min = 100,
  Max = 1000000
}

enum ProductImageSettings {
  Folder = 'assets/img/products',
  DefaultName = 'catalog-product',
  DefaultType = 'png'
}

const ENV_FILE_PATH = 'environments/.products.env';
const ARTICLE_LENGTH = 10;
const ASSETS_DIRECTORY = 'assets';
const GUITAR_STRINGS = [4, 6, 7, 12];
const GUITAR_TYPES = Object.values(GuitarType);

export {
  ImageIndex,
  Price,
  ProductImageSettings,
  ENV_FILE_PATH,
  ARTICLE_LENGTH,
  ASSETS_DIRECTORY,
  GUITAR_STRINGS,
  GUITAR_TYPES,
}

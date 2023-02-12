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
const GUITAR_STRINGS = [4, 6, 7, 12];
const ARTICLE_LENGTH = 10;

export {
  ImageIndex,
  Price,
  ProductImageSettings,
  ENV_FILE_PATH,
  GUITAR_STRINGS,
  ARTICLE_LENGTH,
}

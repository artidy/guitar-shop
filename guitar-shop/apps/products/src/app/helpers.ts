import path from 'path';

import { ASSETS_DIRECTORY } from './app.constant';

const getShortPathDirectory = (filePath: string) => {
  return path.join(ASSETS_DIRECTORY, filePath);
}

const getFullPathDirectory = (filePath: string) => {
  return path.join(__dirname, getShortPathDirectory(filePath));
}

export {
  getShortPathDirectory,
  getFullPathDirectory,
}

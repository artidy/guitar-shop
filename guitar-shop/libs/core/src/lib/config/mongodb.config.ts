import { registerAs } from '@nestjs/config';

import { MONGO_CONFIG_TOKEN } from '../lib.const';

export const mongodbConfig = registerAs(MONGO_CONFIG_TOKEN, () => ({
  name: process.env.MONGO_DB,
  host: process.env.MONGO_HOST,
  port: parseInt(process.env.MONGO_PORT, 10),
  user: process.env.MONGO_USER,
  password: process.env.MONGO_PASSWORD,
  authBase: process.env.MONGO_AUTH_BASE,
}));

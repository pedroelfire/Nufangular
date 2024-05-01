import * as dotenv from 'dotenv';
dotenv.config(); // Load variables from .env

export const config = {
  fatSecretAppId: process.env['FATSECRET_CLIENT_ID'],
  fatSecretAppKey: process.env['FATSECRET_CLIENT_SECRET'],
};

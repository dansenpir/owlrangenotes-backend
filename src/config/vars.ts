import path from 'path';
export const env = process.env.NODE_ENV || 'development';
import * as dotenv from 'dotenv';

if (env === 'production') {
  dotenv.config({ path: path.join(__dirname, '../../.env') });
} else {
  dotenv.config({ path: path.join(__dirname, '../../.env.dev') });
}

export const jwt_secret = process.env.JWT_SECRET as string;
export const salt_rounds = 10;
export const port = process.env.PORT || '3333';
export const PG_CONFIG = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  db: process.env.POSTGRES_DB,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
};

export const blackListExpire = env === 'production' ? 36e5 : 1e4;
export const jwtTokenExpire = () => {
  return env === 'production' ? Math.floor(Date.now() / 1000) + 3600 : Math.floor(Date.now() / 1000) + 12;
};

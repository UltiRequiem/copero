import dotenv from 'dotenv';

dotenv.config();

export const {
  DB_USER,
  PASSWORD,
  CLUSTER_NAME,
  SUBDOMAIN,
  DB,
} = process.env;

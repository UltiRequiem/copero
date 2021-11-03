import MongoDB from './mongodb.js';

import {
  DB_USER, PASSWORD, CLUSTER_NAME, SUBDOMAIN, DB,
} from '../config.js';

const MONGO_URI = `mongodb+srv://${DB_USER}:${PASSWORD}@${CLUSTER_NAME}.${SUBDOMAIN}.mongodb.net/${DB}?retryWrites=true&w=majority`;

// eslint-disable-next-line import/prefer-default-export
export const DBService = new MongoDB(MONGO_URI);

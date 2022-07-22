import MongoDB from "./mongodb";

import { CLUSTER_NAME, DB, DB_USER, PASSWORD, SUBDOMAIN } from "../config";

// eslint-disable-next-line import/prefer-default-export
export const DBService = new MongoDB(
  `mongodb+srv://${DB_USER}:${PASSWORD}@${CLUSTER_NAME}.${SUBDOMAIN}.mongodb.net/${DB}?retryWrites=true&w=majority`,
);

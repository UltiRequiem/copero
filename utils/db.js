import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { DB_USER, PASSWORD, CLUSTER_NAME, SUBDOMAIN } = process.env;

const URI = `mongodb+srv://${DB_USER}:${PASSWORD}@${CLUSTER_NAME}.${SUBDOMAIN}.mongodb.net/principal?retryWrites=true&w=majority`;

class DataBase {
  constructor() {
    (async () => {
      await mongoose.connect(URI);
      console.log("Connected to MongoDB Atlas.");
    })();
  }
}

export default new DataBase();

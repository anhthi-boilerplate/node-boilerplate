/* eslint-disable no-console */
import Hapi from "@hapi/hapi";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

import routes from "./routes";

dotenv.config();

const host = process.env.HOST;
const dbUri = process.env.DB_URI;
const port = process.env.PORT;
const runningPort = process.env.PORT || port;

const createServer = () => {
  const server = new Hapi.Server({
    port: runningPort,
    host,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  return server;
};

/**
 * Connect Database
 */

const connectDb = () => {
  mongoose.connection.once("open", () => {
    console.info(":: Connect to database success");
  });

  mongoose.connection.on("error", (error) => {
    console.error(":: Connect to database failed", error);
  });

  mongoose.set("strictQuery", true);
  mongoose.connect(dbUri as string);
};

const initialize = async () => {
  const server = createServer();
  connectDb();

  await server.initialize();
  console.info(`:: Server is running on port ${runningPort}`);

  return server;
};

const startServer = async () => {
  try {
    const server = await initialize();
    await server.start();
  } catch (error) {
    console.error("Server cashes: ", error);
  }
};

startServer();

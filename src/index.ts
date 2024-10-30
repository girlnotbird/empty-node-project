import { __dirname } from "./utilities/node.js";
import express from "express";

const DIRNAME = __dirname(import.meta);
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const HOSTNAME = process.env.HOSTNAME ? process.env.HOSTNAME : "0.0.0.0";
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "production";

const server = express();

server.use(express.static(DIRNAME + '/public/app'));

server.listen(PORT, HOSTNAME, () => {
  console.log(`Now listening on port ${String(PORT)}...`);
});

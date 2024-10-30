import express from "express";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const HOSTNAME = process.env.HOSTNAME ? process.env.HOSTNAME : "0.0.0.0";
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "production";

const server = express();

server.get("/", (req, res) => {
  res.send("Hello, World.").end();
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Now listening on port ${String(PORT)}...`);
});
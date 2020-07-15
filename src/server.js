import "dotenv/config";
import express from "express";
import "express-async-errors";

import routes from "./routes";
import database from "./database";

const app = express();

const APP_PORT = process.env.APP_PORT || 3000;

app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).json({
    status: "error",
    message: "Internal server error.",
  });
});

app.listen(process.env.APP_PORT || 3333, () => {
  console.log(`Application is running on port ${APP_PORT}...`);
});

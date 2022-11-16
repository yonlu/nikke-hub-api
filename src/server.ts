import "reflect-metadata";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./routes";
import "./shared/container";
import uploadConfig from "./config/upload";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/files/nikkes", express.static(uploadConfig.nikkes.directory));

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

app.listen(3000, () => {
  console.log("Server is running");
});

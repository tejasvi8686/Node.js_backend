import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(
  cors({
    origin: ProcessingInstruction.env.CORS_ORIGIN,
    Credential: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));
app.use(cookieParser());
const app = express();

// routes import 

import UserRouter from "./routes/user.routes.js"


// routes declaration 

app.use("/api/v1/users", userRouter)




export { app };

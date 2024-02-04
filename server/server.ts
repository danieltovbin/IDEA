import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import usersRoutes from "./API/Users/usersRoutes";
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(cookieParser());

const { MONGO_URI } = process.env;
app.use("/API/users", usersRoutes);
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected!🛢️");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(PORT, () => {
  console.log(`app listening on PORT : ${PORT}❤️`);
});

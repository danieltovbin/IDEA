const cloudinary = require( "cloudinary").v2
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cloudinaryRoutes from "./API/Cloudinary/cloudinaryRoutes";
import donationRoutes from "./API/Donors/donationRoutes";
import projectRoutes from "./API/Projects/projectRoutes";
import usersRoutes from "./API/Users/usersRoutes";
import { corsOptions } from "./config/corsOptions";
import { allowedOrigins } from "./config/allowedOrigin";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

const { MONGO_URI } = process.env;

app.use("/API/users", usersRoutes);
app.use("/API/projects", projectRoutes);
app.use("/API/cloudinary", cloudinaryRoutes);
app.use("/API/donation", donationRoutes);

const CLOUDINARY_URI = JSON.parse(process.env.CLOUDINARY_URI);

cloudinary.config(CLOUDINARY_URI);

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


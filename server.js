import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import bodyParser from "body-parser";

//config env
dotenv.config();
//database config
connectDB();
//rest object
const app = express();
//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan(`dev`));

//routes
app.use("/api/v1/auth", authRoutes);
//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to E-Service app</h1>");
});
//PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `Server running on ${process.env.DEV_MODE} mode port ${PORT}`.bgCyan.white
  );
});

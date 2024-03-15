import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"; 
import StudentRoute from "./Routes/StudentRoute.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

// Utilisez le middleware cors
app.use(cors());

app.use("/student", StudentRoute);

app.listen(8080, () => {
  console.log("Listening");
});

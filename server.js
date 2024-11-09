import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import Dbconnection from "./config/DB.js";
import cors from "cors";
import Clientroute from "./Routes/ClientRoutes.js";
import Projectroute from "./Routes/ProjectRoutes.js";
import Contactroute from "./Routes/ContactRoutes.js";
import Subscriptionroute from "./Routes/SubscriptionRoutes.js";

//rest Object
const app = express();

//config env
dotenv.config();

//database connection
Dbconnection();

//Port
const port = 8080;

//Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/client", Clientroute);
app.use("/api/v1/project", Projectroute);
app.use("/api/v1/contact", Contactroute);
app.use("/api/v1/subscription", Subscriptionroute);
//rest api
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server is running on devlopment in port: ${port}`);
});

import express from "express";
import router from "./routes";
const app = express();

app.use("/app/boilerplate", router);

app.listen(3000);
console.log("The server is up on port 3000")
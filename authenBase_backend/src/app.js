import express from "express";
import auth_router from "./routers/auth_router.js"

const app = express();
app.use(express.json());

app.use("/api/auth", auth_router);

export default app;
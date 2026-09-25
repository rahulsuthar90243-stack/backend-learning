import express from "express";
import auth_router from "./routers/auth_router.js"
import cookieParser from "cookie-parser"
import post_router from "./routers/post.router.js"

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", auth_router);
app.use("/api/post", post_router)

export default app;
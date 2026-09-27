import express from "express"
import cookie_parser from "cookie-parser"
import user_router from "./routers/auth.router.js";
import musicRouter from "./routers/music.router.js"
const app = express();

app.use(express.json());
app.use(cookie_parser());

app.use("/api/auth", user_router);
app.use("api/auth", musicRouter)


export default app;
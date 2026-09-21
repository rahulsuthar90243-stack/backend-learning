import app from "./src/app.js"
import "dotenv/config";
import connectDB from "../second_backend/src/db/db.js";
const PORT = 8000;


connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
})
import app from "./src/app.js"
import "dotenv/config"
import connectDB from "./src/DataBase/db.js";

const port = process.env.PORT || 4000;

connectDB();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
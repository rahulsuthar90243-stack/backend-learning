import app from "./src/app.js";
import "dotenv/config";
import connectDB from "./src/db/db.js";

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log("MongoDB connection warning:", error.message);
  }

  app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
  });
};

startServer();
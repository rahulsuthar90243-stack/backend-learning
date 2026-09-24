import app  from "./src/app.js"
import "dotenv/config"
import connectDB from "./src/Database/db.js"

const PORT = process.env.PORT

connectDB();

app.get("/", (req, res) => {
  res.send("AuthenBase_Backend Server Start");
  // res.status(200).json({
  //   message: "AuthenBase_backend Server Start"
  // })
})

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);

})

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(cors());

//import routes

const auth = require('./routes/auth')



app.get("/", (req, res) => {
  res.send("API is running....");
});


app.use("/api", auth)

const port = process.env.PORT || 5000;

const server = app.listen(
  port,
  console.log(`Server is running on  server at port 5000`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`.red.bold);
  server.close(() => process.exit(1));
});

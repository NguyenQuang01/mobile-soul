const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const user = require('./routers/index')
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Soul", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();
const port = 5000;
app.use(express.json());
app.use(cors());
app.use('/user',user)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

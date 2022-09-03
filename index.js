const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const todo = require("./routes/todo");
require("dotenv").config();


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: true,credentials: true}))
// middleware
app.use(express.json({ extended: false }));

// routes
app.get("/",(req,res)=> res.send("server up and running"));
app.use("/api/todo",todo)


// database
connectDB();

// port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on https://localhost:/${PORT}`);
});

const express = require("express");
const app = express();

// importing env varibales 
require("dotenv").config();
const PORT = process.env.PORT || 3000

// importing routes for TOOD API
const todoRoutes = require("./routes/todoRoutes")

// middleware to parse request body into json format
app.use(express.json());

// mounting todo APIs
app.use("/api/v1", todoRoutes)

// starting server
app.listen(PORT, (req, res) => {
    console.log("server started at port", PORT)
})

// connecting to DB
const connectToDB = require("./config/database");
connectToDB();

// default Route
app.get("/", (req, res) => {
    res.send(`<h1>Welcome to Home page</h1>`)
})
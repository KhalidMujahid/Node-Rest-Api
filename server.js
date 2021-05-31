require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const router = require("./routes/itemsRoutes");
const PORT = process.env.PORT || 5000;

//cors
app.use(cors());

//json middleware 

app.use(express.json());


app.use("/", router);


//connect to the database

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(res => console.log("Database connected"))


//server listen 
app.listen(PORT, (e) => {
    if (e) return e;

    console.log("Server running on port ", PORT)
});


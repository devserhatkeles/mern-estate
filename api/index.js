import express from "express";
import mongoose from "mongoose"
import 'dotenv/config'

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err)
})

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
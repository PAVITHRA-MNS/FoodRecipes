import express from "express";
import axios from "axios";
import "dotenv/config";
import cors from "cors";

const PORT=5000;
const app = express();
app.use(cors(
    {
        origin : "http://localhost:3000",
    }
));



app.get("/:food", async (req,res) => {
    const response = await axios.get(`https://api.edamam.com/search?q=${req.params.food}&app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}`);

    res.json(response.data.hits);
})


app.listen(PORT, ()=> {
    console.log("Server started at port 5000");
})
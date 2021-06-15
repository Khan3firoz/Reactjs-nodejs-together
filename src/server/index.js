const express = require("express");
let cors = require("cors");


const app = express();
const PORT = 3008;
app.use(cors());


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});




app.listen(PORT, function () {
    console.log(`Server is Running on port no ${PORT}`);
});
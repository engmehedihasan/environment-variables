require ("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express ();
app.get("/",(req,res)=>{
    res.send("Hello This is LocalHost");
});

app.listen(PORT, ()=>{
    console.log(`Server is Runnig a : http://localhost: ${PORT}`);
});


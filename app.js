const express = require('express');
require("./Connection/conn");
const app=express();
const Student=require('./Connection/Models/students');
const process = require('process');
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
})

app.post("/students", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save();
    res.send("Hello from the other Sides");
});

app.listen(port, () => {
    console.log(`Connection is setup at ${port}`)
})
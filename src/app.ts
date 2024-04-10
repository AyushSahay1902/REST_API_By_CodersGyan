import express from "express";
//creating an express app
const app = express();
//Routes
app.get('/', (req, res, next) => {
    res.json({message: "Welcome to the express app."}) //text,json,xml,html
})




export default app;
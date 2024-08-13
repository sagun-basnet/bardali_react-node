// const express = require("express");
import express from "express";
import postRouter from "./routers/postRouter.js";

const app = express();

app.use(express.json());

app.use("/", postRouter); // http://localhost:5500/post

app.listen(5500, () => {
  console.log("Server is running on port 5500");
});

// const information = document.getElementById("info");
// information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;
const { BrowserWindow } = require("electron");


//express requirements:
const express = require("express");
const app1 = express();
const port = 8000;

const button = document.getElementById("start_server");
button.addEventListener("click", () => {
  createServer();
});

const createServer = () => {
  console.log("Reached here!!");
  app1.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app1.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

export default createServer

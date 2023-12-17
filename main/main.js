const { app, BrowserWindow, ipcMain } = require("electron");
const serve = require("electron-serve");
const path = require("path");
const express = require("express")

const appServe = app.isPackaged
  ? serve({
      directory: path.join(__dirname, "../pubilc"),
    })
  : null;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (app.isPackaged) {
    appServe(win).then(() => {
      win.loadURL("app://-");
    });
  } else {
    win.loadURL("http://localhost:3001");
    win.webContents.openDevTools();
    win.webContents.on("did-fail-load", (e, code, desc) => {
      win.webContents.reloadIgnoringCache();
    });
  }
};

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});


ipcMain.on("server-chalu-kardo", ()=>{const app1 = express();
const port = 8000;
  console.log("Reached here!!");
  app1.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app1.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

})
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    resizable: false,
    icon: path.join(__dirname, 'src/assets/shrink-icon.png'), // opcional
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('src/renderer/startpage.html'); // ou qualquer HTML seu
}

app.whenReady().then(createWindow);
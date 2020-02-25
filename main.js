const { app, ipcMain, BrowserWindow, screen } = require('electron');
const { exec } = require('child_process');
const dialog = app.dialog;

ipcMain.on('terminal', function(event){
    exec('xfce4-terminal', (err, stdout, stderr) => {
        if (err){
            console.log(err);
            return;
        }
    });
})

ipcMain.on('firefox', function(event){
    exec('firefox', (err, stdout, stderr) => {
        if (err){
            console.log(err);
            return;
        }
    });
})

ipcMain.on('thunar', function(event){
    exec('thunar', (err, stdout, stderr) => {
        if (err){
            console.log(err);
            return;
        }
    });
})

function createWindow () {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize
    // Cria uma janela de navegação.
    let win = new BrowserWindow({
        width: width,
        height: height,
        type: 'desktop',
        webPreferences: {
        nodeIntegration: true
        }
    })

    // e carregar o index.html do aplicativo.
    win.loadFile('index.html')

    // fullscreen
    win.setFullScreen(true)

    // win.setKiosk(true)

    // Open the DevTools.
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

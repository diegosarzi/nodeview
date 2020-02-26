const { app, ipcMain, BrowserWindow, screen } = require('electron');
const { exec } = require('child_process');

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
let width
let height
function createWindow () {
    widthArea = screen.getPrimaryDisplay().workAreaSize.width
    heightArea = screen.getPrimaryDisplay().workAreaSize.height

    // Cria uma janela de navegação.
    let win = new BrowserWindow({
        width: widthArea,
        height: heightArea,
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


ipcMain.on('openMenu', function(event){

    menu = new BrowserWindow({
        height: 120,
        width: 80,
        x: 0,
        y: (heightArea - 120) - 20,
        frame: false,
        transparent:true,
        webPreferences: {
        nodeIntegration: true
    }
    });

    menu.removeMenu()
  
    menu.loadFile('menu.html');

});

ipcMain.on('closeMenu', function(event){

    menu.close()

});
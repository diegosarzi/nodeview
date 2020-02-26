const electron = require("electron");
const ipc = electron.ipcRenderer;

const firefoxBtn = document.getElementById('firefox');
const thunarBtn = document.getElementById('thunar');
const menu = document.getElementById("menu");

const systemBtn = document.getElementById('systemBtn')
const internetBtn = document.getElementById('internetBtn')

const exitNode = document.getElementById('exit')

firefoxBtn.addEventListener('click', function(){
    ipc.send('firefox');
})

thunarBtn.addEventListener('click', function(){
    ipc.send('thunar');
})

exitNode.addEventListener('click', function(){
    exec("killall node && killall openbox", (err, stdout, stderr) => {
        // console...
    })
})

internetBtn.addEventListener('mouseover', function(){
    ipc.send('closeSystemMenu');
})


systemBtn.addEventListener('mouseover', function(){
    ipc.send('openSystemMenu');
    
})
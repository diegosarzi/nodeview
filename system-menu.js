const electron = require("electron");
const ipc = electron.ipcRenderer;
const terminalBtn = document.getElementById('terminal');

terminalBtn.addEventListener('mouseout', function(){
    ipc.send('closeSystemMenu');
})

terminalBtn.addEventListener('click', function(){
    ipc.send('terminal');
})
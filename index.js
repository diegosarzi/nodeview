const electron = require("electron");
const ipc = electron.ipcRenderer;

const terminalBtn = document.getElementById('terminal');
const firefoxBtn = document.getElementById('firefox');
const thunarBtn = document.getElementById('thunar');
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById("menu");
const el = document.querySelector(".item");

el.addEventListener("mousedown", mousedown);

function mousedown(e){
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e){
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        const rect = el.getBoundingClientRect();

        el.style.left = rect.left - newX + "px";
        el.style.top = rect.top - newY + "px";

        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseup(){
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
    }
}

// body click
function mouseButton(event){
    if(event.button == 2){
        console.log("menu");
    }
}

// ATALHOS
menuBtn.addEventListener('click', function(){
    if(menu.style.display == "none"){
       menu.style.display = "block";
    } else {
        menu.style.display = "none"
    }
})

terminalBtn.addEventListener('click', function(){
    ipc.send('terminal');
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }
})

firefoxBtn.addEventListener('click', function(){
    ipc.send('firefox');
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }
})

thunarBtn.addEventListener('click', function(){
    ipc.send('thunar');
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }
})
/////////////////////////////

// RELOGIO
function startTime(){
    let today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    m = checkTime(m)
    s = checkTime(s)
    document.getElementById("relogio").innerHTML = h + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500)
}

function checkTime(i){
    if (i < 10) {
        i= "0" + i
    }
    return i 
}

startTime()
/////////////////////////////
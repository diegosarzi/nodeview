const electron = require("electron");
const ipc = electron.ipcRenderer;

const { exec } = require('child_process');

const terminalBtn = document.getElementById('terminal');
const firefoxBtn = document.getElementById('firefox');
const thunarBtn = document.getElementById('thunar');
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById("menu");
const menuDireito = document.getElementById("menuDireito");
const bateria = document.getElementById('bateria')
const wifiBtn = document.getElementById('wifi')
const volumeBtn = document.getElementById('volume')

// const el = document.querySelector(".item");

function displayMenu(){
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }
}

function updateBat() {
    exec('cat /sys/class/power_supply/BAT0/capacity && cat /sys/class/power_supply/BAT0/status',  (error, stdout, stderr) => { 
        if(stdout.split("\n")[1] == 'Charging'){
            bateria.innerHTML = '<img src="./img/plug.png" alt="Baterry Charging" style="padding-right: 8px;">' + stdout.split("\n")[0] + "% - " + stdout.split("\n")[1]
        } else if(stdout.split("\n")[1] == 'Unknown'){
            bateria.innerHTML = '<img src="./img/loading.gif" alt="Update Battery Status" style="padding-right: 8px;">' + stdout.split("\n")[0] + "% - " + "Updating"
        }
        else {
            bateria.innerHTML = '<img src="./img/batery.png" alt="Battery Discharging">' + stdout.split("\n")[0] + "% - " + stdout.split("\n")[1]
        }
    })
    return
}

updateBat()

setInterval(() => {
    updateBat()
}, 1000);

// el.addEventListener("mousedown", mousedown);

/*function mousedown(e){
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
*/
// body click
function mouseButton(event){
    if(event.button == 0){
        //if (menu.style.display == "block") {
        //    menu.style.display = "none";
        //}
        //if (menuDireito.style.display == "block") {
        //    menuDireito.style.display = "none";
        //}
    }
    if(event.button == 2){
        if(menuDireito.style.display == "none"){
            menuDireito.style.left = event.clientX + "px"
            menuDireito.style.top = event.clientY + "px"
            menuDireito.style.display = "block";

            if (menu.style.display == "block") {
                menu.style.display = "none";
            }

         } else {
             menuDireito.style.display = "none"
         }
    }
}

// ATALHOS
menuBtn.addEventListener('click', function(){
    if(menu.style.display == "none"){
       menu.style.display = "block";
       if(menuDireito.style.display == "block"){
           menuDireito.style.display = "none";
       }
    } else {
        menu.style.display = "none"
    }
})

terminalBtn.addEventListener('click', function(){
    ipc.send('terminal');
    displayMenu()
})

firefoxBtn.addEventListener('click', function(){
    ipc.send('firefox');
    displayMenu()
})

thunarBtn.addEventListener('click', function(){
    ipc.send('thunar');
    displayMenu()
})

wifiBtn.addEventListener('click', function(){
    exec("xfce4-terminal -x nmtui", (err, stdout, stderr) => {
        // console...
    })
    displayMenu()
})

volumeBtn.addEventListener('click', function(){
    exec("pavucontrol", (err, stdout, stderr) => {
        // console...
    })
   
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


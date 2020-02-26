const terminalBtn = document.getElementById('terminal');
const firefoxBtn = document.getElementById('firefox');
const thunarBtn = document.getElementById('thunar');
const menu = document.getElementById("menu");

// menu
const systemBtn = document.getElementById('systemBtn')

const exitNode = document.getElementById('exit')

function displayMenu(){
    if(menu.style.display == "block"){
        menu.style.display = "none";
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


exitNode.addEventListener('click', function(){
    exec("killall node && killall openbox", (err, stdout, stderr) => {
        // console...
    })
})

systemBtn.addEventListener('mouseover', function(){
    let viewportOffset = menu.getBoundingClientRect();

    let width = viewportOffset.width;
    document.getElementById('System').style.display = "block";
    document.getElementById('System').style.top = "0px"
    document.getElementById('System').style.left = width + "px"
})

terminalBtn.addEventListener('mouseover', function(){
    document.getElementById('System').style.display = "block";
})

terminalBtn.addEventListener('mouseover', function(){
    document.getElementById('System').style.display = "block";
})
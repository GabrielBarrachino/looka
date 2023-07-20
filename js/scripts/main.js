//Menu Mobile
const abrirMenu = document.getElementById('abirMobile');
const fecharMenu = document.getElementById('fecharMobile');


function openMenu(){
    document.documentElement.classList.add('menuOpened')
}

function closeMenu() {
    document.documentElement.classList.remove('menuOpened')
}

abrirMenu.addEventListener('click', openMenu);
fecharMenu.addEventListener('click', closeMenu);
const openModal = document.getElementById('jsOpenModal');
const closeModal = document.getElementById('jsClose');
const closeOverlayModal = document.getElementById('jsOverlay');

//Modal Login
openModal.addEventListener('click', (event) => {
    event.preventDefault();
    let html = document.documentElement;
    html.classList.add('showModal');
})

closeModal.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('showModal');
});

closeOverlayModal.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('showModal');
})

//Modal Sign up
const openModalSign = document.getElementById('jsOpenModalSign');
const closeModalSign = document.getElementById('jsCloseSign');
const closeOverlayModalSign = document.getElementById('jsOverlaySign');

openModalSign.addEventListener('click', (event) => {
    event.preventDefault();
    let html = document.documentElement;
    html.classList.add('showModalSign');
})

closeModalSign.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('showModalSign');
});

closeOverlayModalSign.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('showModalSign');
})


//Modal Sign Mobile
const openModalSignMobile = document.getElementById('jsOpenModalSignMobile');

openModalSignMobile.addEventListener('click', (event) => {
    event.preventDefault();
    let html = document.documentElement;
    html.classList.add('showModalSign');
})



//Modal Log in Mobile
const openModalMobile = document.getElementById('jsOpenModalMobile');

openModalMobile.addEventListener('click', (event) => {
    event.preventDefault();
    let html = document.documentElement;
    html.classList.add('showModal');
})
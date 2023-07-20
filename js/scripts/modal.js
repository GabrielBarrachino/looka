const openModal = document.querySelector('.jsOpenModal');
const openModalSign = document.querySelector('.jsOpenModalSign');
const closeModal = document.querySelector('.jsClose');
const closeModalSign = document.querySelector('.jsCloseSign');
const closeOverlayModal = document.querySelector('.jsOverlay');
const closeOverlayModalSign = document.querySelector('.jsOverlaySign');

//Open
openModal.addEventListener('click', (event) => {
    event.preventDefault();
    let html = document.documentElement;
    html.classList.add('showModal');
})

openModalSign.addEventListener('click', (event) => {
    event.preventDefault();
    let html = document.documentElement;
    html.classList.add('showModal');
})

//Close
closeModal.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('showModal');
});

closeModalSign.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('showModal');
});

//Overlay
closeOverlayModal.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('showModal');
})

closeOverlayModalSign.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('showModal');
})
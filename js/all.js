"use strict";var abrirMenu=document.getElementById("abirMobile"),fecharMenu=document.getElementById("fecharMobile");function openMenu(){document.documentElement.classList.add("menuOpened")}function closeMenu(){document.documentElement.classList.remove("menuOpened")}abrirMenu.addEventListener("click",openMenu),fecharMenu.addEventListener("click",closeMenu);var openModal=document.getElementById("jsOpenModal"),closeModal=document.getElementById("jsClose"),closeOverlayModal=document.getElementById("jsOverlay");openModal.addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.add("showModal")}),closeModal.addEventListener("click",function(){document.documentElement.classList.remove("showModal")}),closeOverlayModal.addEventListener("click",function(){document.documentElement.classList.remove("showModal")});var openModalSign=document.getElementById("jsOpenModalSign"),closeModalSign=document.getElementById("jsCloseSign"),closeOverlayModalSign=document.getElementById("jsOverlaySign");openModalSign.addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.add("showModalSign")}),closeModalSign.addEventListener("click",function(){document.documentElement.classList.remove("showModalSign")}),closeOverlayModalSign.addEventListener("click",function(){document.documentElement.classList.remove("showModalSign")});var openModalSignMobile=document.getElementById("jsOpenModalSignMobile");openModalSignMobile.addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.add("showModalSign")});var openModalMobile=document.getElementById("jsOpenModalMobile");openModalMobile.addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.add("showModal")});
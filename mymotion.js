const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.querySelector('.close-btn');

const menu = document.querySelector(".nav_links");
const overlay = document.querySelector(".overlay");

const mainThumbnail = document.querySelector(" main-thumbnail");
const mainThumbnailLightbox = document.querySelector("..lightbox-container .main-thumbnail");

const images = document.querySelectorAll(".preview img");

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous")

const amount = document.querySelector(".amount");
const slider = document.querySelector('.mobile-thumb');
const thumbMob = document.querySelector('.thumb-mob');

const cartBtn = document.querySelector('.cart-wrp');
const cart = document.querySelector('.cart-wrp');

const closeLightBtn = document.querySelector('.close-lightbox');
const lightbox = document.querySelector(".lightbox");
const addBtn = document.querySelector('.add_btn');
const indicator = document.querySelector(".indicator");
const wrp = document.querySelector('.cart-content');

let amountValue = 0;
let currentImg = 1;

indicator.style.display = "none";
function openMenu() {
    menu.classList.add("active");
    overlay.classList.add("active");
}
function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
}
function handlePlus() {
    amountValue++;
    amount.innerText = amountValue;
}
function handleMinus() {
    if (amounValue > 0) {
        amountValue--;
    }
    amount.innerText = amountValue;
}
function nextImage() {
    if (currentImg == 4) {
        currentImg = 1;
    } else {
        currentImg++;
    }
    thumbMob.src=`./images/image-product-${currentImg}.jpg`
}
function prevImage() {
    if (currentImg == 1) {
        currentImg = 4;
    } else {
        currentImg--;
    }
    thumbMob.src=`./images/image-product-${currentImg}.jpg`
}
function toggleCart() {
    cart.classList.toggle("invisable");
}
function closeLightBox() {
    lightbox.classList.add("invisable")
}
function openLightBox() {
    lightbox.classList.remove("invisable");
}
function addItem() {
    if (amountValue > 0) {
        const total = 125.00 * amountValue;
        
    }
}
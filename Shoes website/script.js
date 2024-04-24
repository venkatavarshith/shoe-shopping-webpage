let searchform = document.querySelector('.search-form');
let navbar = document.querySelector('.navbar');
let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

// Function to add items to cart
let cart = {};

function addToCart(productId) {
    if (cart[productId]) {
        cart[productId]++;
    } else {
        cart[productId] = 1;
    }
    updateCartCount();
}

// Function to update cart count displayed in the header
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    let totalCount = 0;
    for (const productId in cart) {
        totalCount += cart[productId];
    }
    cartCount.textContent = totalCount;
}

// Event listener for clicking on the cart icon to display cart contents
document.getElementById('cart-icon').addEventListener('click', function() {
    // Display the cart contents in a modal or a sidebar
    // You can iterate over the 'cart' object and display each item and quantity
});

// Search button click event
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
}

// Menu button click event
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
}

// Slide navigation functions
function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// Header active class based on scroll position
window.onscroll = () => {
    searchform.classList.remove('active');
    navbar.classList.remove('active');

    if (window.scrollY > 30) {
        document.querySelector('header').classList.add('header-active');
    } else {
        document.querySelector('header').classList.remove('header-active');
    }
}

// Swiper initialization
var swiper = new Swiper(".featured-slider", {
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

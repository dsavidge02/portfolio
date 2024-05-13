const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
});

// document.addEventListener('DOMContentLoaded', function (){
//     var slideshowContainer = document.querySelector('.slideshow__container');
//     var images = slideshowContainer.querySelectorAll('img');
//     var totalWidth = 0;

//     images.forEach(function(img) {
//         totalWidth += img.clientWidth;
//     });

//     var halfWidth = totalWidth / 2;

//     var css = document.createElement('style');
//     css.type = 'text/css';
//     css.innerHTML = `
//         @keyframes marquee {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-${halfWidth}px); }
//         }
//     `;
//     document.head.appendChild(css);

//     console.log(halfWidth);
// });
// current year for copyright block
const currentYear = new Date().getFullYear();
const yearSpan = document.querySelector('.current-year');
yearSpan.textContent = currentYear;

// highlight active menu item
var currentPage = location.pathname.split('/').pop();
var links = document.querySelectorAll('.first-level a');

for (var i = 0; i < links.length; i++) {
   var link = links[i];
   var href = link.getAttribute('href');
   var page = href.split('/').pop();

   if (page === currentPage) {
      link.parentNode.classList.add('active-link');
      break;
   }
}

// sticky menu
window.addEventListener('scroll', function () {
   if (window.pageYOffset >= 50) {
      // document.querySelector('.menu').classList.add('fixed-menu');
      document.querySelector('.menu').classList.add('opacity-50');
      document.querySelector('.menu-icon').classList.add('fixed-menu');
   } else {
      // document.querySelector('.menu').classList.remove('fixed-menu');
      document.querySelector('.menu').classList.remove('opacity-50');
      document.querySelector('.menu-icon').classList.remove('fixed-menu');
   }

   if (window.pageYOffset >= 90) {
      document.querySelector('.menu').classList.add('opacity-90');
   } else {
      document.querySelector('.menu').classList.remove('opacity-90');
   }

   if (window.pageYOffset >= 100) {
      document.querySelector('.menu').classList.add('fixed-menu');
      document.querySelector('.main-header').classList.add('fixed-menu');
   } else {
      document.querySelector('.menu').classList.remove('fixed-menu');
      document.querySelector('.main-header').classList.remove('fixed-menu');
   }
});

window.addEventListener('scroll', function () {
   console.log(window.scrollY);
});

// положение верхней части экрана
const counterElement = document.querySelector('.counter');
function updateCounter() {
   counterElement.innerHTML = Math.round(window.scrollY) + ' px';
}
updateCounter();
window.addEventListener('scroll', updateCounter);

//----------------------------------------------------------//

// add / delete opacity
// window.addEventListener('scroll', function () {
//    if (window.pageYOffset >= 90) {
//       document.querySelector('.menu').style.opacity = 0;
//    } else {
//       document.querySelector('.menu').style.opacity = 1;
//    }
//    if (window.pageYOffset >= 100) {
//       document.querySelector('.menu').style.opacity = 1;
//    } else {
//       document.querySelector('.menu').style.opacity = 0;
//    }
//    // if (window.pageYOffset < 90) {
//    //    document.querySelector('.menu').style.opacity = 1;
//    // }
// });

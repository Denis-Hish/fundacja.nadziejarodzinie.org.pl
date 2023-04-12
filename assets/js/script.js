// current year for copyright block
const currentYear = new Date().getFullYear();
const yearSpan = document.querySelector('.current-year');
yearSpan.textContent = currentYear;

// menu close on click elsewhere
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

// положение верхней части экрана
// const counterElement = document.querySelector('.counter');
// function updateCounter() {
//    counterElement.innerHTML = Math.round(window.scrollY) + ' px';
// }
// updateCounter();
// window.addEventListener('scroll', updateCounter);

//-------------------------FIXED-MENU------------------------------//

window.addEventListener('scroll', function () {
   const mainHeader = document.querySelector('.main-header');
   const listMenu = document.querySelector('.desktop-nav');
   const logoBig = document.querySelector('.logo-big');
   const logoSmall = document.querySelector('.logo-small');
   const menuIcon = document.querySelector('.menu-icon');
   const mobileNav = document.querySelector('.mobile-nav');
   const scrollPosition = window.pageYOffset;

   if (scrollPosition >= 100) {
      mainHeader.classList.add('main-header-fixed');
      listMenu.classList.add('list-fixed');
      menuIcon.classList.add('menu-icon-fixed');
      mobileNav.classList.add('mobile-nav-fixed');
      logoBig.style.opacity = '0';
      logoSmall.style.opacity = '1';
   } else {
      mainHeader.classList.remove('main-header-fixed');
      listMenu.classList.remove('list-fixed');
      menuIcon.classList.remove('menu-icon-fixed');
      mobileNav.classList.remove('mobile-nav-fixed');
      logoBig.style.opacity = '1';
      logoSmall.style.opacity = '0';
   }
});

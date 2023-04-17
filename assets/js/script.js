AOS.init({
   duration: 1000,
});

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
//----------------------SYMBOLS QUANTITY--------------------------//
// function truncateText(selector) {
//    const symbolsQuantity = 120;

//    const elements = document.querySelectorAll(selector);
//    elements.forEach(element => {
//       const text = element.textContent;
//       if (text.length > symbolsQuantity) {
//          const truncatedText = text.substring(0, symbolsQuantity) + '...';
//          element.textContent = truncatedText;
//       }
//    });
// }

// truncateText('.announcements-container-card-text h4');

//-----------------------TRUNCATE TEXT-----------------------------//
// function truncateOrExpandText() {
//    const elements = document.querySelectorAll(
//       '.announcements-container-card-text h4'
//    );
//    elements.forEach(element => {
//       const maxHeight = parseInt(window.getComputedStyle(element).height);
//       const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
//       const text = element.textContent;
//       let result = text;
//       if (maxHeight < lineHeight * 2) {
//          // Если текст в блоке помещается без обрезки, добавляем оригинальный текст и выходим из функции
//          element.textContent = text;
//          return;
//       }
//       // Иначе начинаем обрезку текста
//       while (element.scrollHeight > maxHeight) {
//          result = result.slice(0, -1);
//          element.textContent = `${result}...`;
//       }
//    });
// }

// window.addEventListener('load', truncateOrExpandText);
// window.addEventListener('resize', truncateOrExpandText);

//----------------------------------------------------------------//

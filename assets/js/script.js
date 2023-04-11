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

//------------------------ menu & logo ----------------------------//
// function onScroll() {
//    const sec = 1.5; // длительность анимации

//    const logoBig = document.querySelector('.logo-big');
//    const logoSmall = document.querySelector('.logo-small');
//    const mainHeader = document.querySelector('.main-header');
//    const menu = document.querySelector('.menu');
//    const isScrollingUp = window.pageYOffset < (onScroll.prevOffset || 0);

//    if (window.pageYOffset >= 100) {
//       logoBig.style.opacity = 0;
//       logoBig.style.transform = 'translateY(-50px)';
//       logoBig.style.transition = '';

//       logoSmall.style.opacity = 1;
//       logoSmall.style.transition = isScrollingUp
//          ? ''
//          : `opacity ${sec}s ease-in-out`;

//       mainHeader.classList.add('fixed-menu');
//       menu.style.transform = 'translateY(-50px)';
//    } else {
//       logoBig.style.opacity = 1;
//       logoBig.style.transform = 'translateY(0)';
//       logoBig.style.transition = isScrollingUp
//          ? `opacity ${sec}s ease-in-out`
//          : '';

//       logoSmall.style.opacity = 0;
//       logoSmall.style.transition = '';

//       mainHeader.classList.remove('fixed-menu');
//       menu.style.transform = 'translateY(0)';
//    }

//    onScroll.prevOffset = window.pageYOffset;
// }

// window.addEventListener('scroll', onScroll);
// onScroll();

//-----------------------ТЕСТИРУЕТСЯ------------------------//
// function onScroll() {
//    const sec = 1.5; // длительность анимации

//    const logoBig = document.querySelector('.logo-big');
//    const logoSmall = document.querySelector('.logo-small');
//    const mainHeader = document.querySelector('.main-header');
//    const menu = document.querySelector('.menu');
//    const isScrollingUp = window.pageYOffset < (onScroll.prevOffset || 0);

//    if (window.pageYOffset >= 100) {
//       logoBig.style.opacity = 0;
//       logoBig.style.transform = 'translateY(-50px)';
//       logoBig.style.transition = '';

//       logoSmall.style.opacity = 1;
//       logoSmall.style.transition = isScrollingUp
//          ? ''
//          : `opacity ${sec}s ease-in-out`;

//       mainHeader.classList.add('fixed-menu');

//       if (window.pageYOffset >= 90) {
//          menu.style.opacity = 0;
//          menu.style.transition = `opacity ${sec}s ease-in-out`;
//       } else {
//          menu.style.opacity = 1;
//          menu.style.transition = `opacity ${sec}s ease-in-out`;
//       }
//    } else {
//       logoBig.style.opacity = 1;
//       logoBig.style.transform = 'translateY(0)';
//       logoBig.style.transition = isScrollingUp
//          ? `opacity ${sec}s ease-in-out`
//          : '';

//       logoSmall.style.opacity = 0;
//       logoSmall.style.transition = '';

//       mainHeader.classList.remove('fixed-menu');

//       if (window.pageYOffset >= 90) {
//          menu.style.opacity = 0;
//          menu.style.transition = `opacity ${sec}s ease-in-out`;
//       } else {
//          menu.style.opacity = 1;
//          menu.style.transition = `opacity ${sec}s ease-in-out`;
//       }
//    }

//    onScroll.prevOffset = window.pageYOffset;
// }

// window.addEventListener('scroll', onScroll);
// onScroll();

//----------------------------------------------------------//

// function onScroll() {
//    const sec = 2.5; // длительность анимации

//    const logoBig = document.querySelector('.logo-big');
//    const logoSmall = document.querySelector('.logo-small');
//    const mainHeader = document.querySelector('.main-header');
//    const menu = document.querySelector('.menu');
//    const isScrollingUp = window.pageYOffset < (onScroll.prevOffset || 0);
//    console.log(isScrollingUp);

//    if (window.pageYOffset >= 100) {
//       logoBig.style.transform = 'translateY(-50px)';
//       logoBig.style.opacity = 0;
//       logoBig.style.transition = '';

//       logoSmall.style.opacity = 1;
//       logoSmall.style.transition = isScrollingUp
//          ? ''
//          : `opacity ${sec}s ease-in-out`;

//       mainHeader.classList.add('fixed-menu');
//       menu.style.transform = 'translateY(-50px)';
//    } else {
//       logoBig.style.transform = 'translateY(0)';
//       logoBig.style.opacity = 1;
//       logoBig.style.transition = isScrollingUp
//          ? `opacity ${sec}s ease-in-out`
//          : '';

//       logoSmall.style.opacity = 0;
//       logoSmall.style.transition = '';

//       mainHeader.classList.remove('fixed-menu');
//       menu.style.transform = 'translateY(0)';
//    }

//    //------------------------------------------//
//    // if (window.pageYOffset >= 90 && window.pageYOffset < 100) {
//    //    menu.style.opacity = 0;
//    //    // menu.style.transition = `opacity ${sec}s ease-in-out`;
//    // } else {
//    //    menu.style.opacity = 1;
//    // }
//    // if (window.pageYOffset >= 0 && window.pageYOffset < 90) {
//    //    menu.style.transform = 'translateY(0)';
//    //    menu.style.opacity = 1;
//    //    // menu.style.transition = ``;
//    // } else if (window.pageYOffset >= 90 && window.pageYOffset < 100) {
//    //    menu.style.transform = 'translateY(0)';
//    //    menu.style.opacity = 0;
//    //    // menu.style.transition = isScrollingUp // ↓
//    //    //    ? ''
//    //    //    : `opacity ${sec}s ease-in-out`;
//    // } else if (window.pageYOffset >= 90) {
//    //    menu.style.transition = `opacity ${sec}s ease-in-out`;
//    // } else if (window.pageYOffset >= 100) {
//    //    menu.style.transform = 'translateY(-50px)';
//    //    menu.style.opacity = 1;

//    //    // menu.style.transition = isScrollingUp // ↓
//    //    //    ? ''
//    //    //    : `opacity ${sec}s ease-in-out`;

//    //    // menu.style.transition = isScrollingUp //  ↑
//    //    //    ? `opacity ${sec}s ease-in-out`
//    //    //    : '';

//    //    // menu.style.transition = `opacity ${sec}s ease-in-out`;
//    // }
//    //------------------------------------------//

//    onScroll.prevOffset = window.pageYOffset;
// }

// window.addEventListener('scroll', onScroll);
// onScroll();

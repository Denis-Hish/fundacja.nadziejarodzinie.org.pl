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
   const header = document.querySelector('.main-header');
   const menu = document.querySelector('.menu');
   const menuIcon = this.document.querySelector('.menu-icon');

   if (window.pageYOffset > 50) {
      menu.classList.add('fixed-menu');
      menuIcon.classList.add('fixed-menu');
   } else {
      menu.classList.remove('fixed-menu');
      menuIcon.classList.remove('fixed-menu');
   }

   if (window.pageYOffset > 100) {
      header.classList.add('fixed-menu');
   } else {
      header.classList.remove('fixed-menu');
   }
});

window.addEventListener('scroll', function () {
   console.log(window.scrollY);
});

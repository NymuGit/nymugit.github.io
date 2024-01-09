// Brought to you by Anonym2Name
let HTML = document.getElementsByTagName('html')[0];
let KepalaHTML = document.getElementsByTagName('head')[0];
let TubuhHTML = document.getElementsByTagName('body')[0];
let UrlData = location.pathname;
let Bahasa = navigator.language;
let NymuApp = document.querySelector('#NymuStatic');

// Elemen NymuApp dsj.
let Header = document.createElement('header');
let Navbar = document.createElement('nav');
let Artikel = document.createElement('article');
let JendelaSamping = document.createElement('aside');
let Footer = document.createElement('footer');

Header.setAttribute('class', 'col-xl-12 mb-2 rounded-3');
Navbar.setAttribute('class', 'col-xl-12 mb-2 rounded-3');
Artikel.setAttribute('class', 'col-xl-7 mx-auto mb-2 rounded-3');
JendelaSamping.setAttribute('class', 'col-xl-4 mx-auto mb-2 rounded-3');
Footer.setAttribute('class', 'col-lg-5 mx-auto rounded-3 text-center');

Header.style.background = 'var(--bs-primary)';
Navbar.style.background = 'var(--bs-secondary)';
Artikel.style.background = 'var(--bs-orange)';
JendelaSamping.style.background = 'var(--bs-yellow)';
Footer.style.background = 'var(--bs-green)';

// Jangan lupa ekspor!
export {
  HTML, KepalaHTML, TubuhHTML, 
  UrlData, Bahasa, NymuApp,
  Header, Navbar, Artikel, JendelaSamping, Footer
};
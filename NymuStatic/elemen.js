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

Header.setAttribute('class', 'col-12 mb-2');
Navbar.setAttribute('class', 'col-12 mb-2');
Artikel.setAttribute('class', 'col-7 mx-auto');
JendelaSamping.setAttribute('class', 'col-4 mx-auto');
Footer.setAttribute('class', 'col-5 mt-2 mx-auto');

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
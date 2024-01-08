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
Header.setAttribute('class', 'col-12');
Navbar.setAttribute('class', 'col-12');
Artikel.setAttribute('class', 'col-7');
JendelaSamping.setAttribute('class', 'col-5');
Footer.setAttribute('class', 'col-5');

// Jangan lupa ekspor!
export {
  HTML, KepalaHTML, TubuhHTML, 
  UrlData, Bahasa, NymuApp,
  Header, Navbar, Artikel, JendelaSamping, Footer
};
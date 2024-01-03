// Brought to you by Anonym2Name
let HTML = document.getElementsByTagName('html')[0];
let KepalaHTML = document.getElementsByTagName('head')[0];
let TubuhHTML = document.getElementsByTagName('body')[0];
let UrlData = location.pathname;
let Bahasa = navigator.language;
let NymuApp = document.querySelector('#NymuStatic');

// Elemen NymuApp dsj.


// Jangan lupa ekspor!
export {
  HTML, KepalaHTML, TubuhHTML, 
  UrlData, Bahasa, NymuApp
};
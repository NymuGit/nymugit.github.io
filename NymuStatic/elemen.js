// Brought to you by Anonym2Name
let KepalaHTML = document.getElementsByTagName('head')[0];
let TubuhHTML = document.getElementsByTagName('body')[0];
let UrlData = location.pathname;
let Bahasa = navigator.language;

// Jangan lupa ekspor!
export {
  KepalaHTML, TubuhHTML, 
  UrlData, Bahasa
};
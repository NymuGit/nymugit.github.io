// Brought to you by Anonym2Name
let KepalaHTML = document.getElementsByTagName('head')[0];
let TubuhHTML = document.getElementsByTagName('body')[0];
let UrlData = window.location.pathname;
let Debugger = '<script>eruda.init();</script>';

// Jangan lupa ekspor!
export {
  KepalaHTML, TubuhHTML, 
  UrlData, Debugger
};
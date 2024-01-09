// Brought to you by Anonym2Name
export let DeteksiUrl = (
  name, language, uniqueID, 
  a1, a2, a3, a4, a5, 
  txt1, txt2
) => {
  if (name == '/beranda.htm' && language == 'en-US') {
    uniqueID.append(a1, a2, a3, a4, a5);
    a1.innerHTML = txt1;
    a2.innerHTML = txt1;
    a3.innerHTML = txt1;
    a4.innerHTML = txt1;
    a5.innerHTML = txt2;
  }
};
export let TemaHTML = (hours, minutes, tags) => {
  console.log(hours + ':' + minutes);
  if (hours >= 7) tags.setAttribute('data-bs-theme', 'light');
  if (hours >= 18 || hours <= 7) tags.setAttribute('data-bs-theme', 'dark');
};
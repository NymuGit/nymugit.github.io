// Brought to you by Anonym2Name
export let DeteksiUrl = (name, language, uniqueID, a1, a2, a3, a4, a5) => {
  if (name == '/beranda.htm' && language == 'en-US') {
    uniqueID.append(a1, a2, a3, a4, a5);
  }
};
export let TemaHTML = (hours, minutes, tags) => {
  if (hours >= 7 && minutes >= 30 || hours >= 7) tags.setAttribute('data-bs-theme', 'light');
  if (hours >= 18 && minutes >= 15 || hours >= 18) tags.setAttribute('data-bs-theme', 'dark');
};
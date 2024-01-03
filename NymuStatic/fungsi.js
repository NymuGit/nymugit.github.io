// Brought to you by Anonym2Name
export let DeteksiUrl = (name, language, uniqueID) => {
  if (name == '/beranda.htm' && language == 'en-US') {
    uniqueID;
  }
};
export let TemaHTML = (hours, minutes, tags) => {
  if (hours >= 7 && minutes >= 30 || hours >= 7) tags.setAttribute('data-bs-theme', 'light');
  if (hours >= 18 && minutes >= 15 || hours >= 18) tags.setAttribute('data-bs-theme', 'dark');
};
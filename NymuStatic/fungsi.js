// Brought to you by Anonym2Name
export var DeteksiUrl = (name, language) => {
  if (name == '/beranda.htm' && language == 'en-US') window.location.replace('/beranda.htm?en');
};
export var TampilanHTML = (name, uniqueID) => {
  if (name == '/beranda.htm?en') uniqueID.innerHTML = '<p>' + 'Hello guys!' + '</p>';
};
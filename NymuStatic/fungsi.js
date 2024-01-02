// Brought to you by Anonym2Name
export var DeteksiUrl = (name, language) => {
  if (name == '/beranda.htm' && language == 'en-US') window.location.replace('/404');
};
export var TampilanHTML = (name, uniqueID) => {
  if (name == '/beranda.htm?en') uniqueID.innerHTML = '<p>' + 'Hello guys!' + '</p>';
};
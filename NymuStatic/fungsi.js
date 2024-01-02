// Brought to you by Anonym2Name
export var DeteksiUrl = (name, language, uniqueID) => {
  if (language == 'en' && name == '/beranda.htm' || language == 'en') location.assign('/beranda.htm?en');
  if (language == 'id' && name == '/beranda.htm' || language == 'id') location.assign('/beranda.htm?id');
};
// Brought to you by Anonym2Name
export var DeteksiUrl = (name, language, uniqueID) => {
  if (language == 'en' && name == '/beranda.htm' || language == 'en') {
    console.log('English!');
    location.assign('/beranda.htm?en');
  }
  if (language == 'id' && name == '/beranda.htm' || language == 'id') {
    console.log('Indonesia!');
    location.assign('/beranda.htm?id');
  }
};
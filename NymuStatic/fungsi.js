// Brought to you by Anonym2Name
export var DeteksiUrl = (name, language, uniqueID) => {
  if (name == '/beranda.htm?id' && language == 'id') console.log('Bahasa Indo!');
  else if (name == '/beranda.htm') confirm('Choose a language \n    Pilih bahasa');
};
// Brought to you by Anonym2Name
import {
  Nymu_Icon_alt
} from './teks.js';
import {
  HTML, KepalaHTML, TubuhHTML,
  UrlData, Bahasa, NymuApp,
  Header, Navbar, Artikel, JendelaSamping, Footer
} from './elemen.js';
import {
  Kalendar, Jam, Menit, Detik
} from './waktu.js';
import * as Fx from './fungsi.js';
// endof !import

// Jalanin fungsi yang sudah diekspor
Nymu_Icon_alt;
HTML, KepalaHTML, TubuhHTML;
UrlData, Bahasa, NymuApp;
Kalendar, Jam, Menit, Detik;
Header, Navbar, Artikel, JendelaSamping, Footer;

Fx.DeteksiUrl(
  UrlData, Bahasa, NymuApp,
  Header, Navbar, Artikel, JendelaSamping, Footer,
  Nymu_Icon_alt
);
setTimeout(Fx.TemaHTML(Jam, Menit, HTML), 1000);
// Brought to you by Anonym2Name
import {
  HTML, KepalaHTML, TubuhHTML,
  UrlData, Bahasa, NymuApp,
  Header, Navbar, Artikel, JendelaSamping, Footer
} from './elemen.js';
import {
  Kalendar, Jam, Menit, Detik
} from './waktu.js';
import {
  Nymu_Icon_alt,
  Footer_content
} from './teks.js';
import * as Fx from './fungsi.js';
// endof !import

// HTML, KepalaHTML, TubuhHTML;
// UrlData, Bahasa, NymuApp;
// Kalendar, Jam, Menit, Detik;
// Header, Navbar, Artikel, JendelaSamping, Footer;
// Nymu_Icon_alt, Footer_content;
// 
// Jalanin fungsi yang sudah diekspor
Fx.DeteksiUrl(
  UrlData, Bahasa, NymuApp,
  Header, Navbar, Artikel, JendelaSamping, Footer,
  Nymu_Icon_alt, Footer_content
);
setTimeout(Fx.TemaHTML(Jam, Menit, HTML), 1000);
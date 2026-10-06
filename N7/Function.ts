/*
VueNm
v1.46a
NamaMu Dania
*/

import { onMounted, type Ref, ref } from "vue"
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from "vue-router"
import DOMPurify from "dompurify" 
import Src from "./Sources"

export const DateBackground = () => {
  // Note: Karena ada onMounted(), jadi pasangnya di .vue yang ada setupnya ya ...oke?
  onMounted(() => {
    const Today = new Date()
    const Day = Today.getDate()
    const Month = Today.getMonth() + 1
    const IsDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    // Dapetin nilai background baik terang maupun gelap
    const GetBg = (IsDark: boolean) => {
      let Bg = IsDark ? Src.Nm_Bg_Dark : Src.Nm_Bg_Light
      switch(Month) {
        case 1:
          if (Day >= 1 && Day <= 3)
          Bg = IsDark ? Src.Lutfia_11 : Src.Lutfia_12
          break
        case 3:
          if (Day >= 1 && Day <= 5)
          Bg = IsDark ? Src.FirAmelia_2 : Src.FirAmelia_6
          break
        case 5:
          if (Day >= 1 && Day <= 16)
          Bg = IsDark ? Src.LordDikz_1 : Src.LordDikz_3
          else if (Day >= 17 && Day <= 23)
          Bg = IsDark ? Src.Ahmedeeya_16 : Src.Ahmedeeya_14
          break
        case 6:
          if (Day >= 1 && Day <= 2)
          Bg = IsDark ? Src.Myunica_1 : Src.Myunica_1
          break
        case 8:
          if (Day >= 1 && Day <= 19)
          Bg = IsDark ? Src.Lyra_1 : Src.Lyra_2
          break
        case 10:
          if (Day >= 1 && Day <= 17)
          Bg = IsDark ? Src.Afiva_1 : Src.Afiva_2
          else if (Day >= 18 && Day <= 24)
          Bg = IsDark ? Src.Pellownie_1 : Src.Pellownie_1
          break
        case 11:
          if (Day >= 1 && Day <= 17)
          Bg = IsDark ? Src.AtminNovyA_6 : Src.AtminNovyA_8
          break
      }
      /* Uncomment salah satu di bawah ini: */
      return Bg // buat public
      // return Bg = IsDark ? Src.Lutfia_11 : Src.AtminNovyA_8 // buat testing
    }

    // Elemen overlay buat efek fade/blur
    const Overlay: HTMLElement | any = document.getElementById('ovly')
    Overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0; 
      width: 100%;
      height: 100%;
      pointer-events: none; 
      transition: opacity 1s ease, backdrop-filter 1s ease;
      z-index: -7;
      opacity: 0;
    `
    // Fungsi buat aplikasiin backgroundnya
    const ApplyBg = (Url: string) => {
      // Transisi yang smooth
      Overlay.style.opacity = '0'
      setTimeout(() => {
        Overlay.style.backgroundImage = `url('${Url}')`
        Overlay.style.opacity = '0.7'
      }, 600)
    }

    // Set awal
    Overlay.style.cssText += `
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `
    ApplyBg(GetBg(IsDark))

    // Ganti kalo tema berubah ... kayak dia ke aku :(
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      ApplyBg(GetBg(e.matches))
    })
  })
}

export const RenderMd = (s: undefined | object[] | string, Md: any): string => {
  if (!s) return ''
  return Md.render(s)
}
export const RenderMd_Sanitized = (s: undefined | object[] | string, Md: any): string => {
  if (!s) return ''
  const Raw = Md.render(s)
  return DOMPurify.sanitize(Raw)
}
export const RandomPick_Quote = (qts: object[], curqt: Ref<object | null>) => {
  if (!qts || qts.length === 0) return
  const RandomIndex = Math.floor(Math.random() * qts.length)
  curqt.value = qts[RandomIndex]
}

// Fungsi alih dua bahasa lho ya >_<
export const SwitchLang = (Text1: undefined | object[] | string, Text2: undefined | object[] | string) => {
  let Language = ref(navigator.language)
  switch(Language.value) {
    // Bahasa Indo
    case ('id-ID'):
      return Text2
    break
    // English language
    case ('en-US'):
      return Text1
    break
    case ('en-ID'):
      return Text1
    break
    // Default
    default:
      return Text1
  }
}
export const SwitchRoute = (Route1: RouteLocationAsPathGeneric | RouteLocationAsRelativeGeneric | string, Route2: RouteLocationAsPathGeneric | RouteLocationAsRelativeGeneric | string) => {
  let Language = ref(navigator.language)
  switch(Language.value) {
    // Bahasa Indo
    case ('id-ID'):
      return Route2
    break
    // English language
    case ('en-US'):
      return Route1
    break
    case ('en-ID'):
      return Route1
    break
    // Default
    default:
      return Route1
  }
}

// Setup kecil buat data ultah :)
export interface BestDay {
  kode: string
  bulan: number | string
  sandi: string
  judul: string
  penerima: string
  pesan: string
  musik?: string
  gambar?: string[]
}
export const BukaSuratnya = (Isi: any, Sandi: any, Terbuka: any, Error: any, PesanError: string | object[] | undefined) => {
  if (!Isi.value) return
  if (Sandi.value === Isi.value.sandi) {
    Terbuka.value = true
    if (Isi.value.musik) {
      const audio = new Audio(Isi.value.musik)
      audio.volume = 0.
      audio.play()
    }
    Error.value = ''
  } else {
    Error.value = PesanError
  }
}
export const UrDay_Name = (Nama: string) => {
  let Panggilan: string = ''
  switch(Nama) {
    // Buat abang2an / my murid
    case ('Ahmedeeya'):
      Panggilan = 'my dev ⬛'
      break
    case ('Tante Sasaa'):
      Panggilan = 'my tante 💕'
    // Somebody's special ...
    case ('MeNymukanmu'):
      Panggilan = 'my Nymu 💚'
      break
    case ('NovyA'):
      Panggilan = 'my 1st murid kesayangan 💕'
      break
    case ('Fira Lutfia'):
      Panggilan = 'my 1st bini 🖤'
      break
    case ('ChocoPie'):
      Panggilan = 'my concrete angel 🤍'
      break
    case ('Safir'):
      Panggilan = 'my 1st crush 😊'
      break
    case ('Afiva'):
      Panggilan = 'my dede 🫶🏽'
      break
    case ('Lyra'):
      Panggilan = 'my princess ✨'
      break
    case ('Nica M3A'):
      Panggilan = 'my bestie 😌'
      break
    case ('Yunica M3A'):
      Panggilan = 'my murid 🫰🏽'
      break
    case ('Author Kimpu1'):
      Panggilan = 'my mia 🩵'
      break
    case ('Lord Dikz'):
      Panggilan = 'my murid 😏'
      break
    // Default— biar keliatan kerja mwehehe
    default:
      Panggilan = 'my ... '
  }
  return Panggilan
}

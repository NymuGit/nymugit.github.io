/*
VueNymu
v1.30
Nymu Ahmedeeya
*/

import { onMounted, type Ref, ref } from "vue"
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from "vue-router"
import MarkdownIt from "markdown-it"
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
      let Bg = ''
      switch(Month) {
        case 1:
          if (Day >= 1 && Day <= 3)
          Bg = IsDark ? Src.Lutfia_2 : Src.Lutfia_1
          break
        case 10:
          if (Day >= 1 && Day <= 22)
          Bg = IsDark ? Src.Nymu_Bg_Dark : Src.Nymu_Bg_Light
          break
      }

      // Kalo masih belum cocok
      return Bg || IsDark ? Src.Nymu_Bg_Dark : Src.Nymu_Bg_Light
      // return Bg
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
        Overlay.style.opacity = '0.5'
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

export const RenderMd = (s: string, Md: any): string => {
  if (!s) return ''
  return Md.render(s)
}
export const RenderMd_Sanitized = (s: string, Md: any): string => {
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
export const SwitchLang = (Text1: object[] | string, Text2: object[] | string) => {
  let Language = ref(navigator.language)
  return (Language.value === 'id') ? Text2 : Text1
}
export const SwitchRoute = (Route1: RouteLocationAsPathGeneric | RouteLocationAsRelativeGeneric | string, Route2: RouteLocationAsPathGeneric | RouteLocationAsRelativeGeneric | string) => {
  let Language = ref(navigator.language)
  return (Language.value === 'id') ? Route2 : Route1
}

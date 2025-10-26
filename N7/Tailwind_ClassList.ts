/*
VueNymu
v1.30
Nymu Ahmedeeya
*/

// Impor sumber dulu
import Src from '@/Sources'

// Kasih alias
const Img7 = Src

/*
Aturan nulis kelas:
Untuk kelas Tailwind, ada dua:
1. const KelasIni = `w-full h-full `
2. const Class = {
    KelasIni: {
      DalamKelasIni: `w-full h-full ` +
        'text-center ',
    },
  }

Note: Jangan lupa tambahkan spasi di ujung, karna valuenya akan bertabrakan jika gaada spasi di ujung (kelasnya gak bisa dipake)
*/

// Prefix font semua ukuran layar
const FontAIO = `xs:text-2 sm:text-3 md:text-4 lg:text-6 xl:text-8 2xl:text-10 3xl:text-12 `

const Class = {
  NotFound: {
    H1: 'text-red-500 ',
  },
  Layout: {
    MainWrapper: 'w-full h-full p-0 ' +
      'bg-scroll ' +
      'overflow-hidden scrollbar-hide ',
    Wrapper1: 'w-full h-full mx-auto p-3 ' +
      'grid grid-cols-5 gap-3 content-end place-content-around ' +
      'overflow-hidden scrollbar-hide ' +
      'lg:grid-cols-7 lg:gap-5 lg:p-5 ' +
      'xl:grid-cols-9 xl:gap-7 xl:p-7 ' +
      '2xl:grid-cols-11 2xl:gap-9 2xl:p-9 ' +
      '3xl:w-4/5 ' +
      '4xl:w-3/4 ',
    Wrapper2: 'w-full h-full p-3 ' +
      'grid grid-cols-5 gap-3 content-end place-content-around ' +
      'overflow-hidden scrollbar-hide ' +
      'md:hidden ',
    Header: 'w-full h-full p-3 ' +
      'grid col-span-5 grid-cols-5 gap-x-3 ' + 
      'backdrop-blur-md bg-white/30 border-2 border-white ' +
      'rounded-xl ' +
      'sm:grid-cols-7 ' +
      'md:w-auto md:grid-cols-1 md:col-span-1 md:rounded-4xl ' +
      'lg:p-3 ' +
      'xl:p-3 ' +
      '2xl:p-3 ' +
      `${FontAIO}`,
    Dark_Header: 'dark:bg-black/30 ',
    NavD: 'w-full h-full hidden ' +
      'grid-flow-row-dense grid-cols-1 content-end  ' +
      'rounded-xl ' +
      'overflow-y-hidden ' +
      'sm:gap-0 ' +
      'md:w-auto md:grid md:grid-cols-3 md:col-span-4 md:gap-3 ' +
      'lg:w-auto lg:grid-cols-5 lg:col-span-6 lg:gap-5 ' +
      'xl:w-auto xl:grid-cols-7 xl:col-span-8 xl:gap-7 ' +
      '2xl:w-auto 2xl:grid-cols-9 2xl:col-span-10 2xl:gap-9 ' +
      `${FontAIO}`,
    Article: 'w-full max-h-[67vh] p-3 ' +
      'grid col-span-5 gap-4 content-start ' + 
      'backdrop-blur-md bg-white/30 border-2 border-white ' +
      'overflow-scroll rounded-xl scrollbar-hide ' +
      'transition-all duration-300 ' +
      'md:rounded-4xl ' +
      'lg:p-5 ' +
      'xl:col-span-6 xl:p-7 ' +
      '2xl:col-span-7 xl:p-9 ' +
      `${FontAIO}`,
    Dark_Article: 'dark:bg-black/30 ' +
      'dark:text-white ',
    Aside: 'w-full max-h-[67vh] hidden p-3 ' +
      'gap-4 content-start ' + 
      'backdrop-blur-md bg-white/30 border-2 border-white ' +
      'overflow-scroll rounded-xl scrollbar-hide ' +
      'transition-all duration-300 ' +
      'md:rounded-4xl ' +
      'lg:grid lg:col-span-2 lg:p-5 ' +
      'xl:col-span-3 xl:p-7 ' +
      '2xl:col-span-4 2xl:p-9 ' +
      `${FontAIO}`,
    Dark_Aside: 'dark:bg-black/30 ' +
      'dark:text-white ',
    Logo: 'w-auto h-auto ',
  },
  NavD: {
    Button1: 'w-full h-full scale-100 px-4 py-2 ' +
      'col-span-1 ' +
      'backdrop-blur-md bg-white/30 ' +
      'text-center font-nymu ' +
      'hover:bg-rose-700/30 hover:scale-90 ' +
      'active:scale-100 ' +
      'transition-all ' +
      'md:rounded-xl ' +
      'lg:rounded-4xl ',
    Dark_Button1: 'dark:bg-black/30 ' +
      'dark:text-white ',
    Button2: 'w-full h-full scale-100 px-4 py-2 ' +
      'col-span-2 ' +
      'backdrop-blur-md bg-white/30 ' +
      'text-center font-nymu ' +
      'hover:bg-rose-700/30 hover:scale-95 ' +
      'active:scale-100 ' +
      'transition-all ' +
      'md:rounded-xl ' +
      'lg:rounded-4xl ',
    Dark_Button2: 'dark:bg-black/30 ' +
      'dark:text-white ',
  },
  NavM: {
    Button1: 'w-full h-auto p-3 ' +
      'grid col-start-5 ' +
      'text-black rounded-xl ' +
      'text-center font-nymu ' +
      'hover:bg-rose-500/30 hover:scale-95 hover:outline-2 hover:outline-rose-300 ' +
      'active:scale-105 ' +
      'transition-all ' +
      'sm:col-start-7 ',
    Dark_Button1: 'dark:text-white ',
    Button2: 'w-full h-auto p-0 ' +
      'grid col-start-5 ' +
      'text-black rounded-xl ' +
      'text-center font-nymu ' +
      'hover:bg-rose-500/30 hover:scale-95 ' +
      'active:scale-105 ' +
      'transition-all ' +
      'sm:col-start-7 ' +
      'md:hidden ',
    Dark_Button2: 'dark:text-white ',
  },
  About: 'grid gap-3 ' +
    'lg:gap-5 ' +
    'xl:grid-flow-col xl:gap-7 ' +
    '2xl:gap-9 ',
  Modal: {
    Div1: 'fixed h-full ' +
      'inset-0 flex items-center justify-center z-50 ' +
      'bg-white/30 backdrop-blur-md ' +
      `${FontAIO}`,
    Dark_Div1: 'dark:bg-black/30 ',
    Div2: 'w-full max-w-sm m-3 p-3 ' +
      'bg-transparent border-4 border-white shadow-2xl ' +
      'rounded-xl ' +
      'overflow-y-scroll scrollbar-hide ',
    Button1: 'px-4 py-2 ' +
      'backdrop-blur-md bg-white/30 ' +
      'rounded-xl ' +
      'hover:bg-rose-500/30 hover:outline-2 hover:outline-rose-300 hover:scale-95 ' +
      'active:scale-105 ' +
      'transition-all ' +
      'text-black font-nymu ',
    Dark_Button1: 'dark:bg-black/30 ' +
      'dark:text-white ',
  },
  Quotes: {
    Section1: 'max-w-3xl mx-auto p-5 ' +
      'text-center ',
    Header2: 'mb-4 ',
    Div1: 'p-5 ' +
      'bg-white/5 ' +
      'rounded-xl ' +
      'transition-all duration-700 ease-in-out ',
    Div2: 'mb-2 prose prose-sm ',
    Div3: 'opacity-60 ' +
      'text-sm text-right ',
    Div4: 'mt-6 ' +
      'opacity-80 ' +
      'text-center ',
    Hidden_Lg: 'lg:hidden ',
  },
  Updates: {
    Ul: 'ml-6 list-disc ',
  },
  BioCard: {
    Div1: 'w-full h-auto p-3 ' +
      'grid grid-cols-12 gap-3 ' +
      'backdrop-blur-md ' +
      'rounded-2xl ' +
      'sm:grid-cols-12 ' +
      'lg:p-5 lg:gap-5' +
      'xl:p-7 xl:gap-7 ' +
      '2xl:max-w-[1/2] ' +
      '3xl:max-w-[1/3] ' +
      `${FontAIO}`,
    Img: 'w-full h-86 ' +
      'object-cover object-top ' +
      'col-span-12 row-span-1 ' +
      'bg-white ' +
      'rounded-2xl ' +
      'sm:h-56 sm:col-span-4 ',
    Div2: 'w-full ' +
      'flex flex-col col-span-12 gap-3 ' +
      'sm:col-span-8 ',
    Div3: 'w-full ' +
      'grid grid-flow-row grid-cols-12 col-span-12 ',
    H3: 'bg-transparent ',
    I: 'bg-transparent ',
    ColSpan1: 'col-span-3 ',
    ColSpan2: 'col-span-6 ',
    ColSpan3: 'col-span-9 ',
    ColSpan4: 'col-span-12 ',
  },
}
export default Class

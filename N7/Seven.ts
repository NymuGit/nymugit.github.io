/*
VueNm
v1.33
NamaMu Ahmedeeya
*/

import {createApp} from 'vue'
import App from '@/App.vue'
import '@/Styles/Seven.css'
import {createPinia} from 'pinia'
import {createRouter,createWebHistory,type RouteRecordRaw} from 'vue-router'

// Rute
import NotFound from '@/NotFound.vue' 
import Home from '@/Routes/Home.vue'
import About from '@/Routes/About.vue'
import Salawat from '@/Routes/Salawat.vue'
import Slwt from './Routes/Salawat/Slwt.vue' 

// Rute juga (khusus sidebar)
import Quotes from '@/Reuse/Quotes.vue'
import Updates from '@/Reuse/Updates.vue'

// Rute spesial Sholawatan
import Khabbiri from '@/Routes/Salawat/Sekumpul/Khabbiri.vue'

const Routes: RouteRecordRaw[] = [
  {path: '/', components: {default: Home, SideBar: Quotes}, name: 'Home'},
  {path: '/about', components: {default: About, SideBar: Quotes}, name: 'About Us'},
  {path: '/salawat', components: {default: Salawat, SideBar: Quotes}, name: 'Any Salawat'},
  {path: '/sekumpul', components: {default: Slwt, SideBar: Quotes}, children: [{path: 'khabbiri', component: Khabbiri}], name: 'Sekumpul: Khabbiri'},
  // Di bawah ini khusus redirect halaman bahasa Indo
  {path: '/', components: {default: Home, SideBar: Quotes}, name: 'Beranda'},
  {path: '/bersama', components: {default: About, SideBar: Quotes}, name: 'Tentang Kami'},
  {path: '/sholawat', components: {default: Salawat, SideBar: Quotes}, name: 'Serba Sholawat'},
  // Khusus 404
  {path: '/:pathMatch(.*)', components: {default: NotFound, SideBar: Quotes}, name: '404?'},
]
const Router = createRouter({
  history: createWebHistory(),
  routes: Routes,
})

const NymuApp = createApp(App)
NymuApp.use(createPinia())
NymuApp.use(Router)
NymuApp.mount('#n7')

// Langkah tambahan (ya kalo bisa)
export {Routes}

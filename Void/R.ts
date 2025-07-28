/*
Void(Ramadhan)
v0.13a
Nymu x Lysh
*/

import {createApp} from 'vue'
import App from '@/App.vue'
import '@/Styles/Tailwind.css'
import '@/Styles/R.css'
import {createPinia} from 'pinia'
import {createRouter,createWebHashHistory,type RouteRecordRaw} from 'vue-router'

// Rute skena
import MainMenu from '@/Routes/MainMenu.vue'
import DevIntro from '@/Routes/DevIntro.vue'

const Routes: RouteRecordRaw[] = [
  {path: '/', component: DevIntro, name: 'DevIntro'},
  {path: '/main', component: MainMenu, name: 'MainMenu'},
]
const Router = createRouter({
  history: createWebHashHistory(),
  routes: Routes,
})

const VoidApp = createApp(App)
VoidApp.use(createPinia())
VoidApp.use(Router)
VoidApp.mount('#VoidR')

<!--
VueNymu
v1.30
Nymu Ahmedeeya
-->

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { RouterView } from 'vue-router'
import { Bars3BottomRightIcon } from '@heroicons/vue/16/solid'
import Nav from '@/Layouts/Nav.vue'
import Modal from '@/Reuse/Modal.vue'
import Quotes from '@/Reuse/Quotes.vue' 
import Class from '@/Tailwind_ClassList' 
import Src from '@/Sources'

// Buat alias dulu
const Cls7 = Class
const Img7 = Src
const AnimLoopAll = 'anim-loop-all '

// Setup modal nav mobile
let IsOpen = ref(false)

// Deteksi kehytaman pake ini
const IsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
</script>

<template>
  <div id="mainwrap" :class="Cls7.Layout.MainWrapper">
    <div :class="AnimLoopAll + Cls7.Layout.Wrapper1">
      <!-- Bagian paling atas -->
      <header :class="Cls7.Layout.Header + Cls7.Layout.Dark_Header">
        <img :class="Cls7.Layout.Logo" :src="IsDark ? Img7.Nymu_Logo : Img7.Nymu_Logo_Plain" />
        <!-- Tombol buat buka menu Navbar hape -->
        <button @click="IsOpen = true" :class="Cls7.NavM.Button2 + Cls7.NavM.Dark_Button2">
          <Bars3BottomRightIcon />
        </button>
      </header>
      <!-- Khusus desktop -->
      <nav id="desktop" :class="Cls7.Layout.NavD"><Nav :btn1="Cls7.NavD.Button1 + Cls7.NavD.Dark_Button1" :btn2="Cls7.NavD.Button2 + Cls7.NavD.Dark_Button2" @CloseIt="IsOpen = false" /></nav>
      <!-- Konten utama situs web -->
      <article :class="Cls7.Layout.Article + Cls7.Layout.Dark_Article">
        <RouterView #="{Component}">
          <Transition name="fade" mode="out-in" appear>
            <Component :is="Component" />
          </Transition>
        </RouterView>
      </article>
      <!-- Hanya ada di versi desktop -->
      <aside :class="Cls7.Layout.Aside + Cls7.Layout.Dark_Aside">
        <RouterView name="SideBar" #="{Component}">
          <Transition name="slidinup" mode="out-in" appear>
            <Component :is="Component" />
          </Transition>
        </RouterView>
      </aside>
    </div>
    <div :class="Cls7.Layout.Wrapper2">
      <!-- Navbar khusus hape -->
      <Modal v-model="IsOpen">
        <Nav :btn1="Cls7.NavM.Button1 + Cls7.NavM.Dark_Button1" :btn2="Cls7.NavM.Button1 + Cls7.NavM.Dark_Button1" @CloseIt="IsOpen = false" />
      </Modal>
    </div>
  </div>
</template>

<!--
VueNm
v1.46
NamaMu Dania
-->

<script setup lang="ts">
import { ref } from "vue"
import { RouterLink, useRoute } from 'vue-router'
import { SwitchLang, SwitchRoute } from '@/Function'

// Testing pake defineProps
defineProps<{btn1: string, btn2: string, onCloseIt: any}>()

// Setup rute, biar bisa dideteksi sama v-if / v-show
const Rt = useRoute()
const HomeMenu = '/'
const AboutMenu = ['/about', '/bersama']
const SalawatMenu = ['/salawat', '/sholawat']
const BirthDMenu = ['/bestday', '/ultah']

// Setup bulan ultah
const BulanUltah = new Date().getMonth() + 1
</script>

<template>
  <RouterLink v-show="!HomeMenu.includes(Rt.path)" to="/" @click="onCloseIt" :class="btn1">{{ SwitchLang('Home', 'Beranda') }}</RouterLink>
  <RouterLink v-show="!AboutMenu.includes(Rt.path)" :to="SwitchRoute('/about', '/bersama')" @click="onCloseIt" :class="btn1">{{ SwitchLang('About Us', 'Tentang Kami') }}</RouterLink>
  <RouterLink v-show="!SalawatMenu.includes(Rt.path)" :to="SwitchRoute('/salawat', '/sholawat')" @click="onCloseIt" :class="btn2">{{ SwitchLang('Any Salawat', 'Serba Sholawat') }}</RouterLink>
  <RouterLink v-show="!BirthDMenu.includes(Rt.path)" :to="SwitchRoute('/bestday', '/ultah')" @click="onCloseIt" :class="btn1">{{ SwitchLang('Bestday?', 'Ultah?') }}</RouterLink>
  <!-- Rute spesial buat yang ultah, mwehehe 🤭✨ -->
  <!-- 2026 edition~ -->
  <RouterLink v-show="BirthDMenu.includes(Rt.path) && BulanUltah == 5" :to="SwitchRoute('/bestday/ahmedeeya_2027', '/ultah/ahmedeeya_2027')" @click="onCloseIt" :class="btn1">{{ 'Ahmedeeya?' }}</RouterLink>
  <RouterLink v-show="BirthDMenu.includes(Rt.path) && BulanUltah == 1" :to="SwitchRoute('/bestday/lutfia_2027', '/ultah/lutfia_2027')" @click="onCloseIt" :class="btn1">{{ 'ChocoPie?' }}</RouterLink>
  <RouterLink v-show="BirthDMenu.includes(Rt.path) && BulanUltah == 3" :to="SwitchRoute('/bestday/firamelia_2027', '/ultah/firamelia_2027')" @click="onCloseIt" :class="btn1">{{ 'Safir?' }}</RouterLink>
  <RouterLink v-show="BirthDMenu.includes(Rt.path) && BulanUltah == 11" :to="SwitchRoute('/bestday/tantesasaa_2026', '/ultah/tantesasaa_2026')" @click="onCloseIt" :class="btn1">{{ 'Tante Sasaa?' }}</RouterLink>
  <RouterLink v-show="BirthDMenu.includes(Rt.path) && BulanUltah == 10" :to="SwitchRoute('/bestday/afiva134_2026', '/ultah/afiva134_2026')" @click="onCloseIt" :class="btn1">{{ 'Afiva?' }}</RouterLink>
  <RouterLink v-show="BirthDMenu.includes(Rt.path) && BulanUltah == 8" :to="SwitchRoute('/bestday/lyra86_2026', '/ultah/lyra86_2026')" @click="onCloseIt" :class="btn1">{{ 'Lyra?' }}</RouterLink>
  <!-- <RouterLink v-show="BirthDMenu.includes(Rt.path) && BulanUltah == 3" :to="SwitchRoute('/bestday/author_kimpu1_2026', '/ultah/author_kimpu1_2026')" @click="onCloseIt" :class="btn1">{{ 'Lafina?' }}</RouterLink> -->
  <RouterLink v-show="BirthDMenu.includes(Rt.path) && BulanUltah == 10" :to="SwitchRoute('/bestday/pellownie_2026', 'ultah/pellownie_2026')" @click="onCloseIt" :class="btn1">{{ 'Nica M3A?' }}</RouterLink>
  <RouterLink v-show="BirthDMenu.includes(Rt.path) && BulanUltah == 6" :to="SwitchRoute('/bestday/myunica_2027', '/ultah/myunica_2027')" @click="onCloseIt" :class="btn1">{{ 'Yunica?' }}</RouterLink>
</template>

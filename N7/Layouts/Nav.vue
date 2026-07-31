<!--
VueNm
v1.40
NamaMu Ahmedeeya
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
</script>

<template>
  <RouterLink v-show="!HomeMenu.includes(Rt.path)" to="/" @click="onCloseIt" :class="btn1">{{ SwitchLang('Home', 'Beranda') }}</RouterLink>
  <RouterLink v-show="!AboutMenu.includes(Rt.path)" :to="SwitchRoute('/about', '/bersama')" @click="onCloseIt" :class="btn1">{{ SwitchLang('About Us', 'Tentang Kami') }}</RouterLink>
  <RouterLink v-show="!SalawatMenu.includes(Rt.path)" :to="SwitchRoute('/salawat', '/sholawat')" @click="onCloseIt" :class="btn2">{{ SwitchLang('Any Salawat', 'Serba Sholawat') }}</RouterLink>
  <RouterLink v-show="!BirthDMenu.includes(Rt.path)" :to="SwitchRoute('/bestday', '/ultah')" @click="onCloseIt" :class="btn1">{{ SwitchLang('Bestday?', 'Ultah?') }}</RouterLink>
  <RouterLink v-show="BirthDMenu.includes(Rt.path)" to="/lutfia" :class="btn2">{{ 'Lutfi Nur Syafira?' }}</RouterLink>
  <RouterLink v-show="BirthDMenu.includes(Rt.path)" to="/firamelia" :class="btn2">{{ 'Amelia Safira Bornan?' }}</RouterLink>
  <RouterLink v-show="BirthDMenu.includes(Rt.path)" to="/tantesasaaa" :class="btn2">{{ 'Azzahra Ilma Novya Salsabila?' }}</RouterLink>
  <RouterLink v-show="BirthDMenu.includes(Rt.path)" to="/mydede" :class="btn1">{{ 'Afiva Octavia?' }}</RouterLink>
  <RouterLink v-show="BirthDMenu.includes(Rt.path)" to="/myprincess" :class="btn1">{{ 'Lyra?' }}</RouterLink>
  <RouterLink v-show="BirthDMenu.includes(Rt.path)" to="/authormia" :class="btn1">{{ 'Lafina?' }}</RouterLink>
  <RouterLink v-show="BirthDMenu.includes(Rt.path)" to="/pellownie" :class="btn2">{{ 'Veronica Octavia Putri?' }}</RouterLink>
  <RouterLink v-show="BirthDMenu.includes(Rt.path)" to="/myunica" :class="btn2">{{ 'Siti Nur Yunica?' }}</RouterLink>
</template>

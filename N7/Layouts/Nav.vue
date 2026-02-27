<!--
VueNm
v1.33
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
  <RouterLink v-show="BirthDMenu.includes(Rt.path)" to="/tes1" :class="btn2">{{ SwitchLang('Test 3', 'Tes 3') }}</RouterLink>
  <RouterLink v-show="BirthDMenu.includes(Rt.path)" to="/tes2" :class="btn1">{{ SwitchLang('Test 4', 'Tes 4') }}</RouterLink>
  <RouterLink v-show="BirthDMenu.includes(Rt.path)" to="/tes3" :class="btn1">{{ SwitchLang('Test 5', 'Tes 5') }}</RouterLink>
</template>

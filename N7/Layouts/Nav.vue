<!--
VueNymu
v1.30
Nymu Ahmedeeya
-->

<script setup lang="ts">
import { ref } from "vue"
import { RouterLink, useRoute } from 'vue-router'
import { SwitchLang, SwitchRoute } from '@/Function'

// Testing pake defineProps
defineProps<{btn1: string, btn2: string, onCloseIt: any}>()

// Setup rute, biar bisa dideteksi sama v-if / v-show
const Rt = useRoute()
const AddonMenu = ['/about', '/bersama']
</script>

<template>
  <RouterLink to="/" @click="onCloseIt" :class="btn1">{{ SwitchLang('Home', 'Beranda') }}</RouterLink>
  <RouterLink :to="SwitchRoute('/about', '/bersama')" @click="onCloseIt" :class="btn1">{{ SwitchLang('About Us', 'Tentang Kami') }}</RouterLink>
  <RouterLink v-show="AddonMenu.includes(Rt.path)" to="/tes1" :class="btn2">{{ SwitchLang('Test 3', 'Tes 3') }}</RouterLink>
  <RouterLink v-show="AddonMenu.includes(Rt.path)" to="/tes2" :class="btn1">{{ SwitchLang('Test 4', 'Tes 4') }}</RouterLink>
  <RouterLink v-show="AddonMenu.includes(Rt.path)" to="/tes3" :class="btn1">{{ SwitchLang('Test 5', 'Tes 5') }}</RouterLink>
</template>

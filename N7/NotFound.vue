<!--
VueNm
v1.40
NamaMu Ahmedeeya
-->

<script setup lang="ts">
import { SwitchLang } from '@/Function'
import Class from '@/Tailwind_ClassList'
import { useRoute } from 'vue-router'

// Buat alias dulu
const Cls7 = Class
const Rute = useRoute()
</script>

<template>
  <div v-if="Rute.path === '/bestday' || Rute.path === '/ultah'" id="not-found">
    <h1 :class="Cls7.NotFound.H1">{{ SwitchLang(`Looking for someone's bestday?`, `Kepo ya, siapa yang ultah?`) }}</h1>
    <p>{{ SwitchLang(`Try to select available name at these f buttons (click that one button at top-right corner to see it, if you on Android / iOS) 😴✨`, 'Coba pilih nama yang ada di tombol2 itu (atau gak klik tombol di pojok kanan atas buat liat list nama2nya) 😴✨') }}</p><br />
    <i>{{ SwitchLang(`Or ...`, `Atau ...`) }}</i><br />
    <b>{{ SwitchLang(`Wait atmin for releasing your secret link + password on your WA.`, `Tunggu atmin rilis link rahasia + sandinya ke WA kamu.`) }}</b>
  </div>
  <!-- Ini default— ya itulah pokoknya ... -->
  <div v-else id="not-found">
    <h1 :class="Cls7.NotFound.H1">{{ SwitchLang('What are ya search?', 'Nyari apa sih?') }}</h1>
    <p>{{ SwitchLang('Go back! The dev is currently busy ... so don\'t try to append his jobs a lot!', 'Balik sana! Yang buat ini lagi sibuk ... jadi jangan nambah2 kerjaan dia!') }}</p>
  </div>
</template>

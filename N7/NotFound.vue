<!--
VueNymu
v1.30
Nymu Ahmedeeya
-->

<script setup lang="ts">
import { SwitchLang } from '@/Function'
import Class from '@/Tailwind_ClassList'

// Buat alias dulu
const Cls7 = Class
</script>

<template>
  <div id="not-found">
    <h1 :class="Cls7.NotFound.H1">{{ SwitchLang('What are ya search?', 'Nyari apa sih?') }}</h1>
    <p>{{ SwitchLang('Go back! The dev is currently busy ... so don\'t try to append his jobs a lot!', 'Balik sana! Yang buat ini lagi sibuk ... jadi jangan nambah2 kerjaan dia!') }}</p>
  </div>
</template>

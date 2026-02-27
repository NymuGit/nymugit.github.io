<!--
VueNm
v1.33
NamaMu Ahmedeeya
-->

<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from 'vue-router'
import { SwitchLang, SwitchRoute } from '@/Function'
import Class from '@/Tailwind_ClassList'

// Atur variabel
const Cls7 = Class
</script>

<template>
  <div id="slwt" :class="Cls7.Salawat.Div1">
    <h3 :class="Cls7.Salawat.H3">{{ SwitchLang('Reunited Sekumpul', 'Sekumpul Mengumpul') }}</h3>
    <div :class="Cls7.Salawat.Div2">
      <RouterLink :to="SwitchRoute('/sekumpul/khabbiri', '/sekumpul/khobbiri')" :class="Cls7.Salawat.Sekumpul" >{{ SwitchLang('Khabbiri', 'Khobbiri') }}</RouterLink>
    </div>
    <hr />
    <h3 :class="Cls7.Salawat.H3">{{ SwitchLang('Iconic The Classic', 'Klasik Masih Asik') }}</h3>
    <div :class="Cls7.Salawat.Div2">
      <RouterLink :to="SwitchRoute('/classic/ya_badratin', '/klasik/ya_badrotim')" :class="Cls7.Salawat.Klasik" >{{ SwitchLang('Ya Badratin', 'Ya Badrotim') }}</RouterLink>
    </div>
    <hr />
    <h3 :class="Cls7.Salawat.H3">{{ SwitchLang('New and Awesome', 'Baru nan Seru') }}</h3>
    <div :class="Cls7.Salawat.Div2">
      <RouterLink :to="SwitchRoute('/new/al_hijratu', '/baru/al_hijratu')" :class="Cls7.Salawat.Baru" >{{ SwitchLang('Al-Hijratu', 'Al-Hijratu') }}</RouterLink>
    </div>
  </div>
</template>

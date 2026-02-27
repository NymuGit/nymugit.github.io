<!--
VueNm
v1.33
NamaMu Ahmedeeya
-->

<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from 'vue-router'
import { SwitchLang } from '@/Function'
import Class from '@/Tailwind_ClassList'

// Atur variabel
const Cls7 = Class
// defineProps lagi ...
defineProps<{
  Lyric_Ar?: object[] | string,
  Lyric_EnLtn?: object[] | string,
  Lyric_IdLtn?: object[] | string,
  Lyric_En?: object[] | string,
  Lyric_Id?: object[] | string,
}>()
</script>

<template>
  <div id="slwt-lyrics" :class="Cls7.Salawat_Lyrics.Div1">
    <p :class="Cls7.Salawat_Lyrics.P1" v-html="Lyric_Ar" />
    <p :class="Cls7.Salawat_Lyrics.P2" v-html="SwitchLang(Lyric_EnLtn, Lyric_IdLtn)" />
    <p :class="Cls7.Salawat_Lyrics.P3" v-html="SwitchLang(Lyric_En, Lyric_Id)" />
  </div>
</template>

<!--
VueNymu
v1.30
Nymu Ahmedeeya
-->

<script setup lang="ts">
import Class from '@/Tailwind_ClassList'
import { SwitchLang } from '@/Function'

// Buat alias dulu
const Cls7 = Class
// Testing pake defineProps
defineProps<{
  Color: string,
  Image: string,
  Name: string,
  Quote: object[] | string,
  Facebook?: string,
  Instagram?: string,
  Youtube?: string,
  Tiktok?: string,
  Link_Facebook?: string,
  Link_Instagram?: string,
  Link_Youtube?: string,
  Link_Tiktok?: string,
}>()
</script>

<template>
  <div id="bio-card" :class="Cls7.BioCard.Div1 + Color">
    <img :src="Image" :class="Cls7.BioCard.Img" />
    <div :class="Cls7.BioCard.Div2" >
      <h3 :class="Cls7.BioCard.ColSpan12">{{ Name }}</h3>
      <i :class="Cls7.BioCard.ColSpan12">{{ Quote }}</i>
      <br :class="Cls7.BioCard.ColSpan12" /><hr :class="Cls7.BioCard.ColSpan12" />
      <span :class="Cls7.BioCard.ColSpan1">Facebook </span><h6 :class="Cls7.BioCard.ColSpan11"><a target="_blank" :href="`https://` + Link_Facebook">{{ Facebook ? (': ' + Facebook) : SwitchLang(': (None)', ': (Gak punya)') }}</a></h6>
      <span :class="Cls7.BioCard.ColSpan1">Instagram </span><h6 :class="Cls7.BioCard.ColSpan11"><a target="_blank" :href="`https://` + Link_Instagram">{{ Instagram ? (': ' + Instagram) : SwitchLang(': (None)', ': (Gak punya)') }}</a></h6>
      <span :class="Cls7.BioCard.ColSpan1">Youtube </span><h6 :class="Cls7.BioCard.ColSpan11"><a target="_blank" :href="`https://` + Link_Youtube">{{ Youtube ? (': ' + Youtube) : SwitchLang(': (None)', ': (Gak punya)' ) }}</a></h6>
      <span :class="Cls7.BioCard.ColSpan1">Tiktok </span><h6 :class="Cls7.BioCard.ColSpan11"><a target="_blank" :href="`https://` + Link_Tiktok">{{ Tiktok ? (': ' + Tiktok) : SwitchLang(': (None)', ': (Gak punya)') }}</a></h6>
    </div>
  </div>
</template>

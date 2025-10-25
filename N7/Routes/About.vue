<!--
VueNymu
v1.30
Nymu Ahmedeeya
-->

<script setup lang="ts">
import BioCard from '@/Reuse/BioCard.vue'
import Src from '@/Sources'
import { SwitchLang } from '@/Function'

// Buat alias dulu
const Img7 = Src

const Quote_B1 = SwitchLang('Shines like the star ....', 'Bersinar seperti bintang ....')
const Quote_B2 = SwitchLang('All in, but hard to consist ....', 'Serba bisa, susah istiqomah ....')
</script>

<template>
  <div id="about">
    <BioCard
      Color="bg-pink-500/30"
      :Image="Img7.Lutfia_1"
      Name="Lutfi Nur Syafira"
      :Quote="Quote_B1"
      Link_Facebook="facebook.com/lutfi.nur.syafira"
      Link_Instagram="instagram.com/fira_lysh"
      Link_Tiktok="tiktok.com/@lutfi..n..s"
      Facebook="Lutfi Nur Syafira"
      Instagram="Syafi"
      Tiktok="Fira lutfia"
    />
    <hr />
    <BioCard
      Color="bg-purple-500/30"
      :Image="Img7.NymuAhmedeeya_1"
      Name="Ahmad Hamdani" 
      :Quote="Quote_B2"
      Link_Facebook="facebook.com/nymu.ahmedeeya"
      Link_Instagram="instagram.com/nymu.ahmedeeya"
      Link_Youtube="youtube.com/@nymu.ahmedeeya"
      Link_Tiktok="tiktok.com/@nymu.ahmedeeya"
      Facebook="Nymu Ahmedeeya"
      Instagram="Nymu Ahmedeeya"
      Youtube="Nymu Ahmedeeya"
      Tiktok="Nymu Ahmedeeya" 
    />
  </div>
</template>

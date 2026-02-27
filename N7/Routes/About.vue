<!--
VueNm
v1.33
NamaMu Ahmedeeya
-->

<script setup lang="ts">
import BioCard from '@/Reuse/BioCard.vue'
import Class from '@/Tailwind_ClassList'
import Src from '@/Sources'
import { SwitchLang } from '@/Function'

// Buat alias dulu
const Cls7 = Class
const Img7 = Src

const Quote_B1 = SwitchLang('Just a lil girl whose hard to move on.', 'Cuman gadis kecil yang susah move on.')
const Quote_B2 = SwitchLang('The beautiful blue sapphire.', 'Biru safir yang indah.')
const Quote_B3 = SwitchLang('The lily flower whose lost in time.', 'Bunga teratai yang hilang bersama waktu.')
const Quote_B4 = SwitchLang('Last hope that failed.', 'Harapan terakhir yang gagal.')
const Quote_B5 = SwitchLang('Elder who refuse to be aged.', 'Sepuh yang menolak untuk disepuhkan.')
const Quote_B6 = SwitchLang('Versatile, with a courage.', 'Serba bisa, modal keberanian.')
const Quote_B7 = SwitchLang('Once to be anonymous, now was just a NPC.', 'Pernah menjadi anonimus, sekarang telah jadi manusia biasa.')
</script>

<template>
  <div id="about" :class="Cls7.About">
    <BioCard
      Color="bg-teal-300/30"
      :Image="Img7.AtminNovyA_1"
      Name="Azzahra Ilma Novya Salsabila"
      :Quote="Quote_B1"
      Link_Instagram="instagram.com/salzzaj_sdh"
      Link_Tiktok="tiktok.com/@azzahranovya1711"
      Instagram="Didi Paridi"
      Tiktok="Nov~•why?"
    />
    <BioCard
      Color="bg-blue-600/30"
      :Image="Img7.FiraAmelia_1"
      Name="Amelia Safira Bornan"
      :Quote="Quote_B2"
      Link_Facebook="facebook.com/amelia.safira.3576"
      Link_Instagram="instagram.com/shappire___"
      Facebook="Ayane Hashibira"
      Instagram="safir"
    />
    <BioCard
      Color="bg-red-500/30"
      :Image="Img7.Lutfia_3"
      Name="Lutfi Nur Syafira"
      :Quote="Quote_B3"
      Link_Facebook="facebook.com/lutfi.nur.syafira"
      Link_Instagram="instagram.com/fira_lysh"
      Link_Tiktok="tiktok.com/@syafi_35"
      Facebook="Lutfi Nur Syafira"
      Instagram="Syafiβ"
      Tiktok="Syafi"
    />
    <BioCard
      Color="bg-indigo-500/30"
      :Image="Img7.Ahmedeeya_1"
      Name="Ahmad Hamdani" 
      :Quote="Quote_B4"
      Link_Facebook="facebook.com/23jadinm"
      Link_Instagram="instagram.com/23jadinm"
      Link_Youtube="youtube.com/@23jadinm"
      Link_Tiktok="tiktok.com/@23jadinm"
      Facebook="Nymu Ahmedeeya"
      Instagram="_Lite_ 🟪"
      Youtube="Darken 🔻"
      Tiktok="DuaTiga Jadi ...?" 
    />
    <BioCard
      Color="bg-lime-400/30"
      :Image="Img7.SepuhHafif_1"
      Name="Muhammad Hafif Albar"
      :Quote="Quote_B5"
      Link_Instagram="instagram.com/m.hafif_177"
      Instagram="محمد حافيف البر"
    />
    <BioCard
      Color="bg-black/30"
      :Image="Img7.LordDikz_1"
      Name="Muhammad Diki Saputra"
      :Quote="Quote_B6"
      Link_Instagram="instagram.com/mhmmddikz"
      Instagram="Mhmmddik"
    />
    <BioCard
      Color="bg-blue-500/30"
      :Image="Img7.D3f_1"
      Name="Irwan Iswandi"
      :Quote="Quote_B7"
      Link_Instagram="instagram.com/callmee.wann_"
      Instagram="Wann"
    />
  </div>
</template>

<!--
VueNm
v1.45
NamaMu Ahmedeeya
-->

<script setup lang="ts">
import BioCard from '@/Reuse/BioCard.vue'
import Class from '@/Tailwind_ClassList'
import LinkIt from '@/Reuse/Links'
import Src from '@/Sources'
import { SwitchLang } from '@/Function'

// Buat alias dulu
const Cls7 = Class
const Img7 = Src

const Quote_F1 = SwitchLang('Just a lil girl whose hard to move on.', 'Cuman gadis kecil yang susah move on.')
const Quote_F2 = SwitchLang('The beautiful blue sapphire.', 'Biru safir yang indah.')
const Quote_F3 = SwitchLang('The lotus flower whose lost in time.', 'Bunga teratai yang hilang bersama waktu.')
const Quote_F4 = SwitchLang('A women whose hard to let her beloved man go.', 'Seorang wanita yang susah melepaskan kekasihnya pergi.')
const Quote_F5 = SwitchLang('A beautiful lil girl from the east.', 'Gadis kecil yang cantik dari timur.')
const Quote_F6 = SwitchLang('A lil pianist girl who love jaranan.', 'Gadis pianis kecil yang suka jaranan.')
const Quote_F7 = SwitchLang('Same as Afiva— jaranan\'s fans.', 'Sama seperti Afiva— fans jaranan.')
const Quote_F8 = SwitchLang('Just a lil girl who loving her "just friend" so much.', 'Cuman gadis kecil yang kecintaan sama "cuma temannya".')
const Quote_M1 = SwitchLang('Last hope that failed.', 'Harapan terakhir yang gagal.')
const Quote_M2 = SwitchLang('Elder who refuse to be aged.', 'Sepuh yang menolak untuk disepuhkan.')
const Quote_M3 = SwitchLang('Versatile, with a courage.', 'Serba bisa, modal keberanian.')
const Quote_M4 = SwitchLang('Once to be anonymous, now was just a NPC.', 'Pernah menjadi anonimus, sekarang telah jadi manusia biasa.')
</script>

<template>
  <div id="about" :class="Cls7.About.Div1">
    <h6>{{ SwitchLang('Don\'t forget to follow atmin\'s activities on WA channel! ✨', 'Janlup ikutin kegabutan atmin di saluran WA! ✨') }}</h6>
    <button :class="Cls7.About.Button1"><a href="https://whatsapp.com/channel/0029Vaa3XDNAu3aOVyxqkU23">{{ SwitchLang('Otw follow 😏', 'Oke gaskuh 😏') }}</a></button>
    <hr>
    <!-- Female area~ -->
    <BioCard
      Color="bg-pink-300/30"
      :Image="Img7.AtminNovyA_9"
      Name="Azzahra Ilma Novya Salsabila"
      :Quote="Quote_F1"
      :Link_Instagram="LinkIt.AtminNovyA_IG_1"
      :Link_Tiktok="LinkIt.AtminNovyA_VT_1"
      :Link_Tiktok_2nd="LinkIt.AtminNovyA_VT_2"
    />
    <BioCard
      Color="bg-blue-400/30"
      :Image="Img7.FirAmelia_6"
      Name="Amelia Safira Bornan"
      :Quote="Quote_F2"
      :Link_Facebook="LinkIt.FirAmelia_FB_1"
      :Link_Instagram="LinkIt.FirAmelia_IG_1"
      :Link_Instagram_2nd="LinkIt.FirAmelia_IG_2"
    />
    <BioCard
      Color="bg-orange-950/30"
      :Image="Img7.Lutfia_12"
      Name="Lutfi Nur Syafira"
      :Quote="Quote_F3"
      :Link_Facebook="LinkIt.Lutfia_FB_1"
      :Link_Instagram="LinkIt.Lutfia_IG_1"
      :Link_Instagram_2nd="LinkIt.Lutfia_IG_2"
      :Link_Instagram_3rd="LinkIt.Lutfia_IG_3"
      :Link_Tiktok="LinkIt.Lutfia_VT_1"
      :Link_Tiktok_2nd="LinkIt.Lutfia_VT_2"
    />
    <BioCard
      Color="bg-rose-300/30"
      :Image="Img7.Pellownie_1"
      Name="Veronica Octavia Putri"
      :Quote="Quote_F4"
      :Link_Instagram="LinkIt.Pellownie_IG_1"
      :Link_Instagram_2nd="LinkIt.Pellownie_IG_2"
    />
    <BioCard
      Color="bg-green-300/30"
      :Image="Img7.Myunica_1"
      Name="Siti Nur Yunica"
      :Quote="Quote_F5"
      :Link_Instagram="LinkIt.Myunica_IG_1"
      :Link_Tiktok="LinkIt.Myunica_VT_1"
    />
    <BioCard
      Color="bg-blue-300/30"
      :Image="Img7.Afiva_2"
      Name="Afiva Octavia"
      :Quote="Quote_F6"
      :Link_Tiktok="LinkIt.Afiva_VT_1"
    />
    <BioCard
      Color="bg-lime-700/30"
      :Image="Img7.Lyra_2"
      Name="Lyra"
      :Quote="Quote_F7"
      :Link_Tiktok="LinkIt.Lyra_VT_1"
    />
    <BioCard
      Color="bg-purple-700/30"
      :Image="Img7.AuthorMia_1"
      Name="Lafina"
      :Quote="Quote_F8"
      :Link_Youtube="LinkIt.AuthorMia_YT_1"
    />
    <!-- Male area~ -->
    <BioCard
      Color="bg-indigo-500/30"
      :Image="Img7.Ahmedeeya_16"
      Name="Ahmad Hamdani" 
      :Quote="Quote_M1"
      :Link_Facebook="LinkIt.Ahmedeeya_FB_1"
      :Link_Instagram="LinkIt.Ahmedeeya_IG_1"
      :Link_Instagram_2nd="LinkIt.Ahmedeeya_IG_2"
      :Link_Youtube="LinkIt.Ahmedeeya_YT_1"
      :Link_Tiktok="LinkIt.Ahmedeeya_VT_1"
      :Link_Tiktok_2nd="LinkIt.Ahmedeeya_VT_2"
    />
    <BioCard
      Color="bg-lime-400/30"
      :Image="Img7.SepuhHafif_1"
      Name="Muhammad Hafif Albar"
      :Quote="Quote_M2"
      :Link_Instagram="LinkIt.SepuhHafif_IG_1"
    />
    <BioCard
      Color="bg-black/30"
      :Image="Img7.LordDikz_2"
      Name="Muhammad Diki Saputra"
      :Quote="Quote_M3"
      :Link_Instagram="LinkIt.LordDikz_IG_1"
    />
    <BioCard
      Color="bg-black/30"
      :Image="Img7.D3f_1"
      Name="Irwan Iswadi"
      :Quote="Quote_M4"
      :Link_Instagram="LinkIt.D3f_IG_1"
    />
  </div>
</template>

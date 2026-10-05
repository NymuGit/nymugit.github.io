<!--
VueNm
v1.46
NamaMu Dania
-->

<script setup lang="ts">
import { reactive, ref, computed, useTransitionState } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'
import Class from '@/Tailwind_ClassList'
import { BukaSuratnya, RenderMd_Sanitized, SwitchLang, UrDay_Name } from '@/Function'
import { UrDay } from '@/Reuse/BestDay'

// Atur variabel dsb. (edisi malash ngoding)
const Cls7 = Class
const Rute = useRoute()
const Sandi = ref('')
const Terbuka = ref(false)
const UrDay_Data = computed(() => {
  return UrDay.find(item  => item.kode === Rute.params.kode)
})
const Error = ref('')
const Error_SandiSalah = SwitchLang('Dayum ... try to remember it— or request the password again by chatting atmin on WhatsApp. 🥀', 'Yah ... coba ingat2 lagi— atau minta lagi kata sandi dengan chat atmin di WA. 🥀')
const BukaSih = () => BukaSuratnya(UrDay_Data, Sandi, Terbuka, Error, Error_SandiSalah)
const BulanUltah: number = new Date().getMonth() + 1

// Setup SwitchLang (untuk menghindari TypeError) 😑
const Kosongan_Input1 = SwitchLang('Enter your secret bestday password here ... 🤭✨', 'Masukin kata sandi rahasia ultahmu di sini ... 🤭✨')

// Init Markdown, bosque 👊🏽
const Md = new MarkdownIt({
  breaks: true,
  html: true,
  linkify: true,
  typographer: true
})
</script>

<style scoped>
.birthday-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
}
.card {
  max-width: 700px;
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .15);
}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}
.gallery img {
  width: 100%;
  border-radius: 12px;
}
</style>

<template>
  <div v-if="UrDay_Data?.kode && BulanUltah == UrDay_Data.bulan" id="bestday" :class="Cls7.BestDay.Div1">
    <Transition name="fade" mode="out-in" appear>
      <!-- Kalo belum kebuka / 1st time -->
      <div v-if="!Terbuka" :class="Cls7.BestDay.Div2">
        <p>{{ SwitchLang(`Isn't this `, `Bukankah ini `) }}<b><u>{{ UrDay_Name(UrDay_Data.penerima) + ': ' }}</u></b></p>
        <h3 :class="Cls7.BestDay.H3">{{ UrDay_Data.penerima + '?' }}</h3>
        <input @keyup.enter="BukaSih()" v-model="Sandi" type="password" :placeholder="Kosongan_Input1?.toString()" :class="Cls7.BestDay.Input1 + Cls7.BestDay.Dark_Input1" />
        <button @click="BukaSih()" :class="Cls7.BestDay.Button1 + Cls7.BestDay.Dark_Button1">{{ SwitchLang('Open this f letter 😌', 'Buka surat ini, mwehehe 😌') }}</button>
        <p v-if="Error" :class="Cls7.BestDay.P1 + Cls7.BestDay.Dark_P1">{{ Error }}</p>
      </div>
      <!-- Kalo udah kebuka -->
      <div v-else :class="Cls7.BestDay.Div2">
        <h3 :class="Cls7.BestDay.H1">{{ UrDay_Data.judul }}</h3>
        <hr />
        <p v-html="RenderMd_Sanitized(UrDay_Data.pesan, Md)" :class="Cls7.BestDay.P2"></p>
        <div v-if="UrDay_Data.gambar" :class="Cls7.BestDay.Div3">
          <img v-for="Img in UrDay_Data.gambar" :key="Img" :src="Img" :class="Cls7.BestDay.Img1" />
        </div>
      </div>
    </Transition>
  </div>
  <div v-else>
    <h3>{{ SwitchLang('Nothing?', 'Gak ada?') }}</h3>
    <p>{{ SwitchLang('It mean the bestday are not this month ... (clue on background behind)', 'Berarti bukan ultahnya bulan ini ... (clue ada di background belakang ini)') }}</p>
  </div>
</template>

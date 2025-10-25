<!--
VueNymu
v1.30
Nymu Ahmedeeya
-->

<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive } from 'vue'
import MarkdownIt from 'markdown-it'
import Class from '@/Tailwind_ClassList' 
import Src from '@/Sources'
import { RandomPick_Quote, RenderMd, SwitchLang } from '@/Function'
import QuotesData_En from '@/Strin/Quotes_En.json'
import QuotesData_Id from '@/Strin/Quotes_Id.json'

// Buat alias dulu
const Cls7 = Class
const Img7 = Src
const AnimLoopAll = 'anim-loop-all '

// Jelasin tipe kata2
interface Quote {
  text: string
  author?: string
}
// Ubah JSON jadi tipe array
const Quotes = SwitchLang(QuotesData_En, QuotesData_Id) as Quote[]
// Init renderer markdown cuy
const Md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})
// Reactive state
const CurrentQuote = ref<Quote | null>(null)
let Timer: number | null = null

onMounted(() => {
  RandomPick_Quote(Quotes, CurrentQuote)
  Timer = window.setInterval(() => {
    RandomPick_Quote(Quotes, CurrentQuote)
  }, 5000)
})
onUnmounted(() => {
  if (Timer) clearInterval(Timer)
})
</script>

<style scoped>
.prose p {
  margin: 0 0 0.5rem 0;
}
</style>

<template>
  <section :class="Cls7.Quotes.Section1">
    <h2 :class="Cls7.Quotes.Header2">{{ SwitchLang('Today\'s Quotes', 'Kata2 Hari ini') }}</h2>
    <div v-if="CurrentQuote" :class="Cls7.Quotes.Div1">
      <div v-html="RenderMd(CurrentQuote.text, Md)" :class="Cls7.Quotes.Div2"></div>
      <div :class="Cls7.Quotes.Div3">- {{ CurrentQuote.author }}</div>
    </div>
    <div v-else :class="Cls7.Quotes.Div4">Loading quotes ....</div>
  </section>
</template>

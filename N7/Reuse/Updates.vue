<!--
VueNymu
v1.30
Nymu Ahmedeeya
-->

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import Class from '@/Tailwind_ClassList' 
import Src from '@/Sources'
import { RenderMd, SwitchLang } from '@/Function'
import UpdateLogs_En from '@/Strin/UpdateLogs_En.json'
import UpdateLogs_Id from '@/Strin/UpdateLogs_Id.json'

// Buat alias dulu
const Cls7 = Class
const Img7 = Src
const AnimLoopAll = 'anim-loop-all '

// Jelasin dulu
interface UpdateLogs {
  date: string
  log1: string
  log2: string
  log3: string
  log4: string
  log5: string
  log6: string
  log7: string
  log8: string
  log9: string
  log10: string
  log11: string
  log12: string
  log13: string
}
// Jadiin satu
const Logs = SwitchLang(UpdateLogs_En, UpdateLogs_Id) as UpdateLogs[]
// Init renderer markdown cuy
const Md = new MarkdownIt({
  breaks: true,
  html: true,
  linkify: true,
  typographer: true
})
</script>

<template>
  <ul :class="Cls7.Updates.Ul">
    <li v-for="(tx, i) in Logs" :key="i">
      <div v-html="RenderMd(tx.date, Md)"></div>  
      <div v-html="RenderMd(tx.log1, Md)"></div>  
      <div v-html="RenderMd(tx.log2, Md)"></div>  
      <div v-html="RenderMd(tx.log3, Md)"></div>  
      <div v-html="RenderMd(tx.log4, Md)"></div>  
      <div v-html="RenderMd(tx.log5, Md)"></div>  
      <div v-html="RenderMd(tx.log6, Md)"></div>  
      <div v-html="RenderMd(tx.log7, Md)"></div>  
      <div v-html="RenderMd(tx.log8, Md)"></div>  
      <div v-html="RenderMd(tx.log9, Md)"></div>  
      <div v-html="RenderMd(tx.log10, Md)"></div>  
      <div v-html="RenderMd(tx.log11, Md)"></div>  
      <div v-html="RenderMd(tx.log12, Md)"></div>  
      <div v-html="RenderMd(tx.log13, Md)"></div>  
    </li>
  </ul>
</template>

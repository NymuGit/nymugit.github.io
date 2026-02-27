<!--
VueNm
v1.33
NamaMu Ahmedeeya
-->

<script setup lang="ts">
import { ref } from "vue"
import { RouterLink, RouterView } from 'vue-router'
import MarkdownIt from 'markdown-it' 
import { RenderMd ,SwitchLang, SwitchRoute } from '@/Function'
import Salawat_Lyrics from '@/Reuse/Salawat_Lyrics.vue'
import Lyrics from '@/Strin/Lyrics/Salawat/Sekumpul/Khabbiri'
import Class from '@/Tailwind_ClassList'

// Atur variabel
const Cls7 = Class
// Init renderer markdown cuy
const Md = new MarkdownIt({
  breaks: true,
  html: true,
  linkify: true,
  typographer: true
})
</script>

<template>
  <div id="slwt" :class="Cls7.Salawat.Div1">
    <Salawat_Lyrics :Lyric_Ar="Lyrics._Ar[0]" :Lyric_EnLtn="RenderMd(Lyrics._EnLtn[0], Md)" :Lyric_IdLtn="RenderMd(Lyrics._IdLtn[0], Md)" :Lyric_En="RenderMd(Lyrics._En[0], Md)" :Lyric_Id="RenderMd(Lyrics._Id[0], Md)" />
    <hr />
    <Salawat_Lyrics :Lyric_Ar="Lyrics._Ar[1]" :Lyric_EnLtn="RenderMd(Lyrics._EnLtn[1], Md)" :Lyric_IdLtn="RenderMd(Lyrics._IdLtn[1], Md)" :Lyric_En="RenderMd(Lyrics._En[1], Md)" :Lyric_Id="RenderMd(Lyrics._Id[1], Md)" />
  </div>
</template>

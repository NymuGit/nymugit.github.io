<!--
VueNm
v1.33
NamaMu Ahmedeeya
-->

<script setup lang="ts">
import { ref } from "vue"
import { RouterLink, RouterView } from 'vue-router'
import { SwitchLang, SwitchRoute } from '@/Function'
import Class from '@/Tailwind_ClassList'

// Atur variabel
const Cls7 = Class
</script>

<template>
  <div id="slwt" :class="Cls7.Salawat.Div1">
    <RouterView #="{Component}">
      <Transition name="fade" mode="out-in" appear>
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

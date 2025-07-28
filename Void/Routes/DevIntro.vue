<!--
Void(Ramadhan)
v0.13a
Nymu x Lysh
-->

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {useRouter} from 'vue-router'
import Kelas from '@/Kelas'

const ShowText = ref(false)
const Router = useRouter()

onMounted(() => {
  setTimeout(() => {
    ShowText.value = true
  }, 500)

  setTimeout(() => {
    Router.replace({name: 'MainMenu'})
  }, 5000) // 3 detik tampil, lalu masuk ke MainMenu
})
</script>

<template>
  <div :class="[Kelas.Wrapper_DevIntro]">
    <transition name="fade" appear>
      <h1 v-if="ShowText" :class="[Kelas.Test1_DevIntro]">
        Dibuat dengan cinta oleh Menymukanmu © 2025
      </h1>
    </transition>
  </div>
</template>

<!--
Void(Ramadhan)
v0.13a
Nymu x Lysh
-->

<script setup lang="ts">
import Kelas from '@/Kelas'
</script>

<template>
  <div :class="[Kelas.Wrapper_App]">
    <div :class="[Kelas.Screen_App]">
      <router-view v-slot="{Component}">
        <transition name="fade" mode="out-in" appear>
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

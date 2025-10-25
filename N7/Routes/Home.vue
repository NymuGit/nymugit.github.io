<!--
VueNymu
v1.30
Nymu Ahmedeeya
-->

<script setup lang="ts">
import Quotes from '@/Reuse/Quotes.vue';
import Updates from '@/Reuse/Updates.vue';
import Class from '@/Tailwind_ClassList'; 

// Atur variabel
const Cls7 = Class
</script>

<template>
  <div id="home">
    <Quotes :class="Cls7.Quotes.Hidden_Lg" />
    <Updates />
    <!-- <h1>Home</h1>
    <h2>Home</h2>
    <h3>Home</h3>
    <h4>Home</h4>
    <h5>Home</h5>
    <h6>Home</h6>
    <p>Test</p> -->
  </div>
</template>

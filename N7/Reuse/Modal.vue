<!--
VueNymu
v1.30
Nymu Ahmedeeya
-->

<script setup lang="ts">
import Class from '@/Tailwind_ClassList' 
import Src from '@/Sources'

// Buat alias dulu
const Cls7 = Class
const Img7 = Src
const AnimLoopAll = 'anim-loop-all '

// Setup prop sama emit
interface Props {
  modelValue: boolean
}
const Props = defineProps<Props>()
const Emits = defineEmits<{
  (e: "update:modelValue", value: boolean): void
}>()

// Setup fungsi kecil
function CloseIt(): void {
  Emits("update:modelValue", false)
}
</script>

<template>
  <!-- Background overlay -->
  <Transition name="modal" mode="out-in" appear>
    <div v-if="modelValue" :class="Cls7.Modal.Div1 + Cls7.Modal.Dark_Div1" @click.self="CloseIt">
      <!-- Modal box -->
      <div :class="AnimLoopAll + Cls7.Modal.Div2">
        <!-- Slot buat konten -->
        <slot />

        <!-- Tombol close default -->
        <div class="mt-4 flex justify-end">
          <button @click="CloseIt" :class="Cls7.Modal.Button1 + Cls7.Modal.Dark_Button1">Close</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

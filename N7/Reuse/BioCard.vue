<!--
VueNm
v1.45
NamaMu Ahmedeeya
-->

<script setup lang="ts">
import Class from '@/Tailwind_ClassList'
import { SwitchLang } from '@/Function'

// Buat alias dulu
const Cls7 = Class
// Testing pake defineProps
defineProps<{
  Color: string,
  Image: string,
  Name: string,
  Quote: object[] | string | undefined,
  Link_Facebook?: string,
  Link_Facebook_2nd?: string,
  Link_Facebook_3rd?: string,
  Link_Instagram?: string,
  Link_Instagram_2nd?: string,
  Link_Instagram_3rd?: string,
  Link_Youtube?: string,
  Link_Youtube_2nd?: string,
  Link_Youtube_3rd?: string,
  Link_Tiktok?: string,
  Link_Tiktok_2nd?: string,
  Link_Tiktok_3rd?: string,
}>()
</script>

<template>
  <div id="bio-card" :class="Cls7.BioCard.Div1 + Color">
    <div :class="Cls7.BioCard.Div2" >
      <h3 :class="Cls7.BioCard.H3">{{ Name }}</h3>
      <i :class="Cls7.BioCard.I">{{ Quote }}</i>
    </div>
    <img :src="Image" :class="Cls7.BioCard.Img" />
    <div :class="Cls7.BioCard.Div3" >
      <br :class="Cls7.BioCard.ColSpan1" /><hr :class="Cls7.BioCard.ColSpan1" />
      <h6 v-if="Link_Facebook" :class="Cls7.BioCard.ColSpan1"><a target="_blank" :href="`https://` + Link_Facebook">{{ Link_Facebook ? (Link_Facebook) : SwitchLang(': (None)', ': (Gak punya)') }}</a></h6>
      <h6 v-if="Link_Facebook_2nd" :class="Cls7.BioCard.ColSpan1"><a target="_blank" :href="`https://` + Link_Facebook_2nd">{{ Link_Facebook_2nd ? (Link_Facebook_2nd) : SwitchLang(': (None)', ': (Gak punya)') }}</a></h6>
      <h6 v-if="Link_Facebook_3rd" :class="Cls7.BioCard.ColSpan1"><a target="_blank" :href="`https://` + Link_Facebook_3rd">{{ Link_Facebook_3rd ? (Link_Facebook_3rd) : SwitchLang(': (None)', ': (Gak punya)') }}</a></h6>
      <h6 v-if="Link_Instagram" :class="Cls7.BioCard.ColSpan1"><a target="_blank" :href="`https://` + Link_Instagram">{{ Link_Instagram ? (Link_Instagram) : SwitchLang(': (None)', ': (Gak punya)') }}</a></h6>
      <h6 v-if="Link_Instagram_2nd" :class="Cls7.BioCard.ColSpan1"><a target="_blank" :href="`https://` + Link_Instagram_2nd">{{ Link_Instagram_2nd ? (Link_Instagram_2nd) : SwitchLang(': (None)', ': (Gak punya)') }}</a></h6>
      <h6 v-if="Link_Instagram_3rd" :class="Cls7.BioCard.ColSpan1"><a target="_blank" :href="`https://` + Link_Instagram_3rd">{{ Link_Instagram_3rd ? (Link_Instagram_3rd) : SwitchLang(': (None)', ': (Gak punya)') }}</a></h6>
      <h6 v-if="Link_Youtube" :class="Cls7.BioCard.ColSpan1"><a target="_blank" :href="`https://` + Link_Youtube">{{ Link_Youtube ? (Link_Youtube) : SwitchLang(': (None)', ': (Gak punya)' ) }}</a></h6>
      <h6 v-if="Link_Youtube_2nd" :class="Cls7.BioCard.ColSpan1"><a target="_blank" :href="`https://` + Link_Youtube_2nd">{{ Link_Youtube_2nd ? (Link_Youtube_2nd) : SwitchLang(': (None)', ': (Gak punya)' ) }}</a></h6>
      <h6 v-if="Link_Youtube_3rd" :class="Cls7.BioCard.ColSpan1"><a target="_blank" :href="`https://` + Link_Youtube_3rd">{{ Link_Youtube_3rd ? (Link_Youtube_3rd) : SwitchLang(': (None)', ': (Gak punya)' ) }}</a></h6>
      <h6 v-if="Link_Tiktok" :class="Cls7.BioCard.ColSpan1"><a target="_blank" :href="`https://` + Link_Tiktok">{{ Link_Tiktok ? (Link_Tiktok) : SwitchLang(': (None)', ': (Gak punya)') }}</a></h6>
      <h6 v-if="Link_Tiktok_2nd" :class="Cls7.BioCard.ColSpan1"><a target="_blank" :href="`https://` + Link_Tiktok_2nd">{{ Link_Tiktok_2nd ? (Link_Tiktok_2nd) : SwitchLang(': (None)', ': (Gak punya)') }}</a></h6>
      <h6 v-if="Link_Tiktok_3rd" :class="Cls7.BioCard.ColSpan1"><a target="_blank" :href="`https://` + Link_Tiktok_3rd">{{ Link_Tiktok_3rd ? (Link_Tiktok_3rd) : SwitchLang(': (None)', ': (Gak punya)') }}</a></h6>
    </div>
  </div>
</template>

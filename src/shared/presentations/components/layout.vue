<script setup>

import LanguageSwitcher from "./language-switcher.vue";
import {Toolbar as PvToolbar} from "primevue";
import FooterContent from "./footer-content.vue";
import {computed, onMounted} from "vue";
import {classificationsInformation} from "../../../classifications/application/classifications.information.js";
import ClassificationList from "../../../classifications/presentation/components/classification-list.vue";
import {LogoDevApi} from "../../infrastructure/logo-dev-api.js";
import UnavailableContent from "../../../classifications/presentation/components/unavailable-content.vue";

const classifications = computed(()=>classificationsInformation.classifications)
const errors = computed(()=>classificationsInformation.errors)
const logoUrl = new LogoDevApi()

onMounted(()=>{
  classificationsInformation.loadClassifications();
})

</script>

<template>
<div class="bg-gray-200">
  <div>
    <div>
      <pv-toolbar>
        <template #start>
          <img :src="logoUrl.getUrlToLogo()" alt="DinoFYI" style="height: 36px; object-fit: contain;"/>
          <h4 class="ml-1">DinoFYI</h4>
        </template>
        <template #center>
          <h3>DinoFYI</h3>
        </template>
        <template #end>
          <language-switcher></language-switcher>
        </template>
      </pv-toolbar>
    </div>
  </div>
  <div>
    <classification-list v-if="classifications" :classifications="classifications"></classification-list>
    <unavailable-content v-else :errors="errors"></unavailable-content>
  </div>
  <footer-content></footer-content>
</div>
</template>

<style scoped>

</style>
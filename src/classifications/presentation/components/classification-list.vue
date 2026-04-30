<script setup lang="js">

import {toRefs} from "vue";
import ClassificationItem from "./classification-item.vue";

const props = defineProps({classifications: {type: Array, required: true}});
const {classifications} = toRefs(props);

</script>

<template>
  <h3 class="font-bold">Classification Registry</h3>
  <div class="grid justify-content-center">
    <div v-for="classification in classifications">
      <classification-item :classification="classification"/>
    </div>
  </div>
</template>

<style scoped>

</style>
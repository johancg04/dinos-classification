<script setup>
import {toRefs} from "vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n();

const props = defineProps({errors:{type: Array, required: true}});
const {errors} = toRefs(props);
</script>

<template>
  <div>
    <h4>
      {{t('unavailable-classification')}}
    </h4>
  </div>
  <div>
    <div v-for="error in errors">
      <h6>{{error}}</h6>
    </div>
  </div>
</template>

<style scoped>

</style>
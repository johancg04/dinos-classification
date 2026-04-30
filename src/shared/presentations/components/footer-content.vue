<script setup>
import {useI18n} from "vue-i18n";

const {t} = useI18n();
</script>

<template>
  <div class="grid bg-primary mt-4 p-4 align-content-start">
    <div class="col-12 ml-3 align-items-center justify-content-center">
      <p>Copyright © 2026 DinoFYI. {{ t('footer.reserved-by') }}</p>
    </div>
    <div class="col-12 ml-3 mt-3 align-items-center justify-content-center">
      <p>
        {{ t('footer.developed-by') }} Johan Alexis Contreras Granados
      </p>
      <p>{{ t('footer.code-student') }} U202423752</p>
    </div>
  </div>
</template>

<style scoped>

</style>
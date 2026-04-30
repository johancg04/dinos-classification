<script setup>
import {Classification} from "../../domain/model/classification.entity.js";
import {toRefs} from "vue";
import {useI18n} from "vue-i18n";
import {Button as PvButton} from "primevue";

const props = defineProps({classification: {type: Classification, required: true}});
const {classification} = toRefs(props);

const {t} = useI18n();

const emit = defineEmits(['tooltip-showed']);

async function shareClassification() {
  const classificationToShare = classification.value;
  const shareUrl = `https://dinofyi.com/classification/${classificationToShare.slug}`;
  const shareData = { title: classificationToShare.name, url: shareUrl };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      console.log('classification shared successfully');
    } catch (err) {
      console.error('Error sharing the classification:', err);
    }
  } else {
    try {
      await navigator.clipboard.writeText(shareUrl);
      emit('tooltip-showed', shareUrl);
      console.log('classification URL copied to clipboard');
    } catch (err) {
      console.error('Failed to copy the classification URL:', err);
    }
  }
}

</script>

<template>
  <div class="mt-4">
    <pv-card class="m-2 h-19rem border-1 w-25rem">
      <template #title>
        <div style="background-color: #3BBFA1" class="border-round">{{ classification.name }}</div>
      </template>
      <template #subtitle>{{ classification.commonName }}</template>
      <template #content>
        <div class="text-left">
          {{ classification.description }}
          <p>Parent: {{ classification.parent }}</p>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1 mb-2">
          <pv-button as="a" class="w-10rem no-underline"
                     :href="'https://dinofyi.com/classification/' + classification.slug" target="_blank">
            {{ t('card.more-info') }}
          </pv-button>
          <pv-button
            :label="t('card.share')"
            aria-label="Share classification"
            class="p-button-text p-button-sm ml-1"
            icon="pi pi-share-alt"
            @click="shareClassification"
          />
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>

</style>
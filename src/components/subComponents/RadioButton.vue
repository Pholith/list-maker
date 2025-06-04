<template>
  <v-container class="container">
    <v-radio-group inline class="custom-cell" v-model="element.ratings[subcategory]">
      <v-radio
        v-for="button in listStore.buttons"
        :base-color="button.buttonColor"
        :color="button.buttonColor"
        :value="button.buttonName"
      ></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script setup lang="ts">
import type { ExKink } from '@/models/kinks';
import { useListStore } from '@/stores/list-store';
import { ref } from 'vue';

const { subcategory, element } = defineProps<{ subcategory: string; element: ExKink }>();

const listStore = useListStore();
</script>

<style scoped>
.container {
  padding: 2px;
}

.custom-cell {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>

<template>
  <v-menu v-model:model-value="isPickerOpen" :close-on-content-click="false" location="start">
    <template #activator="{ props }">
      <div
        style="
          display: flex;
          flex-flow: column;
          justify-content: space-around;
          align-items: center;
          width: 100px;
          height: 50px;
        "
        v-bind="props"
      >
        <div
          class="rounded-circle mx-auto"
          :style="'background-color:' + button.buttonColor"
          style="height: 20px; width: 20px"
        ></div>
      </div>
    </template>
    <v-color-picker v-model="button.buttonColor" />
  </v-menu>
</template>

<script setup lang="ts">
import type { RadioButton } from '@/models/models';
import { ref } from 'vue';

const { button } = defineProps<{ button: RadioButton }>();

const isPickerOpen = ref<boolean>(false);
</script>

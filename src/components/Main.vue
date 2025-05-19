<template>
  <v-row dense>
    <v-col v-for="section in listStore.sections" :key="section.id" cols="12" md="6">
      <v-container>
        <Section :section="section"></Section>
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useListStore } from '@/stores/list-store';

const listStore = useListStore();
</script>

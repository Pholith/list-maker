<template>
  <v-card>
    <v-card-title>{{ section.title }}</v-card-title>
  </v-card>
  <v-card-item>
      <v-table>
        <thead>
          <tr>
            <th v-for="column in section.columnTitles" :key="'header-' + column" text-align="left">
              {{ column }}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="element in section.elements" :key="'row-' + element">
            <td v-for="column in section.columnTitles" :key="'cell-' + element + '-' + column" class="td">
              <RadioButton> </RadioButton>
            </td>
            <td>{{ element }}</td>
          </tr>
        </tbody>
      </v-table>
  </v-card-item>
</template>

<script setup lang="ts">
import type { Section } from '@/models/models';

const { section } = defineProps<{ section: Section }>();
</script>

<style scoped>
.td {

    padding: 0px;
}
</style>

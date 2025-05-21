<template>
  <v-card>
    <v-card-title elevation="2" class="card-title bg-secondary" >
      {{ section.title }}
      <EditSection :section="section" :isEditing="true"/>
    </v-card-title>
    <v-card-item>
      <v-table>
        <thead>
          <tr>
            <th v-for="column in section.columnTitles" :key="'header-' + column" text-align="left">
              <div class="title">
                {{ column }}
              </div>
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
  </v-card>
</template>

<script setup lang="ts">
import type { Section } from '@/models/models';

const { section } = defineProps<{ section: Section }>();
</script>

<style scoped>
.title {
  padding-left: 10px;
}

.card-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

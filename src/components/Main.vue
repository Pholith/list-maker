<template>
  <v-row style="padding: 10px; display: flex; justify-content: center" dense>
    <v-card style="width: 800px">
      <v-card-title elevation="2" class="bg-red"> Welcome to List Maker :D </v-card-title>
      <v-card-item>
        <v-row>
          <v-col> Here, you'll be able to make list, edit them, and share them! </v-col>
        </v-row>
        <v-row>
          <v-col style="display: flex; justify-content: center; align-items: center;"> Color code </v-col>
          <v-col
            v-for="radioButton in listStore.buttons"
            style="display: flex; flex-flow: column; justify-content: space-around; align-items: center"
          >
            <div
              class="rounded-circle mx-auto"
              :style="'background-color:' + radioButton.buttonColor"
              style="height: 20px; width: 20px"
            ></div>
            {{ radioButton.buttonName }}
          </v-col>
          <v-col style="display: flex; justify-content: center;">
            <EditRadioButton />
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
  </v-row>
  <v-row dense>
    <v-col v-for="section in listStore.sections" :key="section.id" cols="12" md="6">
      <v-container>
        <Section :section="section"></Section>
      </v-container>
    </v-col>
  </v-row>
  <v-row justify="center">
    <EditSection :isEditing="false" />
  </v-row>
</template>

<script setup lang="ts">
import { useListStore } from '@/stores/list-store';

const listStore = useListStore();
</script>

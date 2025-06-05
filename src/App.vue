<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>
      <v-app-bar-title>List Maker</v-app-bar-title>
      <div class="form">
        Encode Data
        <v-checkbox style="padding-top: 22px" v-model="listStore.encodeData"></v-checkbox>
        <v-text-field
          style="padding-top: 25px; width: 300px"
          placeholder="Enter your username"
          label="Username"
          v-model="listStore.username"
        >
        </v-text-field>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useListStore } from './stores/list-store';

const listStore = useListStore();
</script>

<style scoped>
.form {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>

<template>
    <v-app>
      <v-app-bar app color="primary" dark flat>
        <v-app-bar-title>List Maker</v-app-bar-title>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
</template>

<script lang="ts" setup>
import { useSnackbarStore } from './stores/snackbar-store';

const snackbarStore = useSnackbarStore();
</script>

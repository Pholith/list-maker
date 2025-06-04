<template>
    <v-app>
      <v-app-bar app color="primary" dark flat>
        <v-app-bar-title>List Maker</v-app-bar-title>
        <v-text-field style="padding-top: 25px; width: 100px; padding-left: 55%;" placeholder="Enter your username" label="Username" .v-model="listStore.username">

        </v-text-field>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useSnackbarStore } from './stores/snackbar-store';
import { useListStore } from './stores/list-store';

const snackbarStore = useSnackbarStore();
const listStore = useListStore();

onMounted( () => {

})

</script>

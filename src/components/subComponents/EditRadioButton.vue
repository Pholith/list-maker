<template>
  <v-dialog scrollable max-width="500" v-model:model-value="isDialogOpened">
    <template #activator="{ props: dialogProps }">
      <v-tooltip v-bind="dialogProps" :text="'Edit Buttons'">
        <template #activator="{ props }">
          <v-btn v-bind="{ ...dialogProps, ...props }" :icon="'mdi-text-box-edit'" size="large" color="tertiary" />
        </template>
      </v-tooltip>
    </template>
    <template #default>
      <v-card :title="'Edit buttons'">
        <v-card-item>
          <v-row style="padding-top: 10px" />
          <v-row v-for="button in listStore.buttons" style="display: flex; align-items: center">
            <ColorPicker :button="button" />
            <v-text-field style="padding-top: 15px" label="Button name" v-model="button.buttonName"></v-text-field>
            <div style="padding: 15px">
              <v-btn icon="mdi-delete" color="red" @click="listStore.removeRadioButton(button.id)" />
            </div>
          </v-row>
          <v-row style="display: flex; justify-content: space-evenly">
            <v-btn
              prepend-icon="mdi-plus"
              text="Add Button"
              rounded="sm"
              color="secondary"
              @click="listStore.addRadionButton('#808080', '')"
            />
            <v-btn
              prepend-icon="mdi-minus"
              text="Remove Button"
              rounded="sm"
              color="red"
              @click="listStore.removeLastButton"
            />
          </v-row>
          <v-row style="padding-bottom: 18px" />
        </v-card-item>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import { useListStore } from '@/stores/list-store';
import { ref } from 'vue';

const isDialogOpened = ref(false);
const listStore = useListStore();
</script>

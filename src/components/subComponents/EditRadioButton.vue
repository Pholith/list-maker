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
            <div
              style="
                display: flex;
                flex-flow: column;
                justify-content: space-around;
                align-items: center;
                width: 100px;
                height: 50px;
              "
            >
              <div
                class="rounded-circle mx-auto"
                :style="'background-color:' + button.buttonColor"
                style="height: 20px; width: 20px"
              ></div>
            </div>
            <v-text-field label="Button name" v-model="button.buttonName"></v-text-field>
          </v-row>
          <v-row style="display: flex; justify-content: space-evenly">
            <v-btn prepend-icon="mdi-plus" text="Add Button" rounded="sm" color="secondary" @click="addButton" />
            <v-btn prepend-icon="mdi-minus" text="Remove Button" rounded="sm" color="red" @click="removeLastButton" />
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

function addButton() {
    listStore.addRadionButton("grey","")
}

function removeLastButton() {
    listStore.removeRadioButton(listStore.buttons[-1].id)
}

</script>

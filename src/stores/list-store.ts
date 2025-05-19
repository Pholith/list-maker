import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useSnackbarStore } from './snackbar-store';
import type { RadioButton, Section } from '@/models/models';
import { defaultButtons, defaultSections } from '@/assets/defaultConfig';

const snackbarStore = useSnackbarStore();

export const useListStore = defineStore('list', () => {
  const sections = ref<Section[]>(defaultSections);
  const buttons = ref<RadioButton[]>(defaultButtons);

  function addSection(title: string, numColumn: number, columnTitles: string[], elements?: string[]) {
    const id = Date.now();

    if (numColumn === columnTitles.length) {
      sections.value.push({
        id,
        title,
        numColumn,
        columnTitles,
        elements: elements ? elements : []
      });
    } else {
      snackbarStore.openSnackbar('error', "Columns number and Column titles number doesn't match");
    }
  }

  function removeSection(id: number) {
    const index = sections.value.findIndex((item) => item.id === id);
    if (index != -1) {
      sections.value.splice(index, 1);
    } else {
      snackbarStore.openSnackbar('error', "Couldn't find the section to delete, the dev probably sucks");
    }
  }

  function addRadionButton(buttonColor: string, buttonName: string) {
    const id = Date.now();

    buttons.value.push({
      id,
      buttonColor,
      buttonName
    });
  }

  function removeRadioButton(id: number) {
    const index = buttons.value.findIndex((item) => item.id === id);
    if (index != -1) {
      buttons.value.splice(index, 1);
    } else {
      snackbarStore.openSnackbar('error', "Couldn't find the button to delete, the dev probably sucks");
    }
  }

  return { sections, buttons, addSection, removeSection, addRadionButton, removeRadioButton };
});

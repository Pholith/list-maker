<template>
  <v-dialog scrollable max-width="500" v-model:model-value="isDialogOpened">
    <template #activator="{ props: dialogProps }">
      <v-tooltip v-bind="dialogProps" :text="whichTitle(isEditing)">
        <template #activator="{ props }">
          <v-btn
            v-bind="{ ...dialogProps, ...props }"
            :icon="isEditing ? 'mdi-text-box-edit' : 'mdi-plus'"
            size="large"
            color="tertiary"
          />
        </template>
      </v-tooltip>
    </template>
    <template #default>
      <v-card :title="whichTitle(isEditing)">
        <v-card-item style="padding-top: 0; overflow: scroll">
          <v-text-field label="Section Name" v-model="sectionTitle" />
          <v-row>
            <v-number-input
              :reverse="false"
              :max="2"
              :min="1"
              controlVariant="default"
              label="Number of columns"
              hideInput
              :inset="false"
              v-model="numColumns"
              style="max-width: 60px"
            />
            <div style="padding-top: 15px; padding-right: 20px">
              {{ numColumns }}
            </div>
            <v-text-field style="padding-right: 5px" label="Column name" v-model="columnTitles[0]"></v-text-field>
            <v-text-field
              v-show="numColumns > 1"
              style="padding-left: 5px"
              label="Column name"
              width="18%"
              v-model="columnTitles[1]"
            ></v-text-field>
          </v-row>
          <v-row v-for="i in [...Array(pretendElements.length).keys()]">
            <v-text-field
              :label="i + 1 + 'th line element'"
              v-model="pretendElements[i]"
              :hide-details="i != pretendElements.length - 1"
            />
          </v-row>
          <v-row style="display: flex; justify-content: space-evenly">
            <v-btn prepend-icon="mdi-plus" text="Add line" rounded="sm" color="secondary" @click="addLine" />
            <v-btn prepend-icon="mdi-minus" text="Remove line" rounded="sm" color="red" @click="removeLine" />
          </v-row>
          <v-row style="padding-bottom: 18px" />
        </v-card-item>
        <v-card-actions style="display: flex; justify-content: center">
          <v-btn variant="flat" color="primary" :text="isEditing ? 'Edit' : 'Create'" @click="editCreateSection" />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import type { ExKink } from '@/models/kinks';
import type { Section } from '@/models/models';
import { useListStore } from '@/stores/list-store';
import { ref, watch } from 'vue';

const isDialogOpened = ref(false);
const { section, isEditing } = defineProps<{ section?: Section; isEditing: boolean }>();
const sectionTitle = ref<string>(section?.title ?? '');
const numColumns = ref<number>(section?.columnTitles.length ?? 1);
const columnTitles = ref<string[]>([section?.columnTitles[0] ?? '', section?.columnTitles[1] ?? '']);
const pretendElements = ref<string[]>([]);

watch(isDialogOpened, () => {
  if (isDialogOpened.value) {
    sectionTitle.value = section?.title ?? '';
    numColumns.value = section?.columnTitles.length ?? 1;
    columnTitles.value = [section?.columnTitles[0] ?? '', section?.columnTitles[1] ?? ''];
    pretendElements.value = [];
    section?.elements.forEach((element) => {
      pretendElements.value.push(element.name);
    });
  }
});

const listStore = useListStore();

function whichTitle(isEditing: boolean) {
  return isEditing ? 'Edit Section' : 'Create Section';
}

function addLine() {
  pretendElements.value.push('');
}

function removeLine() {
  pretendElements.value.pop();
}

async function editCreateSection() {
  if (section) {
    if (isEditing) {
      while (columnTitles.value.length > numColumns.value) {
        columnTitles.value.pop();
      }
      const kinks: ExKink[] = [];
      pretendElements.value.forEach((pretendElement) => {
        const defaultRating: Record<string, string> = {};
        columnTitles.value.forEach((key) => {
          defaultRating[key] = 'NaN';
        });
        kinks.push({
          name: pretendElement,
          ratings: section.elements.find((element) => element.name === pretendElement)?.ratings ?? defaultRating
        });
      });
      listStore.editSection(section.id, sectionTitle.value, columnTitles.value, kinks);
    }
  } else {
    while (columnTitles.value.length > numColumns.value) {
      columnTitles.value.pop();
    }
    const kinks: ExKink[] = [];
    pretendElements.value.forEach((pretendElement) => {
      const defaultRating: Record<string, string> = {};
      columnTitles.value.forEach((key) => {
        defaultRating[key] = 'NaN';
      });
      kinks.push({
        name: pretendElement,
        ratings: defaultRating
      });
    });
    listStore.addSection(sectionTitle.value, columnTitles.value, kinks);
  }
  isDialogOpened.value = false;
}
</script>

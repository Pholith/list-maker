import type { RadioButton, Section } from '@/models/models';

export const defaultButtons: RadioButton[] = [
  {
    id: 0,
    buttonColor: 'blue',
    buttonName: 'favorite'
  },
  {
    id: 1,
    buttonColor: 'green',
    buttonName: 'like'
  },
  {
    id: 2,
    buttonColor: 'yellow',
    buttonName: 'interested'
  },
  {
    id: 3,
    buttonColor: 'red',
    buttonName: 'no'
  }
];

export const defaultSections: Section[] = [
  {
    id: 0,
    title: 'First Section',
    numColumn: 2,
    columnTitles: ['Column A', 'Columbi a'],
    elements: ['first element', 'second element', 'first element']
  },
  {
    id: 1,
    title: 'Second Section',
    numColumn: 1,
    columnTitles: ['Column A'],
    elements: ['first element', 'second element', 'first element']
  },
  {
    id: 2,
    title: 'Third Section',
    numColumn: 2,
    columnTitles: ['Column A', 'Columbi a'],
    elements: ['first element', 'second element', 'first element']
  },
  {
    id: 3,
    title: 'Fourth Section',
    numColumn: 2,
    columnTitles: ['Column A', 'Columbi a'],
    elements: ['first element', 'second element', 'first element']
  }
];

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
    columnTitles: ['Column A', 'Columbi a'],
    elements: ['first element', 'second element', 'third element']
  },
  {
    id: 1,
    title: 'Second Section',
    columnTitles: ['Column A'],
    elements: ['first element', 'second element', 'thrid element']
  },
  {
    id: 2,
    title: 'Third Section',
    columnTitles: ['Column A', 'Columbi a'],
    elements: ['first element', 'second element']
  },
  {
    id: 3,
    title: 'Fourth Section',
    columnTitles: ['Column A', 'Columbi a'],
    elements: ['first element', 'second element', 'third element', 'fourth element']
  },
    {
    id: 4,
    title: 'Fifth Section',
    columnTitles: ['Column A', 'Columbi a'],
    elements: ['first element', 'second element', 'third element',]
  }
];

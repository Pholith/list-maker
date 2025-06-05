import type { ExKink } from '@/models/kinks';
import type { RadioButton, Section } from '@/models/models';

export const defaultButtons: RadioButton[] = [
  {
    id: 0,
    buttonColor: '#0000FF',
    buttonName: 'favorite'
  },
  {
    id: 1,
    buttonColor: '#00FF00',
    buttonName: 'like'
  },
  {
    id: 2,
    buttonColor: '#FFFF00',
    buttonName: 'interested'
  },
  {
    id: 3,
    buttonColor: '#FF0000',
    buttonName: 'no'
  }
];

const defaultKink: ExKink = {
  name: 'def',
  ratings: {
    'Column A': 'NaN',
    'Columbi a': 'NaN'
  }
};

export const defaultSections: Section[] = [
  // {
  //   id: 0,
  //   title: 'First Section',
  //   columnTitles: ['Column A', 'Columbi a'],
  //   elements: [
  //     {
  //       name: 'def',
  //       ratings: {
  //         'Column A': 'NaN',
  //         'Columbi a': 'NaN'
  //       }
  //     },
  //     defaultKink,
  //     defaultKink
  //   ]
  // },
  // {
  //   id: 1,
  //   title: 'Second Section',
  //   columnTitles: ['Column A'],
  //   elements: [defaultKink, defaultKink, defaultKink]
  // },
  // {
  //   id: 2,
  //   title: 'Third Section',
  //   columnTitles: ['Column A', 'Columbi a'],
  //   elements: [defaultKink, defaultKink]
  // },
  // {
  //   id: 3,
  //   title: 'Fourth Section',
  //   columnTitles: ['Column A', 'Columbi a'],
  //   elements: [defaultKink, defaultKink, defaultKink, defaultKink]
  // },
  // {
  //   id: 4,
  //   title: 'Fifth Section',
  //   columnTitles: ['Column A', 'Columbi a'],
  //   elements: [defaultKink, defaultKink, defaultKink]
  // }
];

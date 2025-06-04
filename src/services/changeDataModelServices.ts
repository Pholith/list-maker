import type { InKink, InKinkCategory } from '@/models/kinks';
import { useListStore } from '@/stores/list-store';
import { generateId } from './idGenerator';
import type { Rating } from '@/models/ratings';

export function listMakerDataToAPI() {
  const listStore = useListStore();
  let categories: InKinkCategory[] = [];
  listStore.sections.forEach((section) => {
    let cat: InKinkCategory = {
      id: generateId(),
      kinks: [],
      name: section.title,
      subcategories: section.columnTitles
    };
    section.elements.forEach((element) => {
      const kink: InKink = {
        id: generateId(),
        name: element.name,
        ratings: element.ratings,
        comment: element.comment
      };
      cat.kinks.push(kink);
    });
    categories.push(cat);
  });
  let ratings: Rating[] = [];
  listStore.buttons.forEach((button) => {
    ratings.push({
      name: button.buttonName,
      color: button.buttonColor
    });
  });
  return { categories, ratings };
}

import type { ExKink } from "./kinks";

export interface Section {
  id: number;
  title: string;
  columnTitles: string[];
  elements: ExKink[];
}

export interface RadioButton {
  id: number;
  buttonColor: string;
  buttonName: string;
}
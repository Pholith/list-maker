export interface Section {
  id: number;
  title: string;
  numColumn: number;
  columnTitles: string[];
  elements: string[];
}

export interface RadioButton {
  id: number;
  buttonColor: string;
  buttonName: string;
}
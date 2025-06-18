import type { RadioButton, Section } from "@/models/models";

export const defaultButtons : RadioButton[] = [
 {
     id: 0,
     buttonColor: "blue",
     buttonName: "favorite"
 },
  {
     id: 1,
     buttonColor: "green",
     buttonName: "like"
 },
  {
     id: 2,
     buttonColor: "yellow",
     buttonName: "why not"
 },
  {
     id: 3,
     buttonColor: "red",
     buttonName: "NO"
 },
]

export const defaultSections : Section[] = [
    {
        id: 0,
        title: "Section 1",
        columnTitles: ["Column A", "Column B"],
        elements: [
            {
                name: "line 1",
                ratings: {}
            },
                        {
                name: "line 2",
                ratings: {}
            },
        ]
    },
        {
        id: 1,
        title: "Section 2",
        columnTitles: ["Column A", "Column B"],
        elements: [
            {
                name: "line 1",
                ratings: {}
            },
                        {
                name: "line 2",
                ratings: {}
            },
        ]
    },
]
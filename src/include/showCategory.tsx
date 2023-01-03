export enum showCategory {
  All,
  SWE,
  Game,
  Teach,
  Person 
};

export interface showCategorySpecifier {
  categoryColor: string;
  showWhat: showCategory;
}
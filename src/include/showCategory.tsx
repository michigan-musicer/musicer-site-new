export enum showCategory {
  All,
  SWE,
  Game,
  Teach,
  Person 
};

export interface showCategorySpecifier {
  showWhat: showCategory;
}
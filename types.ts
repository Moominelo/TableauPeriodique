export enum ElementCategory {
  AlkaliMetal = "Métaux alcalins",
  AlkalineEarthMetal = "Métaux alcalino-terreux",
  TransitionMetal = "Métaux de transition",
  PostTransitionMetal = "Métaux pauvres",
  Metalloid = "Métalloïdes",
  ReactiveNonmetal = "Non-métaux",
  Halogen = "Halogènes", 
  NobleGas = "Gaz nobles",
  Lanthanide = "Lanthanides",
  Actinide = "Actinides",
  Unknown = "Propriétés inconnues"
}

export type CategoryString = 
  | "Métaux alcalins" 
  | "Métaux alcalino-terreux" 
  | "Métaux de transition" 
  | "Métaux pauvres" 
  | "Métalloïdes" 
  | "Non-métaux" 
  | "Halogènes" 
  | "Gaz nobles" 
  | "Lanthanides" 
  | "Actinides" 
  | "Propriétés inconnues";

export interface IElement {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: string;
  category: CategoryString;
  group?: number;
  period: number;
  electronConfiguration: string; // LaTeX
  meltingPoint?: number | string; // Kelvin
  boilingPoint?: number | string; // Kelvin
  density?: number; // g/cm3
  summary: string;
  image: string;
  source?: string;
  xpos: number; // grid column 1-18
  ypos: number; // grid row 1-7
  
  // Advanced Properties
  block: 's' | 'p' | 'd' | 'f';
  formulaRepresentationLatex?: string;
}

export interface ElementState {
  searchTerm: string;
  selectedElement: IElement | null;
  darkMode: boolean;
}
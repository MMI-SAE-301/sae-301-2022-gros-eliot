export interface Montre {
  libelle_montre?: string;
  bracelet?: string;
  boitier?: string;
  ecran?: string;
}

export const colors = {
  "#FFFFFF": "Blanc",
  "#C1C1C1": "Gris",
  "#000000": "Noir",
  "#FFD875": "Or",
  "#FFCAC3": "Or rose",

  "#FFA9C8": "Rose",
  "#6C253F": "Rose foncé",
  "#FFAEAE": "Rouge pastel",
  "#C83C3C": "Rouge",
  "#511818": "Bordeaux",
  "#D4B1E0": "Violet",
  "#8ACFF5": "Bleu",
  "#1D4594": "Bleu foncé",
  "#ABDAA4": "Vert",
  "#175138": "Vert foncé",
  "#FAFFC0": "Jaune pastel",
  "#FFD392": "Orange",
  "#C88B77": "Argile",

};
export const colorsEcran = {
  "#000000": "Noir",
  "#FFFFFF": "Blanc",
};

export const materiaux = [
  {
    value: "",
    label: "Plastique",
  },
  {
    value: "/images/cuir.webp",
    label: "Cuir",
  },
  {
    value: "/images/metal.webp",
    label: "Métal",
  },
];
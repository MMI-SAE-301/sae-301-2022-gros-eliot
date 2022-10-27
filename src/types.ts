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
  "#C83C3C": "Rouge",
  "#D4B1E0": "Violet",
  "#8ACFF5": "Bleu",
  "#ABDAA4": "Vert",

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
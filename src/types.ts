export interface Montre {
  libelle?: string,
  bracelet?: string;
  boitier?: string;
  ecran?: string;
}

export const colors = {
  "#FFFFFF": "Blanc",
  "#000000": "Noir",
  "#FFD875": "Or",
  "#FFCAC3": "Or rose",
  "#FF4747": "Rouge",
  "#85CC79": "Vert",
  "#5547FF": "Bleu",
  "#A547C7": "Violet",
  "#808080": "Gris",

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
    value: "/images/cuir.png",
    label: "Cuir",
  },
  {
    value: "/images/metal.png",
    label: "Métal",
  },
];
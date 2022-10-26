export interface Montre {
  libelle?: string,
  bracelet?: string;
  boitier?: string;
  ecran?: string;
}

export const colors = {
  "#000000": "Noir",
  "#FFD875": "Or",
  "#FFCAC3": "Or rose",
  
  "#FFFFFF": "Blanc",
  "#FF0000": "Rouge",
  "#00FF00": "Vert",
  "#0000FF": "Bleu",
  "#FFFF00": "Jaune",
  "#FF00FF": "Magenta",
  "#00FFFF": "Cyan",
  "#C0C0C0": "Gris clair",
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
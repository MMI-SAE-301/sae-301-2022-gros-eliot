export interface Montre {
  libelle?: string,
  bracelet?: string;
  boitier?: string;
  ecran?: string;

}

export const colors = {
  "#3F3F3F": "Noir",
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
  "#800000": "Marron",
  "#808000": "Olive",
};

export const materiaux = [
  {
    value: "/images/cuir.png",
    label: "Cuir",
  },
  {
    value: "/images/tissu.png",
    label: "Tissu",
  },
  {
    value: "/images/synthetique.png",
    label: "Synthétique",
  },
];
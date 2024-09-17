import image01 from "@asim/intro/intro_01.png";
import image02 from "@asim/intro/intro_02.png";
import image03 from "@asim/intro/intro_03.png";

export const introDatas: Array<{
  id: number;
  src: string;
  alt: string;
  txt: string;
}> = [
  {
    id: 1,
    src: image01,
    alt: "Start Image 1",
    txt: "Vous êtes PAUL ATREIDES, fils du Duc Leto Atréides.",
  },
  {
    id: 2,
    src: image02,
    alt: "Start Image 2",
    txt: "Les HARKONNENS, ennemis héréditaires de votre famille, sont venus sur Dune contrôler la production d'épice, en utilisant leurs méthodes brutales.",
  },
  {
    id: 3,
    src: image03,
    alt: "Start Image 3",
    txt: "Votre mission est de reprendre le contrôle de Dune et de détruire les Harkonnens.",
  },
];

import { StaticImageData } from "next/image";

export interface Produto {
    id: number;
    nome: string;
    categoria: string;
    preco: number;
    descricao: string;
    imagem: StaticImageData; 
  }
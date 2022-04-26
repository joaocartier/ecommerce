// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

type Collection = string;

type Size = {
  name: string;
  available: boolean;
};

export interface IProduct {
  collection: Collection;
  name: string;
  price: number;
  inStock: boolean;
  description: string;
  sizes: Size[];
  imageUrl: string;
}

const SIZES: Size[] = [
  {
    name: "XS",
    available: true,
  },
  {
    name: "S",
    available: true,
  },
  {
    name: "M",
    available: true,
  },
  {
    name: "L",
    available: false,
  },
  {
    name: "XL",
    available: true,
  },
];

const PRODUCTS: IProduct[] = [
  {
    collection: "Hoodie Collection",
    name: "Hoodie",
    price: 120,
    inStock: true,
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet",
    sizes: SIZES,
    imageUrl:
      "https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(PRODUCTS[0]);
}

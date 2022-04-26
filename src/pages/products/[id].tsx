import { GetServerSideProps } from "next";
import React, { useState } from "react";

import Button from "@/components/buttons/Button";
import Layout from "@/components/layout/Layout";
import NextImage from "@/components/NextImage";

import { IProduct } from "@/pages/api/hello";

const SIZES = [
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

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const [selectedSize, setSelectedSize] = useState(SIZES[0]);
  return (
    <Layout>
      <main className="layout grid grid-cols-2 gap-x-32 pt-8">
        <section className="relative w-full">
          <div className="overflow-hidden rounded">
            <NextImage
              className="min-h-[565px] w-full"
              imgClassName="rounded-lg"
              width="100%"
              height="100%"
              useSkeleton
              layout="fill"
              objectFit="cover"
              alt={`${product.name} Product Image`}
              src={product.imageUrl}
            />
          </div>
        </section>
        <section className="my-auto flex flex-col gap-y-6">
          <div>
            <p className="font-bold uppercase leading-6 text-gray-500">
              {product.collection}
            </p>
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-6xl font-bold">{product.name}</h2>
              <span className="text-5xl font-bold text-gray-500">
                £ {product.price}
              </span>
            </div>
          </div>
          <p className="w-min whitespace-nowrap rounded bg-green-100 px-3 py-1 font-semibold text-green-700">
            In Stock
          </p>
          <p className="font-normal text-gray-800">{product.description}</p>
          <div className="flex items-center space-x-6">
            {product.sizes.map((size, idx) => {
              return (
                <Button
                  disabled={!size.available}
                  variant={
                    selectedSize.name === size.name ? "primary" : "ghost"
                  }
                  key={idx}
                  onClick={() => setSelectedSize(size)}
                >
                  {size.name}
                </Button>
              );
            })}
          </div>
          <hr />
          <div className="flex space-x-4">
            <Button>Buy Now</Button>
            <Button variant="outline">Add to Bag</Button>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const result = await fetch(`http://localhost:3000/api/hello`);
    const data: IProduct = await result.json();
    return {
      props: {
        product: data,
      },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {
        product: null,
      },
    };
  }
};

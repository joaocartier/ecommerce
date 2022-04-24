import React, { useState } from "react";

import Button from "@/components/buttons/Button";
import Layout from "@/components/layout/Layout";
import NextImage from "@/components/NextImage";

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

export default function Product() {
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
              alt="Product Image"
              src="https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80"
            />
          </div>
        </section>
        <section className="my-auto flex flex-col gap-y-6">
          <div>
            <p className="font-bold leading-6 text-gray-500">
              HOODIE COLLECTION
            </p>
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-6xl font-bold">Hoodie</h2>
              <span className="text-5xl font-bold text-gray-500">£ 120</span>
            </div>
          </div>
          <p className="w-min whitespace-nowrap rounded bg-green-100 px-3 py-1 font-semibold text-green-700">
            In Stock
          </p>
          <p className="font-normal text-gray-800">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="flex items-center space-x-6">
            {SIZES.map((size, idx) => {
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

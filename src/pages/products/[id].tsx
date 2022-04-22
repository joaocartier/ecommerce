import React from "react";

import Layout from "@/components/layout/Layout";
import NextImage from "@/components/NextImage";

export default function Product() {
  return (
    <Layout>
      <div className="layout grid grid-cols-2 gap-x-32 pt-8">
        <div className="relative w-full">
          <div className="overflow-hidden rounded">
            <NextImage
              className="min-h-[565px] w-full"
              width="100%"
              height="100%"
              useSkeleton
              layout="fill"
              objectFit="cover"
              alt="Product Image"
              src="https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80"
            />
          </div>
        </div>
        <div>Product Info</div>
      </div>
    </Layout>
  );
}

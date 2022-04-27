import React from "react";

import NextImage from "@/components/NextImage";

export default function Item() {
  return (
    <div className="flex items-center gap-x-4 pr-16">
      <NextImage
        imgClassName="rounded-lg"
        useSkeleton
        width={72}
        height={72}
        objectFit="cover"
        alt="Product Image"
        src="https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80"
      />
      <div className="flex flex-col ">
        <span className="font-semibold">Hoodie</span>
        <span className="text-small font-medium text-gray-500">£ 120</span>
      </div>
    </div>
  );
}

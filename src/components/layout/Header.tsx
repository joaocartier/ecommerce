import * as React from "react";

import Cart from "@/components/cart/Cart";
import UnstyledLink from "@/components/links/UnstyledLink";

const links = [
  { href: "/products/hoodie", label: "Hoodie" },
  { href: "/", label: "Route 2" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="layout flex h-24 items-center justify-between border-b border-gray-200">
        <div className="flex items-center">
          <UnstyledLink
            href="/"
            className="text-3xl font-bold hover:text-gray-900"
          >
            Clothes
          </UnstyledLink>
          <nav className="ml-32 w-full">
            <ul className="flex items-center space-x-12">
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink
                    href={href}
                    className="inline-flex w-full items-center justify-center gap-x-2 rounded-md px-4 py-2  font-medium text-gray-600 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-opacity-75"
                  >
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Cart />
      </div>
    </header>
  );
}

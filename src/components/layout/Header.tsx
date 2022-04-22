import * as React from "react";

import UnstyledLink from "@/components/links/UnstyledLink";

const links = [
  { href: "/products/hoodie", label: "Hoodie" },
  { href: "/", label: "Route 2" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="layout flex h-24 items-center border-b border-gray-200">
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
                <UnstyledLink href={href} className="font-medium text-gray-600">
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

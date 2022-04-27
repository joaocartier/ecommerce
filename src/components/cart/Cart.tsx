import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { AiFillShopping } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

import Button from "@/components/buttons/Button";
import Item from "@/components/cart/Item";
import ArrowLink from "@/components/links/ArrowLink";
import UnstyledLink from "@/components/links/UnstyledLink";

export default function Cart() {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full items-center justify-center gap-x-2 rounded-md px-4 py-2 font-medium text-gray-600 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-opacity-75">
            My Bag
            <AiFillShopping />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2  origin-top-right divide-y  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="max-h-96  divide-y divide-gray-100 overflow-y-auto px-2 ">
              {new Array(4).fill("item").map((item, key) => (
                <div key={key} className="py-2">
                  <Menu.Item>
                    {() => (
                      <div className="flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-opacity-75">
                        <UnstyledLink
                          href="/"
                          className={`flex w-full rounded-lg bg-white p-2 focus:outline-none focus-visible:ring-2 
                            focus-visible:ring-gray-600 focus-visible:ring-opacity-75
                          `}
                        >
                          <Item />
                        </UnstyledLink>
                        <Button variant="ghost" className="ml-6">
                          <FaTrash />
                        </Button>
                      </div>
                    )}
                  </Menu.Item>
                </div>
              ))}
            </div>
            <div>
              <Menu.Item>
                {({ active }) => (
                  <ArrowLink
                    className={`flex items-center gap-x-2 p-4 transition hover:bg-gray-100 ${
                      active ? "bg-gray-100" : "bg-white"
                    }`}
                    href="/"
                    as={UnstyledLink}
                  >
                    Go to bag
                  </ArrowLink>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

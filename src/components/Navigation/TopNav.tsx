"use client";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const TopNav = () => {
  const [open, setOpen] = useState(false);


  return (
    <header className="sm:py-2 bg-white fixed border-b z-50 top-0 sm:w-full w-screen">
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 transition-opacity duration-300
           ease-linear data-[closed]:opacity-0 data-[open]:opacity-30 bg-white"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-1/2 max-w-xs transform flex-col overflow-y-auto bg-white pb-12 
            shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">

              <div className="flow-root">
                <Link
                  href="/about"
                  className="-m-2 block p-2 font-medium text-gray-700"
                >
                  About Us
                </Link>
                <Link href="/company">
                  <span className="-m-2 block p-2 font-medium text-gray-700">
                    Company Details
                  </span>
                </Link>
                <Link href="/products">
                  <span className="-m-2 block p-2 font-medium text-gray-700">
                    Our Products
                  </span>
                </Link>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <nav aria-label="Top" className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex h-16 items-center">
            {/* Logo */}
            <div className=" flex space-x-4 items-center lg:ml-0">
              <Link href="/">
                <span className="sr-only">ninezero logo</span>
                <Image
                  alt="ninezero logo"
                  height={1500}
                  width={1500}
                  src="/nine0.jpeg"
                  className="h-[3.5rem] w-auto rounded-full"
                />
              </Link>
              <h1 className="text-red-500 sm:block hidden text-2xl">ninezero</h1>
            </div>

            <div className="ml-auto flex items-center">

              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="relative block sm:hidden rounded-md bg-white  font-semibold text-black lg:hidden"
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon aria-hidden="true" className="h-7 w-7" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

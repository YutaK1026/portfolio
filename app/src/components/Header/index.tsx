'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation'


export default function Header() {
  const pathname = usePathname()
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setOpen(!isOpen);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };
  

  return (
    <header className="p-6 flex justify-between items-center">
      <br></br>
      <nav
        className={
          isOpen
            ? "z-40 bg-blue-100 fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col"
            : "fixed right-[-100%] md:right-4"
        }
      >
        <ul
          className={
            isOpen
              ? "flex h-screen justify-center items-center flex-col gap-6 text-xl"
              : "block md:flex md:gap-8"
          }
        >
          <li>
            {pathname=="/about" ?
            <Link onClick={handleMenuClose} href="/about" className="">
              <button className="bg-white">
                <p className="text-green-700 font-extrabold">
                  About 
                </p>
              </button>
            </Link> : 
            <Link onClick={handleMenuClose} href="/about" className="hover:bg-slate-100">
              About
            </Link>}
          </li>
          <li>
            {pathname=="/works" ?
            <Link onClick={handleMenuClose} href="/works" className="text-green-700 font-extrabold">
              <button className="bg-white">
                <p className="text-green-700 font-extrabold">
                  Work 
                </p>
              </button>
            </Link> : 
            <Link onClick={handleMenuClose} href="/works" className="hover:bg-slate-100">
              Works
            </Link>}
          </li>
          <li>
            {pathname=="/skill" ?
            <Link onClick={handleMenuClose} href="/skill" className="text-green-700 font-extrabold">
              <button className="bg-white">
                <p className="text-green-700 font-extrabold">
                  Skill
                </p>
              </button>
            </Link> : 
            <Link onClick={handleMenuClose} href="/skill" className="hover:bg-slate-100">
              Skill
            </Link>}
          </li>
          <li>
            {pathname=="/command" ?
            <Link onClick={handleMenuClose} href="/command" className="">
              <button className="bg-white">
                <p className="text-green-700 font-extrabold">
                  Command
                </p>
              </button>
            </Link> : 
            <Link onClick={handleMenuClose} href="/command" className="hover:bg-slate-100">
              Command
            </Link>}
          </li>
          <li>
            {pathname=="/contact" ?
            <Link onClick={handleMenuClose} href="/contact" className="text-green-700 font-extrabold">
              <button className="bg-white">
                <p className="text-green-700 font-extrabold">
                  Contact
                </p>
              </button>
            </Link> : 
            <Link onClick={handleMenuClose} href="/contact" className="hover:bg-slate-100">
              Contact
            </Link>}
          </li>

        </ul>
      </nav>
      <button className="z-50 space-y-2 md:hidden" onClick={handleMenuOpen}>
        <span
          className={
            isOpen
              ? "block w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 duration-300"
              : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
        <span
          className={
            isOpen ? "block opacity-0 duration-300" : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
        <span
          className={
            isOpen
              ? "block w-8 h-0.5 bg-gray-600 -rotate-45 duration-300"
              : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
      </button>
    </header>
  );
}


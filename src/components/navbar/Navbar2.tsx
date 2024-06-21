"use client";
import Image from "next/image";
import SearchBar from "../searchbar/SearchBar";
import React from "react";
import Link from "next/link";

interface IContact {
  icons: string;
  label: string;
  href: string;
}
export default function Navbar2() {
  const contact: IContact[] = [
    {
      icons: "person",
      label: "Username",
      href: "/"
    },
    {
      icons: "local_mall",
      label: "Pocket",
      href: "/pocket"
    },
  ];
  return (
    <main className="w-full py-2 px-16">
      <div className="flex justify-between">
        <div className="cursor-pointer">
          <Link href="/home">
            <Image
              src="/img/Pokemon_logo.png"
              alt="My Image"
              width={150}
              height={50}
            ></Image>
          </Link>
        </div>
        <SearchBar />
        <div className="flex gap-2 pr-8">
          {contact.map((items, index) => (
            <div key={index} className="flex gap-2 pt-4 cursor-pointer">
              <Link className="flex gap-2" href ={items.href}>
              <span className="material-symbols-outlined">{items.icons}</span>
              <p>{items.label}</p>|
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

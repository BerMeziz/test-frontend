"use client";
import React, { useState } from "react";

interface IContact {
  icons: string;
  label: string;
}

export default function Navbar1() {
  const contact:IContact[] = [
    {
      icons: "location_on",
      label: "Contact 123456",
    },
    {
      icons: "local_shipping",
      label: "Track your order",
    },
    {
      icons: "grade",
      label: "All Offers",
    },
  ];

  return (
    <main className="bg-yellow-400 w-full py-2 px-16">

      <div className="flex justify-between">
        <p>Welcome to Pokemon shop</p>
        <div className="flex gap-2">
          {contact.map((items, index) => (
            <div key={index} className="flex gap-2 cursor-pointer">
              <span className="material-symbols-outlined">{items.icons}</span>
              <p>{items.label}</p>|
            </div>
          ))}
        </div>
      </div>



    </main>
  );
}

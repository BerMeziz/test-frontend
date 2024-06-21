"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface INavbar3 {
  switchCard?: (tab:string) => void 
  counts: string
} 
  
export default function Navbar3({ switchCard,  counts}:INavbar3) {
  const [iconTab, setIconTab] = useState<string>("browse");

  return (
    <main className=" pt-4 w-full py-2 px-16">
      <div className="flex justify-between">
        <p className="p-2">Products({counts})</p>
        <div className="flex gap-2">
          <div onClick = {()=>{  switchCard &&  switchCard("browse"),  setIconTab("browse")}} className={` ${iconTab =='browse'?'bg-yellow-400':null} flex justify-center items-center p-2 rounded-md cursor-pointer`}>
          <span className="material-symbols-outlined">browse</span>
          </div>
          <div onClick = {()=>{ switchCard &&  switchCard("data_table"), setIconTab("data_table")}} className={` ${iconTab =='data_table'?'bg-yellow-400':null} flex justify-center items-center p-2 rounded-md cursor-pointer`}>
          <span className="material-symbols-outlined">data_table</span>
          </div>
          
        </div>
      </div>
    </main>

  );
}

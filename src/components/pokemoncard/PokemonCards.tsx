"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface PokemonCardProps {
  name: string;
  types: string[];
}
  const PokemonCard: React.FC<PokemonCardProps> = ({ name, types }) => {
    const router = useRouter();

    const handleDetailClick = () => {
        router.push(`/detail/?pokemon=${name} `)
   
    }


  return (
    <div className="border rounded shadow-lg overflow-hidden">
    <div className=" p-4">
      <Image src={`/img/${name}.png`} alt={name} width={250} height={100} className="mx-auto"/>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-bold">{name}</h2>
      <div className="mt-2 mb-4">
        {types.map((type, index) => (
          <span key={index} className={`text-sm px-2 py-1 rounded-full mr-2 ${type === 'Fire' ? 'bg-orange-100 text-yellow-500' : type === 'Grass' ? 'bg-orange-100 text-yellow-500' : 'bg-orange-100 text-yellow-500'}`}>
            {type}
          </span>
        ))}
      </div>
      <button onClick = {handleDetailClick} className="bg-gray-800 text-white py-2 px-4 rounded w-full hover:bg-yellow-400">Detail</button>
    </div>
  </div>
  )
  }


export default PokemonCard

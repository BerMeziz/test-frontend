"use client"

import React from 'react'
import Image from 'next/image';

interface IPokemonListProps {
  name: string;
  types: string[];
  abilities: string[];
}
  const PokemonList: React.FC<IPokemonListProps> = ({ name, types, abilities }) => {
  return (
    <div className="flex shadow">
    <div className=" p-4">
      <Image src={`/img/${name}.png`} alt={name} width={80} height={80} className=""/>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-bold">{name}</h2>
      <div className="mt-2 mb-4">
        {types.map((type, index) => (
          <span key={index} className={`text-sm px-2 py-1 rounded-full mr-2 ${type === 'Fire' ? 'bg-orange-100 text-yellow-500' : type === 'Grass' ? 'bg-orange-100 text-yellow-500' : 'bg-orange-100 text-yellow-500'}`}>
            {type}
          </span>
        ))}
        <p className='pt-2 text-gray-700'>Abilities: <span>{abilities.join(", ")}</span></p>
      </div>
      {/* <button className="bg-gray-800 text-white py-2 px-4 rounded w-full hover:bg-yellow-400">Detail</button> */}
    </div>
  </div>
  )
  }


export default PokemonList

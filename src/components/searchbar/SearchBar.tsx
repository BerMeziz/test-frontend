"use client"
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useDispatch } from "@/store";
import { fetchPokemonSearchAsync, searchNameSlice } from "@/store/features/searchoff";

const pokemonData = [
  {id: 1, name: 'Bulbasaur', image: '/public/img/bulbasaur.jpg'},
]
export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  
  const handleSearch = () => {
    const results = pokemonData.filter(pokemon => 
      `pokemon.name.toLowerCase().includes(searchQuery,toLowerCase())`
    );
    // setSearchResults(results);
  }

 
  const handleInputChang = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    handleSearch();

    dispatch(searchNameSlice.actions.setSearch(e.target.value))
    

  };

  return (
    <div className="flex justify-center mt-5">
      <div className="flex items-center bg-gray-50 p-3 gap-3 rounded-md shadow-md w-[500px] h-[50px] focus-within:border focus-within:border-yellow-500">
        <span className="material-symbols-outlined">search</span>
        <input
          type="text"
          placeholder="Search name Pokémon ..."
          value={searchQuery}
          onChange={handleInputChang}
          className="w-full border-none outline-none bg-transparent text-base text-gray-700"
        />
      </div>
      <div className="mt-3">
        {/* {searchResults.map(pokemon => ( */}
           {/* <div key={pokemon.id} className="flex items-center gap-2 p-2 bg-white shadow-md rounded-md">
             <img src={pokemon.image} alt={pokemon.name} className="w-10 h-10 rounded-full" />
             <span className="text-gray-800">{pokemon.name}</span>
           </div>
         ))} */}
        {/* {searchResults.length === 0 && (
          <p className="text-gray-600 mt-2">No Pokémon found.</p>
        )} */}
      </div>
    </div>
  );
}


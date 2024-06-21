import React from "react";
import Navbar1 from "@/components/navbar/Navbar1";
import Navbar2 from "@/components/navbar/Navbar2";
import Navbar3 from "@/components/navbar/navbar3";
import PokemonList from "@/components/pokemoncard/PokemonList";


export default function page() {
  const pokemons = [
    {
      name: "Bulbasaur",
      image: "/img/bulbasaur.jpg",
      types: ["Grass", "Poison"],
    },
    {
      name: "Ivysaur",
      image: "/img/ivysaur.png",
      types: ["Grass", "Poison"],
    },
    {
      name: "Venusaur",
      image: "/img/venusaur.png",
      types: ["Grass", "Poison"],
    },
    {
      name: "Charmander",
      image: "/img/charmander.png",
      types: ["Fire"],
    },
    {
      name: "Charmeleon",
      image: "/img/charmeleon.png",
      types: ["Fire"],
    },
    {
      name: "Charizard",
      image: "/img/charizard.png",
      types: ["Fire", "Flying"],
    },
    {
      name: "Squirtle",
      image: "/img/squirtle.png",
      types: ["Water"],
    },
    {
      name: "Wartortle",
      image: "/img/wartortle.png",
      types: ["Water"],
    },
    {
      name: "Blastoise",
      image: "/img/blastoise.png",
      types: ["Water"],
    },
    {
      name: "Caterpie",
      image: "/img/caterpie.png",
      types: ["Bug"],
    },
    {
      name: "Metapod",
      image: "/img/metapod.png",
      types: ["Bug"],
    },
    {
      name: "Butterffree",
      image: "/img/butterfree.png",
      types: ["Bug", "Flying"],
    },
  ];
  return (
    <main>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      {/* <div className=" w-full h-screen flex justify-start px-16 p-2">
        {pokemons.map((pokemon, index) => (
          <PokemonList
            key={index}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
          />
        ))}
      </div> */}
    </main>
  );
}

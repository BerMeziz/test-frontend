"use client"
import Navbar1 from '@/components/navbar/Navbar1'
import Navbar2 from '@/components/navbar/Navbar2'
import Navbar3 from '@/components/navbar/navbar3'
import PokemonCard from '@/components/pokemoncard/PokemonCards'
import PokemonList from '@/components/pokemoncard/PokemonList'
import { getPokemonList } from '@/lib/pokemonAPI'
import React, { useEffect, useState } from 'react'
import Footer from '@/components/footer/Footer'
import { loadingSelector } from '@/store/features/loading'
import { useDispatch, useSelector } from '@/store'
import { fetchPokemonListAsync } from '@/store/features'



interface IPokemonData {
  name: string;
  types: string[];
  abilities: string[];
}


export default function HomePage() {
  const dispatch = useDispatch();
  
  const [results,setResultsData] = useState<any>()
  const [iconTab, setIconTab] = useState<string>("browse");
 const [counts, setCounts] = useState<string>("")
  useEffect(() => {
    const fetchDataPokemon = async () => {
      const response = await dispatch(fetchPokemonListAsync())
      if (response.meta.requestStatus == 'fulfilled'){
        const payload = response.payload
        const count = payload.length
        setResultsData(payload)
        setCounts(count)
        console.log(count)
      }
    }
    fetchDataPokemon()
  },[dispatch])

  useEffect(() => {
    console.log("Counts----> ",counts)
  },[counts])
 
  return (
    <main>
       {/* <Navbar1 />
      <Navbar2 /> */}
      <Navbar3 switchCard={(tab:string) => {
        setIconTab(tab)
      }}
      counts={counts}
      /> 
      {iconTab == 'browse' && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 ">
       
       {results && results.map((pokemon:any, index:any) => (

         <PokemonCard
           key={index}
           name={pokemon.name}
           types={pokemon.type}
         />

       ))}
     </div>}

     {iconTab == 'data_table' && <div className="flex flex-col p-4 w-full gap-6 px-20 cursor-pointer ">
       
       {results && results.map((pokemon:any, index:any) => (

         <PokemonList
           key={index}
           name={pokemon.name}
           types={pokemon.type}
           abilities={pokemon.ability}
         />

       ))}
     </div>}
      
       
    
    </main>
  )
  
}

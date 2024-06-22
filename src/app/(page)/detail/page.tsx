"use client";
import React, { useEffect } from "react";
import Navbar1 from "@/components/navbar/Navbar1";
import Navbar2 from "@/components/navbar/Navbar2";
import { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { types } from "util";
import { useDispatch } from "@/store";
import { fetchPokemonDetailAsync } from "@/store/features/pokemondetail";

interface IBack {
  icons: string;
  label: string;
}

interface IPokemon {
  name: string;
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  abilities: { ability: { name: string } }[];
}
export default function DetailPage() {
  const router = useRouter();
  const params = useSearchParams();
  const pokemon_name = params.get("pokemon");
  const dispatch = useDispatch();


  const [resultsData, setResultsData] = useState<any>();

  useEffect(() => {
    console.log("pokemon--> ",pokemon_name)
    const fetchPokemonDetail = async () => {
      if (pokemon_name) {
        const response = await dispatch(fetchPokemonDetailAsync(pokemon_name));
        if (response.meta.requestStatus == 'fulfilled') {
          const payload = response.payload[0]
          setResultsData(payload)
          console.log("Payload-----> ",payload)
        }
      }
      
    };


    fetchPokemonDetail()
  }, [dispatch, pokemon_name]);

  

  const handleBackClick = () => {
    router.push("/home");
  };

  const handleAddToPocket = () => {
    router.push("/pocket");
  };
  const back: IBack[] = [
    {
      icons: "arrow_back_ios",
      label: "Back",
    },
  ];
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <main>
      {/* <Navbar1 />
      <Navbar2 /> */}
      <div onClick={handleBackClick} className="w-[10%]">
        {back.map((items, index) => (
          <div key={index} className="flex px-16 p-5 cursor-pointer">
            <span className="material-symbols-outlined">{items.icons}</span>
            <p>{items.label}</p>
          </div>
        ))}
      </div>
      {/* <div className="border border-red-500 w-full h-screen flex justify-start px-28 py-15"> */}
      {/* <div className="border border-blue-500 "> */}
      <div className=" flex items-center justify-start  p-6 px-24">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden  w-full flex">
          <div className="p-6 flex-shrink-0">
            <Image
              src={`/img/${pokemon_name}.png`}
              alt={"name"}
              width={350}
              height={350}
            />
          </div>
          <div className="p-6 flex-grow">
            <h2 className="text-2xl font-bold">{resultsData?.name}</h2>
            <div className="flex mt-2">
            {resultsData?.type?.map((type:any, index:number) => (
          <span key={index} className={`text-sm px-2 py-1 rounded-full mr-2 ${type === 'Fire' ? 'bg-orange-100 text-yellow-500' : type === 'Grass' ? 'bg-orange-100 text-yellow-500' : 'bg-orange-100 text-yellow-500'}`}>
            {type}
          </span>
        ))}
            </div>
            <div className="mt-4 gap-4">
              <p className="text-gray-600  ">
                Stats: {resultsData?.stats.join(", ")}
              </p>
              <p className="text-gray-600 mt-2">
                Abilities: {resultsData?.ability.join(", ")}
              </p>
            </div>
            <div className="mt-4 flex items-center">
              <span className="mr-2">Quantity:</span>
              <button
                onClick={decreaseQuantity}
                className="px-2 py-1 bg-gray-200 rounded-l"
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-2 py-1 bg-gray-200 rounded-r"
              >
                +
              </button>
            </div>
            <div className="mt-4">
              <button
                onClick={handleAddToPocket}
                className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
              >
                Add To Pocket
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </main>
  );
}

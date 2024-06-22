import { useDispatch, useSelector } from "@/store";
import {
  fetchPokemonSearchAsync,
  searchNameSelector,
} from "@/store/features/searchoff";
import React, { useEffect, useState } from "react";
import PokemonCard from "../pokemoncard/PokemonCards";

export default function SearchCard() {
  const dispatch = useDispatch();
  const { searchName } = useSelector(searchNameSelector);
  const [results, setResult] = useState<any>();
  const [counts, setCounts] = useState<string>("");

  useEffect(() => {
    const fetchPokemonSearch = async () => {
      const response = await dispatch(fetchPokemonSearchAsync(searchName));
      if (response.meta.requestStatus == "fulfilled") {
        const payload = response.payload;
        const count = payload.length;
        setResult(payload);
        setCounts(count);
        console.log(count);
      }
    };
    fetchPokemonSearch();
  }, [dispatch, searchName]);

  return (
    <main>
      {results && results.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 ">
            {results.map((pokemon: any, index: any) => (
              <PokemonCard
                key={index}
                name={pokemon.name}
                types={pokemon.type}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className=" flex justify-center items-center ">
            <div className=" pt-36 w-[20%]">
              <div className="w-[10%] pl-32">
                <span className="material-symbols-outlined text-5xl">
                  search_off
                </span>
              </div>
              <p className="text-gray-400 ">
                Oops! Nothing was found for “ Aooooo ” Please try to search for
                something else.
              </p>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

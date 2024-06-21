import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { reducer } from "../reducer";
import { createAppAsyncThunk } from "../createAppAsyncThunk";
import axios from "axios";
import {
  HttpClient,
  fetchPokemonAbilities,
  fetchPokemonList,
} from "@/services/api";

interface IPokemonDetailState {
  name: string;
  imageURL: string;
  types: string[];
  abilities: string[];
}
const initialState: IPokemonDetailState = {
  name: "",
  imageURL: "",
  types: [],
  abilities: [],
};

const POKEMON_API = "https://pokeapi.co/api/v2/";

export const fetchPokemonDetailAsync = createAppAsyncThunk(
  "FETCH/POKEMON_LIST",
  async (pokemon_name: string) => {
    try {
      const response = await fetchPokemonList();
      const payload = response.data.results;
      const pokemonName = payload.map((item: any) => ({
        name: item.name,
      }));

      let Abilities = [];
      let Type = [];
      let Stat = [];

      for (let items in pokemonName) {
        const name = pokemonName[items].name;
        const response_abilities = await fetchPokemonAbilities(name);
        const payload = response_abilities.data;
       
        Abilities.push({
          abilities: payload.abilities,
        });
        Type.push({
          types: payload.types,
        });
        Stat.push({
          stats: payload.stats,
        });
      }

      const abilities = Abilities.map((item: any) => item.abilities);
      const ability = abilities.map((item: any) =>
        item.map((j: any) => j.ability)
      );
      const abilityName = ability.map((item: any) =>
        item.map((j: any) => j.name)
      );
      const types = Type.map((item: any) => item.types);
      const type = types.map((item: any) => item.map((j: any) => j.type));
      const typesName = type.map((item: any) => item.map((j: any) => j.name));

      const stats = Stat.map((item:any) => item.stats)
      const stat = stats.map((item:any) => item.map((j:any) => j.stat)) 
      const statName = stat.map((item:any) => item.map((j:any) => j.name))

      const dataPush = pokemonName.map((item: any, index: number) => ({
        name: item.name,
        type: typesName[index],
        ability: abilityName[index],
        stats: statName[index]
      }));



      const filterPokemon = dataPush.filter((item:any) => {
        return item.name == pokemon_name
      })
     
      return filterPokemon;
    } catch (error) {
      throw error;
    }
  }
);

const combinedReducers = (
  builder: ActionReducerMapBuilder<IPokemonDetailState>
) => {};

export const pokemonDetailSlice = createSlice({
  name: "pokemon_detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => combinedReducers(builder),
});

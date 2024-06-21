import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { reducer } from "../reducer";
import { createAppAsyncThunk } from "../createAppAsyncThunk";
import axios from "axios";
import {
  HttpClient,
  fetchPokemonAbilities,
  fetchPokemonList,
} from "@/services/api";

interface IPokemonListState {
  name: string;
  imageURL: string;
  types: string[];
  abilities: string[];
}
const initialState: IPokemonListState = {
  name: "",
  imageURL: "",
  types: [],
  abilities: [],
};

const POKEMON_API = "https://pokeapi.co/api/v2/";

export const fetchPokemonListAsync = createAppAsyncThunk(
  "FETCH/POKEMON_LIST",
  async () => {
    try {
      const response = await fetchPokemonList();
      const payload = response.data.results;
      const pokemonName = payload.map((item: any) => ({
        name: item.name,
      }));

      let Abilities = [];
      let Type = [];

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
      
      const dataPush = pokemonName.map((item: any, index: number) => ({
        name: item.name,
        type: typesName[index],
        ability: abilityName[index],
      
      }));

      return dataPush;
    } catch (error) {
      throw error;
    }
  }
);

const combinedReducers = (
  builder: ActionReducerMapBuilder<IPokemonListState>
) => {};

export const pokemonListSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => combinedReducers(builder),
});

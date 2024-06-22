import {
  ActionReducerMapBuilder,
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { ReduxState } from "../../store";
import { createAppAsyncThunk } from "../createAppAsyncThunk";
import { fetchPokemonAbilities, fetchPokemonList } from "@/services/api";

const initialState: { searchName: string } = {
  searchName: "",
};
export const fetchPokemonSearchAsync = createAppAsyncThunk(
  "FETCH/POKEMON_SEARCH",
  async (search? : string) => {
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
        return item.name == search
      })
     
      return filterPokemon;
    } catch (error) {
      throw error;
    }
  }
);
// const searchReducers = (builder: ActionReducerMapBuilder<any>) => {
//   builder.addCase(fetchPokemonListAsync.fulfilled, async (state) => {
//     await fetchPokemonListAsync(state.searchName);
//   });
// };

// const combinedReducers = (
//   builder: ActionReducerMapBuilder<any>
// ) => {
//   searchReducers(builder);
// };

export const searchNameSlice = createSlice({
  name: "search_name",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchName = action.payload;
      // fetchPokemonSearchAsync(action.payload);
    },
  },
  // extraReducers: (builder) => combinedReducers(builder),
});

export const searchNameSelector = (state: ReduxState) => state.searchName;

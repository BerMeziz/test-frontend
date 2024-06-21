
import { pokemonListSlice } from "./features";
import { loadingSlice } from "./features/loading";
import { pokemonDetailSlice } from "./features/pokemondetail";

export const reducer = {
  loading: loadingSlice.reducer,
  pokemonlist:pokemonListSlice.reducer,
  pokemon_detail:pokemonDetailSlice.reducer
};

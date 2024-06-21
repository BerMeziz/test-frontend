import axios, { AxiosStatic } from 'axios'

const POKEMON_API = "https://pokeapi.co/api/v2/"

export const HttpClient = axios.create({
  baseURL: POKEMON_API ,
})



export const fetchPokemonList = async () =>  {
  const response = await HttpClient.get("/pokemon?limit=12")
  return response
}

export const fetchPokemonAbilities = async (pokemonName: string) =>  {
  const response = await HttpClient.get(`/pokemon/${pokemonName}?limit=12`)
  return response
}
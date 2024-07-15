<script lang="ts" setup>
import type { Pokemon } from "~/@types/pokemon";

const pokedexId = useRoute().params.pokedexId;

const { data: pokemon, pending } = useFetch<Pokemon>(
  `https://tyradex.vercel.app/api/v1/pokemon/${pokedexId}`,
);
</script>

<template>
  <div>
    <div v-if="pending">Chargement...</div>
    <div v-else-if="pokemon" class="grid grid-cols-2">
      <div class="col-span-2">
        <h2 class="text-center text-2xl font-bold">
          #{{ pokemon.pokedex_id }} - {{ pokemon.name.fr }}
        </h2>
      </div>
      
      <div class="flex col-span-2 md:col-span-1">
        <div>
          <img
            :src="pokemon.sprites.regular"
            alt="normal"
            loading="lazy"
            class="max-w-full"
          />
        </div>
        <div>
          <img
            v-if="pokemon.sprites.shiny"
            :src="pokemon.sprites.shiny"
            alt="shiny"
            loading="lazy"
            class="max-w-full"
          />
        </div>
      </div>
      <div class="flex flex-col justify-center pl-4 col-span-2 md:col-span-1">
        <PokemonStats v-if="pokemon.stats" :stats="pokemon.stats" />
      </div>

      <div v-if="pokemon.sprites.gmax" class="col-span-2 mb-4">
        <h3 class="font-bold text-xl text-center">GMAX</h3>
        <div class="grid grid-cols-2 gap-2">
          <div v-for="gmax of pokemon.sprites.gmax" :key="gmax" class="flex justify-center">
            <img
              v-if="gmax"
              :src="gmax"
              alt="shiny"
              loading="lazy"
              class="max-w-full min-w-[50%]"
            />
          </div>
        </div>
      </div>
      

      <div v-if="pokemon.evolution" class="col-span-2">
        <PokemonEvolutions :evolution="pokemon.evolution" />
      </div>
    </div>
    <div v-else>Aucun pokémon</div>
  </div>
</template>

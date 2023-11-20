<template>
  <div>
    <div class="text-center m-2">
      Recherche :
      <!--  le v-model permet de lier la donnée à mon input  -->
      <input v-model="searchText" type="text" />
    </div>
    <div v-if="pending">Chargement...</div>
    <div
      v-else-if="pokemons"
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
    >
      <PokemonCard
        v-for="pokemon of pokemons"
        :key="pokemon.pokedexId"
        :pokemon="pokemon"
      />
    </div>
    <div v-else>Aucun pokemons</div>
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from "~/@types/pokemon";
import PokemonCard from "~/components/PokemonCard.vue";
// Le ref remplace le useState
// Cela me permet de créer une variable réactive
// Ici je n'ai pas une fonction pour modifier ma variable
const searchText = ref("");

// Ici on utilise useFetch pour appeler une API
// En utilisant le await, je vais faire cet appel API côté serveur
// Ainsi le HTML lier à ma donnée sera généré côté serveur
const { data: pokemons, pending } = await useFetch<Pokemon[]>(
  "https://tyradex.vercel.app/api/v1/pokemon",
);
</script>

<template>
  <div>
    <div v-if="pending">Chargement...</div>
    <div v-else-if="pokemons">
      <div class="text-center m-2">
        Recherche :
        <!--  le v-model permet de lier la donnée à mon input  -->
        <input
          v-model="searchText"
          type="text"
          class="outline-none text-black border-2 focus:border-[#F0F] focus:text-[#F0F]"
        />
      </div>
      <div class="text-center mb-2">
        <p>Nombre à afficher par page</p>
        <div class="flex gap-2 justify-center">
          <button
            v-for="nbPerPageOption of nbPerPageOptions"
            :key="nbPerPageOption"
            class="p-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
            :class="{
              'bg-yellow-600': nbPerPageOption === nbPerPage,
              'bg-yellow-500': nbPerPageOption !== nbPerPage,
            }"
            type="button"
            @click="changeNbPerPage(nbPerPageOption)"
          >
            {{ nbPerPageOption }}
          </button>
        </div>
      </div>
      <div class="flex gap-2 mb-2 justify-center">
        <button
          type="button"
          class="bg-yellow-500 p-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          :disabled="page <= 1"
          @click="page--"
        >
          Précédent
        </button>
        <button
          type="button"
          class="bg-yellow-500 p-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          :disabled="pokemons.length < nbPerPage * page"
          @click="page++"
        >
          Suivant
        </button>
      </div>
      <div class="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <PokemonCard
          v-for="pokemon of pokemonFiltered"
          :key="pokemon.pokedexId"
          :pokemon="pokemon"
        />
      </div>
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
const nbPerPage = ref(20);
const page = ref(1);

const nbPerPageOptions = [20, 50, 100, 200];

// Ici on utilise useFetch pour appeler une API
// En utilisant le await, je vais faire cet appel API côté serveur
// Ainsi le HTML lier à ma donnée sera généré côté serveur
const { data: pokemons, pending } = await useFetch<Pokemon[]>(
  "https://tyradex.vercel.app/api/v1/pokemon",
);

// computed permet de retourner une valeur "calculer"
// C'est à dire retourner des informations à partir d'autre variable
// L'intérêt est que si les variables (reactive) utilisées change, la valeur sera recalculée
const pokemonFiltered = computed(() => {
  const start = (page.value - 1) * nbPerPage.value;
  const end = start + nbPerPage.value;

  return pokemons.value
    ?.filter((pokemon) => pokemon.name.fr.includes(searchText.value))
    .slice(start, end);
});

function changeNbPerPage(nbPerPageToShow: number) {
  nbPerPage.value = nbPerPageToShow;
  page.value = 1;
}
</script>

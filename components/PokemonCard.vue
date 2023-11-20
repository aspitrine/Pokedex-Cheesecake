<template>
  <div class="border-2 border-amber-600 p-2">
    <h3>{{ pokemon.name.fr }}</h3>
    <img
      :src="pokemon.sprites.shiny || pokemon.sprites.regular"
      loading="lazy"
      :alt="pokemon.name.fr"
      class="w-full"
    />
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from "~/@types/pokemon";

// Pour définir les propriétés d'un composant avec vue, on utilise defineProps
// J'utilise la notation avec TypeScript
defineProps<{
  pokemon: Pokemon;
}>();
</script>

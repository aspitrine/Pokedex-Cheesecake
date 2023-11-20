<template>
  <div>{{ pokemon.name.fr }}</div>
</template>

<script setup lang="ts">
import type { Pokemon } from "~/@types/pokemon";

// Pour définir les propriétés d'un composant avec vue, on utilise defineProps
// J'utilise la notation avec TypeScript
defineProps<{
  pokemon: Pokemon;
}>();
</script>

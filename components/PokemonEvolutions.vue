<script setup lang="ts">
import type { Evolution } from "~/@types/pokemon";

defineProps<{
  evolution: Evolution;
}>();
</script>

<template>
  <div>
    <h3 class="font-bold text-xl text-center">Evolution</h3>
    <div class="flex justify-center gap-2">
      <div v-if="evolution.pre" class="border border-amber-500 p-2 m-2">
        <h4 class="font-bold text-center border-b border-amber-500">
          Précédente
        </h4>
        <div class="mt-2">
          <NuxtLink
            v-for="evol of evolution.pre"
            :key="evol.pokedexId"
            :to="`/pokemon/${evol.pokedexId}`"
            class="flex flex-col items-center"
          >
            <span>{{ evol.name }}</span>
          </NuxtLink>
        </div>
      </div>

      <div v-if="evolution.next" class="border border-amber-500 p-2 m-2">
        <h4 class="font-bold text-center border-b border-amber-500">
          Suivante
        </h4>
        <div class="mt-2">
          <NuxtLink
            v-for="evol of evolution.next"
            :key="evol.pokedexId"
            :to="`/pokemon/${evol.pokedexId}`"
            class="flex flex-col items-center"
          >
            <span>{{ evol.name }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div v-if="evolution.mega">
      <h4 class="font-bold text-xl text-center">Méga-évolution</h4>
      <div class="flex justify-center gap-2">
        <div v-for="evol of evolution.mega" :key="evol.orbe">
          <div class="font-bold text-center">{{ evol.orbe }}</div>
          <div class="grid sm:grid-cols-2">
            <img :src="evol.sprites.regular" alt="mega normal" loading="lazy" />
            <img :src="evol.sprites.shiny" alt="mega shiny" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Stats } from "~/@types/pokemon";

const props = defineProps<{
  stats: Stats;
}>();

const keyTrad = {
  hp: "PV",
  atk: "Attaque",
  def: "Défense",
  spe_atk: "Attaque Spé.",
  spe_def: "Défense Spé.",
  vit: "Vitesse",
};

const statsList = computed(() => {
  return Object.entries(props.stats).map(([key, value]) => ({
    key,
    value,
    label: keyTrad[key as keyof Stats],
  }));
});
</script>

<template>
  <div>
    <h3 class="font-bold text-xl">Statistiques</h3>
    <ul class="mt-2">
      <li v-for="{ key, label, value } of statsList" :key="key">
        <strong>{{ label }}:</strong> {{ value }}
      </li>
    </ul>
  </div>
</template>

<template>
  <div>
    <div class="text-center m-2">
      Recherche :
      <!--  le v-model permet de lier la donnée à mon input  -->
      <input v-model="searchText" type="text" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Le ref remplace le useState
// Cela me permet de créer une variable réactive
// Ici je n'ai pas une fonction pour modifier ma variable
const searchText = ref("");
</script>

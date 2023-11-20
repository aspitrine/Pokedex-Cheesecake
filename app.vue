<template>
  <div class="h-screen bg-amber-500 flex flex-col text-white">
    <header class="bg-amber-600 font-bold p-2 text-center">
      <h1 class="text-3xl">
        <NuxtLink to="/">Pokedex</NuxtLink>
      </h1>
    </header>
    <main class="grow overflow-y-auto">
      <NuxtPage />
    </main>
  </div>
</template>
<script setup lang="ts"></script>

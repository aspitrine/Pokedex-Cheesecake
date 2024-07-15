<template>
  <NuxtLink :to="previousRoute">
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
const router = useRouter();
defineSlots<{ default: any }>();

const previousRoute = computed(() => (router.options.history.state.back as string) || '/');
</script>

<style></style>

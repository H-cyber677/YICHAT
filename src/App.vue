<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView></RouterView>
  <nav>
    <RouterLink to="/"></RouterLink>
    <RouterLink to="/about"></RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
<style scoped>

</style>

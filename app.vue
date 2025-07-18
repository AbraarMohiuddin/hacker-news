<script setup>
import Navbar from '~/components/navbar.vue'
</script>

<template>
  <v-app>
    <Navbar />
    <NuxtPage />
  </v-app>
</template>

<style>
.v-dialog .v-card {
  background-color: red;
}
</style>


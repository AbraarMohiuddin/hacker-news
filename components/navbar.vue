<template>
  <v-app-bar flat color="red" dark>
    <v-toolbar-title @click="router.push({path: '/'})" class="text-white" style="cursor:pointer">HackerNews</v-toolbar-title>
    
    <v-list-item @click="updateStoryType('topstories')">Top</v-list-item>
    <v-list-item @click="updateStoryType('newstories')">New</v-list-item>
    <v-list-item @click="updateStoryType('jobstories')">Jobs</v-list-item>
    <v-list-item @click="updateStoryType('askstories')">Ask</v-list-item>
  </v-app-bar>
</template>

<script setup lang="ts">
const router = useRouter()

function updateStoryType(type: string) {
  router.push({ query: { type } })
}
</script>

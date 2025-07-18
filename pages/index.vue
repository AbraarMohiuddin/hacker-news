<script setup lang="ts">
import { useStories } from '~/composables/useStories'
import type { Story } from '~/composables/useStories'

const route = useRoute();

// const { stories, loading } = await useStories('jobstories')
const stories = ref<Story[]>([])
const loading = ref(true)

const modalOpen = ref(false);
const selectedStory = ref<Story | null>();

watchEffect(async () => {
  loading.value = true;
  const type = route.query.type || "topstories";

  const result = await useStories(type);

  stories.value = result.stories.value;
  loading.value = result.loading.value;
})

const toggleModal = (story: Story) => {
  selectedStory.value = story;
  modalOpen.value = !modalOpen.value;
  console.log(selectedStory.value)
}
</script>


<template>
  <v-container class="py-6 mt-12">
    <h2 class="text-h5 mb-4">Top Stories</h2>

    <div v-if="loading">
      <v-skeleton-loader 
      type="article" 
      v-for="i in 5"
      :key="i"
      />
    </div>

    <div v-else>
        <v-card
          v-for="story in stories"
          :key="story.id"
          class="mb-4"
          variant="outlined"
          @click="toggleModal(story)"
        >
          <v-card-item>
            <v-card-title>
              <a  class="text-decoration-none">
                {{ story.title }}
              </a>
            </v-card-title>
            <v-card-subtitle class="text-caption">
              by {{ story.by }}
            </v-card-subtitle>
          </v-card-item>
          
        </v-card>
      </div>
      <v-dialog style="max-width: 1000px;" v-model="modalOpen">
        <v-card style="align-items: center;">
          <v-card-title>
            <a :href="selectedStory?.url" target="_blank"> {{ selectedStory?.title }} </a>
          </v-card-title>
          <v-card-subtitle class="text-caption">
              score: {{ selectedStory?.score }}
            </v-card-subtitle>
          <v-card-subtitle class="text-caption">
              by {{ selectedStory?.by }}
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer />
              <v-btn text @click="modalOpen = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-container>
</template>
<style>

</style>

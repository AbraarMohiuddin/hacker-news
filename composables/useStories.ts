export interface Story {
    id: number
    title: string
    by: string
    score: number
    url: string
    descendants?: number
    imageUrl?: string
}

export const useStories = async (type: 'topstories' | 'newstories' | 'beststories' | 'askstories' | 'showstories' | 'jobstories') => {
    const stories = ref<Story[]>([])
    const top20 = ref<number[]>([])
    const loading = ref(true)
    const {
      public: { unsplashAccessKey },
    } = useRuntimeConfig()

    const fetchImage = async (keywords: string) => {
      try {
        const q = encodeURIComponent(keywords)
        const res = await fetch(
          `https://api.unsplash.com/photos/random?query=${q}&client_id=${unsplashAccessKey}`
        )
        if (!res.ok) return undefined
        const img = await res.json()
        return img.urls.small as string
      } catch (err) {
        console.error('Failed to fetch image:', err)
        return undefined
      }
    }

    try {
        const response = await fetch (`https://hacker-news.firebaseio.com/v0/${type}.json`);
        const data = await response.json();
        top20.value = data.slice(0,20);
        const storyPromises = top20.value.map(async (id) => {
          const story: Story = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          ).then((res) => res.json())
          const keywords = story.title.split(' ').slice(0, 3).join(' ')
          story.imageUrl = await fetchImage(keywords)
          return story
        })
        const storyData = await Promise.all(storyPromises)
        stories.value = storyData
    }
    catch (error) {
        console.error('Failed to load stories:', error)
    }
    finally {
        loading.value = false
      }

      return { stories, loading }
}

  
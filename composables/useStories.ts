export interface Story {
    id: number
    title: string
    by: string
    score: number
    url: string
    descendants?: number
}

export const useStories = async (type: 'topstories' | 'newstories' | 'beststories' | 'askstories' | 'showstories' | 'jobstories') => {
    const stories = ref<Story[]>([])
    const top20 = ref<number[]>([]);
    const loading = ref(true);

    try {
        const response = await fetch (`https://hacker-news.firebaseio.com/v0/${type}.json`);
        const data = await response.json();
        top20.value = data.slice(0,20);
        const storyPromises = top20.value.map((id) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((res) => res.json()))
        const storyData = await Promise.all(storyPromises);
        stories.value = storyData;
    }
    catch (error) {
        console.error('Failed to load stories:', error)
    }
    finally {
        loading.value = false
      }

      return { stories, loading }
}

  
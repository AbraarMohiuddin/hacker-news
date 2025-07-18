import { vi, describe, it, expect, beforeEach } from 'vitest'
import { useStories } from '../composables/useStories'

const exampleStory = {
  id: 1,
  title: 'Example',
  by: 'tester',
  score: 10,
  url: 'https://example.com'
}

describe('useStories', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('fetches stories and returns them', async () => {
    global.fetch = vi.fn()
      .mockResolvedValueOnce({ json: () => Promise.resolve([1]) } as any)
      .mockResolvedValueOnce({ json: () => Promise.resolve(exampleStory) } as any)

    const { stories, loading } = await useStories('topstories')

    expect(fetch).toHaveBeenCalledTimes(2)
    expect(stories.value).toEqual([exampleStory])
    expect(loading.value).toBe(false)
  })
})

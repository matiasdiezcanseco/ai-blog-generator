import axios from 'axios'
import { createMemo, For, Show } from 'solid-js'
import { createRouteData, Title, useRouteData } from 'solid-start'
import { Post } from '~/shared/types'
import BlogMiniature from '~/components/blog-miniature'
import { search } from '../store/search'

export function routeData() {
  return createRouteData(async () => {
    const response = await axios.get('http://localhost:3000/api/posts')
    const posts = response.data.data
    return posts as Post[]
  })
}

export default function Home() {
  const posts = useRouteData<typeof routeData>()

  const filteredPosts = createMemo(() =>
    posts()
      ? posts()!.filter((post) => post.title.toLowerCase().includes(search().toLowerCase()))
      : []
  )

  return (
    <main>
      <Title>Hello World</Title>
      <div class="max-w-7xl mx-auto p-2">
        <Show when={posts()}>
          <div class="grid grid-cols-2 gap-2">
            <For each={filteredPosts()}>{(post) => <BlogMiniature post={post} />}</For>
          </div>
        </Show>
      </div>
    </main>
  )
}

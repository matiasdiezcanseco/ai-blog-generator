import { Title, useParams, useRouteData, createRouteData } from 'solid-start'
import { Show } from 'solid-js'
import BlogPost from '~/components/blog-post'

import type { Post } from '~/shared/types'
import axios from 'axios'

export function routeData() {
  const { id } = useParams()
  return createRouteData(async () => {
    const response = await axios.get(`http://localhost:3000/api/posts/${id}`)
    const post = response.data.data.post
    return { content: post } as Post
  })
}
export default function Home() {
  const post = useRouteData<typeof routeData>()

  return (
    <main>
      <Title>Hello World</Title>
      <div class="max-w-7xl mx-auto p-2">
        <Show when={post.loading}>
          <div>Loading...</div>
        </Show>
        <Show when={post()}>
          <BlogPost post={post()!} />
        </Show>
      </div>
    </main>
  )
}

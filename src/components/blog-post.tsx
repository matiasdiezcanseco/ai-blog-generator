import { Component, For, Match, Switch } from 'solid-js'
import type { Post } from '~/shared/types'

interface BlogPostProps {
  post: Post
}

const BlogPost: Component<BlogPostProps> = ({ post }) => {
  const { title, content } = post

  return (
    <article class="rounded-md overflow-hidden border-[1px] border-slate-300">
      <div>
        <img
          src="https://www.pngkey.com/png/detail/233-2332677_ega-png.png"
          alt="background"
          class="w-full bg-cointain max-h-[400px]"
        />
      </div>
      <div class="py-4 px-8 space-y-10">
        <h1 class="text-4xl font-semibold">{title}</h1>
        <section class="space-y-6">
          <For each={content}>
            {(item) => (
              <Switch fallback={<div></div>}>
                <Match when={item.tag === 'subtitle'}>
                  <h2 class="text-2xl font-semibold">{item.content}</h2>
                </Match>
                <Match when={item.tag === 'paragraph'}>
                  <p>{item.content}</p>
                </Match>
              </Switch>
            )}
          </For>
        </section>
      </div>
    </article>
  )
}

export default BlogPost

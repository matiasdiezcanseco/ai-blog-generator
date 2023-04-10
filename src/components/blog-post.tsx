import { Component, For, Match, Switch } from 'solid-js'
import type { Post } from '~/shared/types'

interface BlogPostProps {
  post: Post
}

const BlogPost: Component<BlogPostProps> = ({ post }) => {
  const { content } = post

  return (
    <article class="rounded-md overflow-hidden border-[1px] border-slate-300">
      <div>
        <img
          src="https://www.pngkey.com/png/detail/233-2332677_ega-png.png"
          alt="background"
          class="w-full bg-cointain max-h-[400px]"
        />
      </div>
      <div class="py-4 px-8 space-y-10" innerHTML={content}></div>
    </article>
  )
}

export default BlogPost

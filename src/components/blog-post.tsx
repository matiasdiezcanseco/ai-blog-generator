import { Component } from 'solid-js'
import type { Post } from '~/shared/types'

interface BlogPostProps {
  post: Post
}

const BlogPost: Component<BlogPostProps> = ({ post }) => {
  const { content, url, title } = post

  return (
    <article class="rounded-md overflow-hidden border-[1px] border-slate-300">
      <div>
        <img src={url} alt="background" class="w-full bg-cointain max-h-[400px]" />
      </div>
      <div class="py-4 px-8 space-y-10" innerHTML={content}></div>
    </article>
  )
}

export default BlogPost

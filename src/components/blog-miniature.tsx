import { Component } from 'solid-js'
import { A, Link } from 'solid-start'
import { Post } from '~/shared/types'

interface BlogMiniatureProps {
  post: Post
}

const BlogMiniature: Component<BlogMiniatureProps> = ({ post }) => {
  return (
    <A href={`/posts/${post.id}`}>
      <div class="border-[1px] border-slate-300  rounded-md flex flex-col items-center overflow-hidden">
        <div class="w-full">
          <img class="w-full" src={post.url} alt={post.title} />
        </div>
        <div class="p-2">
          <h4 class="font-semibold text-lg">{post.title}</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis vel atque
            praesentium expedita.
          </p>
        </div>
      </div>
    </A>
  )
}

export default BlogMiniature

type PostParagraph = { tag: 'subtitle' | 'paragraph'; content: string }

export type Post = {
  title: string
  content: PostParagraph[]
}

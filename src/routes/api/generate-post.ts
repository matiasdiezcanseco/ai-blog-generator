import axios from 'axios'
import { APIEvent, json } from 'solid-start/api'
import openai from '~/server/openai'

export async function POST({ request }: APIEvent) {
  const body = await request.json()
  const { length = 4, prompt } = body
  if (!prompt) return json({ status: 400, message: 'Missing prompt' })

  let post = ''
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Write a ${length} paragraph article about ${prompt}. It should be in HTML format. It should have an <h1>tag with the title of the article. Each paragraph should have its own subtitle in a <h2> tag. It should be around 500 words long.`,
        },
      ],
      temperature: 0,
      max_tokens: 4000,
    })

    post = response.data.choices[0]?.message?.content || ''
    if (!post) return json({ status: 500, message: 'Malformed post from openai' })

    post = post?.replaceAll('\n', '')
    post = post?.replaceAll('\t', '')

    const initialPos = post.indexOf('<body>') + 6
    const finalPos = post.indexOf('</body>')

    if (initialPos === -1 || finalPos === -1)
      return json({ status: 500, message: 'Malformed post from openai' })

    post = post.substring(initialPos, finalPos)
  } catch (e: any) {
    return json({
      status: e?.response?.status || 500,
      message: e?.response?.statusText || 'Server error',
    })
  }

  try {
    await axios.post(`${process.env.DB_HOST}/posts`, { content: post })
    return json({ status: 200, data: post })
  } catch (e: any) {
    return json({
      status: e?.response?.status || 500,
      message: e?.response?.statusText || 'Server error',
    })
  }
}

import { APIEvent, json } from 'solid-start/api'
import openai from '~/server/openai'

export async function POST({ request }: APIEvent) {
  const body = await request.json()
  const { prompt } = body
  if (!prompt) return json({ status: 400, message: 'Missing prompt' })

  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      response_format: 'url',
      size: '256x256',
    })
    return json({ status: response.status, data: { url: response.data.data[0].url } })
  } catch (e: any) {
    return json({ status: e.response.status || 500, message: e.response.data })
  }
}

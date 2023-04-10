import axios from 'axios'
import { APIEvent, json } from 'solid-start/api'

export async function GET({ params }: APIEvent) {
  try {
    const response = await axios.get(`${process.env.DB_HOST}/posts/${params.id}`)
    const post = response.data.content
    return json({
      status: 200,
      data: { post },
    })
  } catch (e: any) {
    return json({
      status: e?.response?.status || 500,
      message: e?.response?.statusText || 'Server error',
    })
  }
}

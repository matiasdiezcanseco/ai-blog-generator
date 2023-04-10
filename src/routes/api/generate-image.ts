import { APIEvent, json } from "solid-start/api";
import openai from "~/server/openai";

export async function POST({ request, params }: APIEvent) {
  try {
    const response = await openai.createImage({
      prompt: "A cat fighting a dog in JoJo anime style.",
      n: 1,
      response_format: "url",
      size: "256x256",
    });
    return json({ status: response.status, data: response.data });
  } catch (e: any) {
    console.log(e);
    return json({ status: e.response.status || 500, message: e.response.data });
  }
}

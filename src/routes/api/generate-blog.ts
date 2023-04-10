import { APIEvent, json } from "solid-start/api";
import openai from "~/server/openai";

export async function POST({ request, params }: APIEvent) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            "Write an article about how AI will could leave people jobless. It should have 4 paragraphs: introduction, two body paragraphs, and a conclusion. It should around 500 words long. Return the result in the following format: Separate each paragraph with the | symbol.",
        },
      ],
      temperature: 0,
      max_tokens: 4000,
    });
    return json({ status: 200, data: response.data });
  } catch (e: any) {
    return json({
      status: e?.response?.status || 500,
      message: e?.response?.data || "Server error",
    });
  }
}

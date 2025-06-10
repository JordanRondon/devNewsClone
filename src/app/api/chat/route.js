import { streamText, tool } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

const devToTool = tool(
  {
    name: "getDevToArticles",
    description: "Fetch recent Dev.to articles based on a topic",
    parameters: z.object({
      topic: z.string().describe("The topic or keyword the user is interested in"),
    }),
    execute: async ({ topic }) => {
      console.log("🔧 Ejecutando herramienta con topic:", topic);
      const res = await fetch(`https://dev.to/api/articles?tag=${encodeURIComponent(topic)}&per_page=5`);
      const articles = await res.json();
      return articles.map((a) => ({
        title: a.title,
        url: a.url,
        description: a.description,
      }));
    },
  }
);

export async function POST(req) {
  const { messages } = await req.json();
  //console.log("📨 Mensajes recibidos:", messages);
  console.dir(messages, {depth: null});
  const result = streamText({
    model: openai("gpt-4.1-nano"),
    system: "You are a helpful assistant who recommends Dev.to articles.",
    messages,
    tools: {search: devToTool},
  });
  console.log("🧠 Resultado generado:", result);

  return result.toDataStreamResponse();
}
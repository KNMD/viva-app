'use server';

import { Weather } from '@/components/weather';
import { generateText } from 'ai';
import { createOpenAI, openai } from '@ai-sdk/openai';
import { createStreamableUI } from 'ai/rsc';
import { ReactNode } from 'react';
import { z } from 'zod';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  display?: ReactNode;
}

export async function continueConversation(history: Message[]) {
  const stream = createStreamableUI();
  const openai = createOpenAI({
      apiKey: "sk-Fr57TA861M7kpFuq7d963a83095e46A4Ab5809C6E9EdD304",
      baseURL: "https://aihubmix.com/v1"
  })
  const { text, toolResults } = await generateText({
    model: openai.languageModel('gpt-3.5-turbo-0125'),
    system: 'You are a friendly weather assistant!',
    messages: history,
    tools: {
      showWeather: {
        description: 'Show the weather for a given location.',
        parameters: z.object({
          city: z.string().describe('The city to show the weather for.'),
          unit: z
            .enum(['C', 'F'])
            .describe('The unit to display the temperature in'),
        }),
        execute: async ({ city, unit }) => {
          stream.done(<Weather city={city} unit={unit} />);
          return `Here's the weather for ${city}!`;
        },
      },
    },
  });

  // const { text, toolResults, finishReason, usage } = await generateText({
  //   model: openai.languageModel('gpt-3.5-turbo-0125'),
  //   prompt: "hello",
  // });
  return {
    messages: [
      ...history,
      {
        role: 'assistant' as const,
        content:
          text || toolResults.map(toolResult => toolResult.result).join(),
        
      },
    ],
  };
  
  // return { messages, finishReason, usage };
}
'use server';

import { createStreamableValue } from 'ai/rsc';
import { CoreMessage, streamText } from 'ai';
import { openai, createOpenAI  } from '@ai-sdk/openai';
const baseURL = process.env.APP_ENGINE_BASE

export async function generate(input: string) {
    const openai = createOpenAI({
        apiKey: "sk-Fr57TA861M7kpFuq7d963a83095e46A4Ab5809C6E9EdD304",
        baseURL: "https://aihubmix.com/v1"
    })
    const stream = createStreamableValue('');
    
    (async () => {
      const { textStream } = await streamText({
        model: openai.languageModel('gpt-3.5-turbo-0125'),
        prompt: input,
      });
  
      for await (const delta of textStream) {
        stream.update(delta);
      }
  
      stream.done();
    })();
  
    return stream.value;
}
export async function rscStream(endpoint: string, data: any) {
    const openai = createOpenAI({
        apiKey: "sk-Fr57TA861M7kpFuq7d963a83095e46A4Ab5809C6E9EdD304",
        baseURL: "https://aihubmix.com/v1"
    })
  
    // const url = baseURL + endpoint
    // console.log("rsc stream url : ", url)
    // const result = await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: data
    // })

    const stream = createStreamableValue();
    (async () => {
        const { textStream } = await streamText({
          model: openai.languageModel('gpt-3.5-turbo-0125'),
          prompt: '你好',
        });
    
        for await (const delta of textStream) {
          stream.update(delta);
        }
    
        stream.done();
      })();
    
      return stream.value;
}
'use client';

import { type CoreMessage } from 'ai';
import { useState } from 'react';
import { readStreamableValue, createStreamableValue } from 'ai/rsc';
import { rscStream } from './action'
import EngineFetch from '@/lib/requests/app-fetch'
import { EventCallbacks } from '@/types/app';
// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export default function Chat() {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState('');
  const [data, setData] = useState<any>();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {messages.map((m, i) => (
        <div key={i} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content as string}
        </div>
      ))}

      <form
        onSubmit={async e => {
          e.preventDefault();
          const newMessages: CoreMessage[] = [
            ...messages,
            { content: input, role: 'user' },
          ];

          setMessages(newMessages);
          setInput('');
          
          // const result = await rscStream("/engine/app/preview", {
          //     app:{
          //         name: "preview",
          //         app_config: {
          //             base_model_id:"01HZK24711BWNHQXFWWAPAY36K"
          //         }
          //     },
          //     input: {
          //         conversation_id:"124343",
          //         messages: [{
          //             role: "user",
          //             content: "你好"
          //         }]
          //     }
          // });
          let sentence = '';
          const callbacks: EventCallbacks = {
            
            onMessage: (delta) => {
              // {"id":"chatcmpl-9gVs6t1A3HlPk2iStKYXoL253d19I","choices":[{"delta":{"content":null,"function_call":null,"role":null,"tool_calls":null},"finish_reason":"stop","index":0}],"created":1719919318,"model":"01HZK24711BWNHQXFWWAPAY36K","object":"chat.completion.chunk"}
              if(delta.content) {
                sentence = `${sentence}${delta.content}`;
              }
              
              setMessages([
                ...newMessages,
                {
                  role: 'assistant',
                  content: sentence,
                },
              ]);
            },
            onFinally: (sentence) => {

            }
          }

          EngineFetch.appPreview({
                app:{
                    name: "preview",
                    app_config: {
                        base_model_id:"01HZK24711BWNHQXFWWAPAY36K"
                    }
                },
                input: {
                    conversation_id:"124343",
                    messages: [{
                        role: "user",
                        content: "你好"
                    }]
                }
          }, callbacks)

          // setData(result);
          // let textContent = '';
          // for await (const content of readStreamableValue(result)) {
          //   console.log("content: ", content)
          //   textContent = `${textContent}${content}`;
          //   setMessages([
          //     ...newMessages,
          //     {
          //       role: 'assistant',
          //       content: textContent,
          //     },
          //   ]);
          // }
        }}
      >
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={e => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}
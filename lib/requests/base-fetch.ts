// lib/BaseFetch.ts
"use client"

import { EventCallbacks, RestResponseError } from "@/types/app";



export interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

export default abstract class BaseFetch {
  protected baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private rewriteConfig(options: RequestOptions = {}) {
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    const config: RequestOptions = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };
    return config
  }

  private makeURL(endpoint: string): string {
    if(endpoint.startsWith("http")) {
      return endpoint;
    }else {
      return `${this.baseURL}${endpoint}`;
    }
    
  }


  private async request<T>(endpoint: string, options: RequestOptions = {}): Promise<ResponseEntity<T>> {
    let response;
    try {
      response = await fetch(this.makeURL(endpoint), this.rewriteConfig(options));
      if (response && !response.ok) {
        const errorData = await response.json();
        throw new RestResponseError(errorData.message || 'Request failed', errorData);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
    
    return await response.json();
    
  }

  private urlQuery(endpoint: string, params:Record<string, any>) {
    if(params) {
      let queryString = ""
      Object.keys(params).forEach(key => queryString += `&${key}=${encodeURIComponent(params[key])}`)
      return endpoint + "?" + queryString.substring(1)
    }
    return endpoint
  }

  protected get<T>(endpoint: string, params: Record<string, any> = {}, options: RequestOptions = {}): Promise<ResponseEntity<T>> {
    return this.request<T>(this.urlQuery(endpoint, params), { ...options, method: 'GET' });
  }

  protected post<T>(endpoint: string, body: any, options: RequestOptions = {}): Promise<ResponseEntity<T>> {
    return this.request<T>(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) });
  }

  protected put<T>(endpoint: string, body: any, options: RequestOptions = {}): Promise<ResponseEntity<T>> {
    return this.request<T>(endpoint, { ...options, method: 'PUT', body: JSON.stringify(body) });
  }

  protected delete<T>(endpoint: string, options: RequestOptions = {}): Promise<ResponseEntity<T>> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }

  protected patch<T>(endpoint: string, body: any, options: RequestOptions = {}): Promise<ResponseEntity<T>> {
    return this.request<T>(endpoint, { ...options, method: 'PATCH', body: JSON.stringify(body) });
  }

  private async stream(endpoint: string, options: RequestOptions = {}, callbacks: EventCallbacks) {
    
    try {
      const apiResponse = await fetch(this.makeURL(endpoint), this.rewriteConfig(options));
      if (!apiResponse.body) return;
      const reader = apiResponse.body
        .pipeThrough(new TextDecoderStream())
        .getReader();
  
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          console.log("stream done")
          callbacks.onFinally("")
          break;
        }
        if (value) {
          console.log("stream value: ", value)
          // check sse event
          if(value.startsWith("data: [")) {
            callbacks.onFinally("")
            break;
          }else if(value.startsWith("data: ")) {
            const chunks = value.split("\n")
            if(chunks.length) {
              chunks.forEach(chunk => {
                if(chunk.startsWith("data: ")) {
                  const jsonChunk = chunk.substring(6)
                  const chunkEntity = JSON.parse(jsonChunk.trim())
                  if(chunkEntity.choices && chunkEntity.choices[0] && chunkEntity.choices[0].delta && chunkEntity.choices[0].delta) {
                    callbacks.onMessage(chunkEntity.choices[0].delta)
                  }else {
                    console.log("not callback chunck entity: ", chunkEntity)
                  }
                  
                }else if(chunk !== ''){
                  console.log("bad chunk: ", chunk)
                }
              })
        
            }
            
          }
          
        }
      }
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

  protected postStream(endpoint: string, body: any, options: RequestOptions = {}, callbacks: EventCallbacks) {
    return this.stream(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) }, callbacks);
  }
}




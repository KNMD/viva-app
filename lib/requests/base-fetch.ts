// lib/BaseFetch.ts
"use client"
export interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

export default abstract class BaseFetch {
  protected baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(endpoint: string, options: RequestOptions = {}): Promise<ResponseEntity<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
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

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Request failed');
      }
      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

  protected get<T>(endpoint: string, options: RequestOptions = {}): Promise<ResponseEntity<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
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
}
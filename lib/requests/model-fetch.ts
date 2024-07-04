// lib/UserFetch.ts
import BaseFetch from './base-fetch';

interface User {
  id: number;
  name: string;
  email: string;
}

const baseURL = "/viva-service"

class ModelFetch extends BaseFetch {
  constructor() {
    super(`${baseURL}/models`);
  }

  async models(data: Record<string, any>) {
    return this.get<Page<ModelEntity>>(``);
  }

  async modelProviders() {
    return this.get<ModelProviderEntity[]>(`/providers`);
  }

  async provider(id: string) {
    return this.get<ModelProviderEntity>(`/providers/${id}`)
  }

  async addProvider(data: ModelProviderEntity) {
    return this.post<ModelProviderEntity>(`/providers`, data)
  }

  async modelsByGroups(query: Record<string, any>) {
    return this.get<ModelGroup[]>(`/groups`, query);
  }

}

export default new ModelFetch();
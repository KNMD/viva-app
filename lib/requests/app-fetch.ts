import { EventCallbacks } from '@/types/app';
import BaseFetch from './base-fetch';

class EngineFetch extends BaseFetch {

    constructor() {
      super(`/engine`);
    }
  
  
    async appPreview(data: any, callbacks: EventCallbacks) {
      return this.postStream(`http://127.0.0.1:8100/engine/app/preview`, data, undefined, callbacks)
    }
  
}

export default new EngineFetch();
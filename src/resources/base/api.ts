import { fetchClient, MODELS } from '.';

export class Api<T> {
  private endpoint: string;
  private baseUrl: string;

  constructor(endpoint: string, baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
    this.endpoint = endpoint;
  }

  public fetch(endpoint: string, ids: MODELS.ids, method: MODELS.FetchMethods): Promise<MODELS.FetchResponse<T>> {
    Object.keys(ids).forEach((key: string) => {
      endpoint = endpoint.replace(`:${key}`, ids[key]);
    });
    return fetchClient({ method, url: `${this.baseUrl}/${endpoint}` });
  }

  public getAll(): Promise<MODELS.FetchResponse<T>> {
    return fetchClient({ url: `${this.baseUrl}/${this.endpoint}` });
  }

  public find(id: string): Promise<MODELS.FetchResponse<T>> {
    return fetchClient({ url: `${this.baseUrl}/${this.endpoint}/${id}` });
  }

  public create(item: Partial<T>): Promise<MODELS.FetchResponse<T>> {
    return fetchClient({ url: `${this.baseUrl}/${this.endpoint}/create`, data: item, method: 'POST' });
  }

  public update(item: Partial<T>): Promise<MODELS.FetchResponse<T>> {
    return fetchClient({ url: `${this.baseUrl}/${this.endpoint}/update`, data: item, method: 'PUT' });
  }

  public delete(id: string): Promise<MODELS.FetchResponse<T>> {
    return fetchClient({ url: `${this.baseUrl}/${this.endpoint}/delete/${id}`, method: 'DELETE' });
  }
}

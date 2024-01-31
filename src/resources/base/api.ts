import { ids, fetchClient, FetchMethods, FetchResponse } from '.';

export class BaseApi<T> {
  private endpoint: string;
  private baseUrl: string;

  constructor(endpoint: string, baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
    this.endpoint = endpoint;
  }

  public fetch(endpoint: string, ids: ids, method: FetchMethods): Promise<FetchResponse<T>> {
    Object.keys(ids).forEach((key: string) => {
      endpoint = endpoint.replace(`:${key}`, ids[key]);
    });
    return fetchClient({ url: `${this.baseUrl}/${endpoint}` });
  }

  public find(id: string): Promise<FetchResponse<T>> {
    return fetchClient({ url: `${this.baseUrl}/${this.endpoint}/${id}` });
  }

  public create(item: Partial<T>): Promise<FetchResponse<T>> {
    return fetchClient({ url: `${this.baseUrl}/${this.endpoint}/create`, data: item, method: 'POST' });
  }

  public update(item: Partial<T>): Promise<FetchResponse<T>> {
    return fetchClient({ url: `${this.baseUrl}/${this.endpoint}/update`, data: item, method: 'PUT' });
  }

  public delete(id: string): Promise<FetchResponse<T>> {
    return fetchClient({ url: `${this.baseUrl}/${this.endpoint}/delete/${id}`, method: 'DELETE' });
  }
}

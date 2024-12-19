import { fetchClient } from '@/lib/utils';
import { MODELS, defaults } from '.';

export interface BaseApiParams {
  endpoint: string;
  allowedProps?: MODELS.AllowedProps;
  transformations?: MODELS.Transformations;
}

export abstract class BaseApi<R extends MODELS.Resource> {
  protected endpoint: string;
  protected allowedProps: MODELS.AllowedProps;
  protected transformations: MODELS.Transformations;
  protected baseUrl = '';

  protected constructor({ endpoint, allowedProps, transformations }: BaseApiParams) {
    this.endpoint = endpoint;
    this.allowedProps = { ...defaults.allowedProps, ...allowedProps };
    this.transformations = { ...defaults.transformations, ...transformations };
  }

  public async findById(id: string): Promise<R> {
    const data = (await fetchClient({ method: 'GET', url: `${this.baseUrl}/${id}`, data: {} })) as R;
    return this.transformations.incoming(data) as R;
  }

  public async create(item: R): Promise<R> {
    const data = (await fetchClient({ method: 'POST', url: this.baseUrl, data: item })) as R;
    return this.transformations.incoming(data) as R;
  }

  public async update(item: R): Promise<R> {
    const data = (await fetchClient({ method: 'PUT', url: `${this.baseUrl}/${item.id}`, data: item })) as R;
    return this.transformations.incoming(data) as R;
  }

  public async delete(id: string): Promise<void> {
    await fetchClient({ method: 'DELETE', url: `${this.baseUrl}/${id}`, data: {} });
  }

  public async search(searchOptions: Record<string, unknown>): Promise<MODELS.SearchResults> {
    const { data, pagination } = (await fetchClient({
      method: 'POST',
      url: this.baseUrl,
      data: searchOptions,
    })) as MODELS.SearchResults;
    return { data: data.map((item) => this.transformations.incoming(item) as R), pagination };
  }
}

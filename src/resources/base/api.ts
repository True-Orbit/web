import { apiClient } from '@/lib/utils';
import { MODELS, defaults } from '.';

export interface BaseApiParams {
  endpoint: string;
  resourceName: string;
  allowedProps?: MODELS.AllowedProps;
  transformations?: MODELS.Transformations;
}

export abstract class BaseApi<R extends MODELS.Resource> {
  protected endpoint: string;
  protected resourceName: string;
  protected allowedProps: MODELS.AllowedProps;
  protected transformations: MODELS.Transformations;

  protected constructor({ endpoint, resourceName, allowedProps, transformations }: BaseApiParams) {
    this.endpoint = endpoint;
    this.resourceName = resourceName;
    this.allowedProps = { ...defaults.allowedProps, ...allowedProps };
    this.transformations = { ...defaults.transformations, ...transformations };
  }

  public async findById(id: string): Promise<R> {
    const data = (await apiClient.get(`${this.endpoint}/${id}`)) as R;
    return this.transformations.incoming(data) as R;
  }

  public async create(item: R): Promise<R> {
    const data = (await apiClient.post(this.endpoint, { [this.resourceName]: item })) as R;
    return this.transformations.incoming(data) as R;
  }

  public async update(item: Partial<R>): Promise<R> {
    const data = (await apiClient.patch(`${this.endpoint}/${item.id}`, { [this.resourceName]: item })) as R;
    return this.transformations.incoming(data) as R;
  }

  public async delete(id: string): Promise<void> {
    await apiClient.delete(`${this.endpoint}/${id}`);
  }

  public async search(searchOptions: Record<string, unknown>): Promise<MODELS.SearchResults> {
    const { data, pagination } = (await apiClient.post(this.endpoint, searchOptions)) as MODELS.SearchResults;
    return { data: data.map((item) => this.transformations.incoming(item) as R), pagination };
  }
}

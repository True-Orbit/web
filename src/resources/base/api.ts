import { MODELS, fetchClient, defaults } from '.';

export interface BaseApiParams {
  endpoint: string;
  allowedProps?: MODELS.AllowedProps;
  transformations?: MODELS.Transformations;
}

export abstract class BaseApi <R extends MODELS.Resource> {
  protected endpoint: string;
  protected allowedProps: MODELS.AllowedProps;
  protected transformations: MODELS.Transformations;
  protected baseUrl = "";

  protected constructor({ endpoint, allowedProps, transformations }: BaseApiParams) {
    this.endpoint = endpoint;
    this.allowedProps = { ...defaults.allowedProps, ...allowedProps };
    this.transformations = { ...defaults.transformations, ...transformations };
  }

  public async findById(id: string): Promise<R> {
    const data = await fetchClient({ method: 'GET', url: this.baseUrl, data: {} });
    return this.transformations.incoming(data);
  }

  public async create(item: R): Promise<R> {
    const data = await fetchClient({ method: 'POST', url: this.baseUrl, data: item });
    return this.transformations.incoming(data);
  }

  public async update(item: R): Promise<R> {
    const data = await fetchClient({ method: 'PUT', url: this.baseUrl, data: item });
    return this.transformations.incoming(data);
  }

  public async delete(id: string): Promise<void> {
    await fetchClient({ method: 'DELETE', url: this.baseUrl, data: {} });
  }

  public async search(searchOptions: Record<string, unknown>): Promise<R[]> {
    const data = await fetchClient({ method: 'POST', url: this.baseUrl, data: searchOptions });
    return data.map((item: R) => this.transformations.incoming(item));
  }
}
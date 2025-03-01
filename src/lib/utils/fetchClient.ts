import { MODELS } from '@/resources/base';

export interface FetchClientParams {
  method?: MODELS.FetchMethods;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}

export const fetchClient = async ({ method = 'POST', url, data }: FetchClientParams): Promise<unknown> => {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    throw new Error(response.statusText);
  }
};

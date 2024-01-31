import { FetchClientParams } from '.';

export const fetchClient = async ({ method = 'GET', url, data }: FetchClientParams) => {
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
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
};

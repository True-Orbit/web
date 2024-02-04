import { FetchResponse } from '@/resources/base';

export const mockFetch = (error: string | null = null) => {
  global.fetch = jest.fn((url, options) => {
    if (error) {
      return Promise.resolve({
        status: 500,
        statusText: error,
        ok: false,
        data: null,
      });
    }

    return Promise.resolve({
      status: 200,
      statusText: 'success',
      ok: true,
      json: () => Promise.resolve({ data: options.body }),
    });
  }) as jest.Mock;
};

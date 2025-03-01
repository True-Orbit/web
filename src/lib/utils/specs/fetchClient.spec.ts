import { mockFetch } from '@/lib/mocks/fetch.mock';
import { fetchClient } from '..';

describe('fetchClient', () => {
  it('should call fetch with the correct params', async () => {
    const url = 'https://example.com';
    const data = { name: 'John' };
    mockFetch();

    await fetchClient({ url, data });

    expect(global.fetch).toHaveBeenCalledWith(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  });

  it('should throw an error when the response is not ok', async () => {
    const url = 'https://example.com';
    const data = { name: 'John' };
    mockFetch('Error');

    await expect(fetchClient({ url, data })).rejects.toThrow('Error');
  });
});

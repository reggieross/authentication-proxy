import fetchMock from 'jest-fetch-mock';
import fetch, { Headers, Response } from 'node-fetch';
import { HttpClient } from './httpClient';

describe('Http Client', () => {
  describe('Get', () => {
    afterEach(() => {
      fetchMock.resetMocks();
    });

    it('should call fetch with the specified url', () => {
      const url = '/some-url';
      HttpClient.get(url);
      expect(fetch).toBeCalled();
      expect(fetch).toBeCalledWith(url, {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET',
      });
    });

    it("Should add cookie to the header if it's provided", () => {
      const url = '/some-url';
      const cookie = 'cookieKey=cookieValue';
      HttpClient.get(url, cookie);
      expect(fetch).toBeCalled();
      expect(fetch).toBeCalledWith(url, {
        headers: { 'Content-Type': 'application/json', Cookie: cookie },
        method: 'GET',
      });
    });

    it('Should return the correct response', async () => {
      const body = { message: 'some-message' };
      fetchMock.mockResponse(JSON.stringify(body));
      const url = '/some-url';
      const cookie = 'cookieKey=cookieValue';
      const resp = await HttpClient.get(url, cookie);
      expect(resp.responseObj).toEqual(body);
    });

    it('Get Error Handling', async () => {
      fetchMock.mockReject(Error('Some Error'));
      const url = '/some-url';
      const bod = { key: 'val' };
      const cookie = 'cookieKey=cookieValue';

      try {
        const resp = await HttpClient.post(url, bod, cookie);
        expect(resp).toEqual({
          responseObj: {
            message: 'There was an error',
            error: Error('Some Error'),
          },
          headers: new Headers(),
          statusCode: 500,
        });
      } catch (e) {
        console.log(e);
      }
    });
  });

  describe('Post', () => {
    it('should call fetch with the specified url', () => {
      const url = '/some-url';
      const bod = { key: 'val' };
      HttpClient.post(url, bod);
      expect(fetch).toBeCalled();
      expect(fetch).toBeCalledWith(url, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(bod),
      });
    });

    it("Should add cookie to the header if it's provided", () => {
      const url = '/some-url';
      const bod = { key: 'val' };
      const cookie = 'cookieKey=cookieValue';
      HttpClient.post(url, bod, cookie);
      expect(fetch).toBeCalled();
      expect(fetch).toBeCalledWith(url, {
        headers: { 'Content-Type': 'application/json', Cookie: cookie },
        body: JSON.stringify(bod),
        method: 'POST',
      });
    });

    it('Should return the correct response', async () => {
      const body = { message: 'some-message' };
      fetchMock.mockResponse(JSON.stringify(body));
      const url = '/some-url';
      const bod = { key: 'val' };
      const cookie = 'cookieKey=cookieValue';
      const resp = await HttpClient.post(url, bod, cookie);
      expect(resp.responseObj).toEqual(body);
    });

    it('Post Error Handling', async () => {
      fetchMock.mockReject(Error('Some Error'));
      const url = '/some-url';
      const bod = { key: 'val' };
      const cookie = 'cookieKey=cookieValue';

      try {
        const resp = await HttpClient.post(url, bod, cookie);
        expect(resp).toEqual({
          responseObj: {
            message: 'There was an error',
            error: Error('Some Error'),
          },
          headers: new Headers(),
          statusCode: 500,
        });
      } catch (e) {
        console.log(e);
      }
    });
  });
});

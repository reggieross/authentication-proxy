import { HttpClient } from './httpClient';
import { AuthenticationClient } from './authenticationClient';
import { ENV } from '../env';

//TODO Update test so we don't have and unhandled promise rejection
describe('Authentication Client', () => {
  it('Should call the Http Client', async () => {
    const spy = jest.spyOn(HttpClient, 'get');
    AuthenticationClient.authenticate('some-token');
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(
      `${ENV.AUTHENNTICATION_URL}/token/validate`,
      'access_token=some-token'
    );
  });
});

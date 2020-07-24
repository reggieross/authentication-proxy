import { forwardFunction } from '../types';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

export const autheticationDecorator = (wrapped: forwardFunction) => {
  return async function (event: APIGatewayProxyEvent, context?: Context) {
    try {
      console.log('Hit decorator');
      return wrapped(event, context);

      // const { valid } = await AuthenticationClient.authenticate(token);
      // TODO: Decode token & update headers with user Information
      // if (valid) {
      //   return wrapped(event, context);
      // }
    } catch (e) {}
  };
};

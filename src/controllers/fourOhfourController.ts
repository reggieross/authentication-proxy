import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { Controller } from '../types';
import { autheticationDecorator } from '../decorators/authenticationDecorator';

const forward = async (event: APIGatewayProxyEvent, context?: Context) => {
  return {
    statusCode: 404,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      message: `Unable to find resource for path: ${event.path}`,
    }),
  };
};

export const FourOhFourController: Controller = {
  forward: autheticationDecorator(forward),
};

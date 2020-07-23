import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Callback,
  Context,
} from 'aws-lambda';

export const lambdaHandler = async (
  event: APIGatewayProxyEvent,
  context?: Context,
  callback?: Callback
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World from CI/CD' }),
  };
};

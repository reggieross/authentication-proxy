import { APIGatewayProxyEvent, Callback, Context } from 'aws-lambda';

export interface ResponseEntity<T> {
  statusCode: number;
  body: T;
}

export type forwardFunction = (
  event: APIGatewayProxyEvent,
  context?: Context
) => Promise<ResponseEntity<string>>;

export interface Controller {
  forward: forwardFunction;
}

import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Callback,
  Context,
} from 'aws-lambda';
import { getController } from './controllers/controllerFactory';

export const lambdaHandler = async (
  event: APIGatewayProxyEvent,
  context?: Context,
  callback?: Callback
): Promise<APIGatewayProxyResult> => {
  const controller = getController(event.path);
  return await controller.forward(event, context);
};

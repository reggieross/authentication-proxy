import { lambdaHandler } from './app';
import { APIGatewayProxyEvent } from 'aws-lambda';
import {PaymentsController} from "./controllers/paymentsController";
import {PolicyController} from "./controllers/policyController";

describe('Routing behaviour', function () {
  it('verifies successful call to policy controller', async () => {
    const event: APIGatewayProxyEvent = {
      body: '',
      headers: {},
      httpMethod: 'GET',
      isBase64Encoded: false,
      path: '/policy',
      pathParameters: {},
      queryStringParameters: undefined,
      stageVariables: {},
      resource: '',
    } as APIGatewayProxyEvent;
    const spy = jest.spyOn(PolicyController, 'forward');

    await lambdaHandler(event);
    expect(spy).toBeCalled();
  });

  it('verifies successful call to payments controller', async () => {
    const event: APIGatewayProxyEvent = {
      body: '',
      headers: {},
      httpMethod: 'GET',
      isBase64Encoded: false,
      path: '/payments',
      pathParameters: {},
      queryStringParameters: undefined,
      stageVariables: {},
      resource: '',
    } as APIGatewayProxyEvent;
    const spy = jest.spyOn(PaymentsController, 'forward');

    await lambdaHandler(event);
    expect(spy).toBeCalled();
  });

  it('verifies successful call to 404 controller', async () => {
    const event: APIGatewayProxyEvent = {
      body: '',
      headers: {},
      httpMethod: 'GET',
      isBase64Encoded: false,
      path: '/',
      pathParameters: {},
      queryStringParameters: undefined,
      stageVariables: {},
      resource: '',
    } as APIGatewayProxyEvent;
    const spy = jest.spyOn(PaymentsController, 'forward');

    await lambdaHandler(event);
    expect(spy).toBeCalled();
  });
});

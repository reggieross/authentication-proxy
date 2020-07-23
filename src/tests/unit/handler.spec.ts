import { lambdaHandler } from '../../app';
import { APIGatewayProxyEvent } from 'aws-lambda';

describe('Tests index', function () {
  it('verifies successful response', async () => {
    const event: APIGatewayProxyEvent = {
      body: '',
      headers: {},
      httpMethod: 'GET',
      isBase64Encoded: false,
      path: '',
      pathParameters: {},
      queryStringParameters: undefined,
      stageVariables: {},
      resource: '',
    } as APIGatewayProxyEvent;

    const result = await lambdaHandler(event);
    expect(result.statusCode).toEqual(200);
    let response = JSON.parse(result.body);
    expect(response.message).toEqual('Hello World');
  });
});

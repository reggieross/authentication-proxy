import { ResponseEntity } from './types';
import { APIGatewayProxyEvent } from 'aws-lambda';

const router = (event: APIGatewayProxyEvent): ResponseEntity<String> => {
  const path = event.path;


  return {
    statusCode: 404,
    body: JSON.stringify({ message: 'Hello World' }),
  } as ResponseEntity<String>;
};

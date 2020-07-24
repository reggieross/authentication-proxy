import {APIGatewayProxyEvent, Context} from "aws-lambda";
import {Controller} from "../types";
import {autheticationDecorator} from "../decorators/authenticationDecorator";

const forward = async (event: APIGatewayProxyEvent, context?: Context) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({ action: 'listItems' }),
  };
};

export const PaymentsController: Controller = {
  forward: autheticationDecorator(forward),
};

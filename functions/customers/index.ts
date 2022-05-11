import { APIGatewayProxyEvent } from "aws-lambda";
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

const supportedEndpoints = [];

const documentClient = new DocumentClient({ region: 'sa-east-1' });
const customersTable = process.env.CustomersTable;


export default async function (event: APIGatewayProxyEvent) {

    console.log('Hello world');

    return done(200, event, null);
}

const done = (statusCode, res, err) => {
    return {
        statusCode: statusCode,
        body: err
            ? JSON.stringify({ error: err.message })
            : JSON.stringify(res),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    };
};

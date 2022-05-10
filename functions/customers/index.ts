import { APIGatewayProxyEvent } from "aws-lambda";

const supportedEndpoints = [];

export default async function (event: APIGatewayProxyEvent) {
    const { parkingLotId } = event.pathParameters;
    const requesterUser = JSON.parse(event.requestContext.authorizer.user);
    const { initialDateTime, finalDateTime } =
        event.queryStringParameters || {};

    console.info(
        `endpoint called by ${requesterUser.id}: ${event.httpMethod} ${event.path}`
    );

    return event;
}

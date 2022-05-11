import { APIGatewayProxyEvent } from "aws-lambda";

import get from "../../db/customers/get";
import update from "../../db/customers/update";
import remove from "../../db/customers/remove";
import insert from "../../db/customers/insert";
import list from "../../db/customers/list";

export default async function (event: APIGatewayProxyEvent) {
    /**
     * aws api gateway will ensure that only events defined in template.yml
     * will trigger this function.
     *
     * but it's valid to check it out in case this function get triggered outside
     * this application scope.
     *
     *  */

    const supportedEndpoints = [
        { httpMethod: "GET", endpoint: "/customers" },
        { httpMethod: "GET", endpoint: "/customers/{customerId}" },
        { httpMethod: "POST", endpoint: "/customers" },
        { httpMethod: "PUT", endpoint: "/customers/{customerId}" },
        { httpMethod: "DELETE", endpoint: "/customers/{customerId}" },
    ];

    const isValidRequest = supportedEndpoints.some(
        ({ httpMethod, endpoint }) =>
            httpMethod === event.httpMethod && endpoint === event.resource
    );
    if (!isValidRequest) {
        return done(403, null, { message: "Fordidden resource" });
    }

    /**
     * find which endpoint triggered this function and take action accordingly
     * using RESTful protocol
     */
    switch (event.httpMethod) {
        case "GET": {
            const { customerId, nextKey }: any = event.pathParameters || {};
            if (!customerId) {
                const resp = await list(nextKey);
                return done(200, resp, null);
            }

            const resp = await get(customerId);
            return done(200, resp, null);
        }
        case "POST": {
            const data = JSON.parse(event.body);
            const resp = await insert(data);
            return done(201, resp, null);
        }
        case "PUT": {
            const { customerId }: any = event.pathParameters || {};
            const data = JSON.parse(event.body);
            const resp = await update(customerId, data);
            return done(204, resp, null);
        }
        case "DELETE": {
            const { customerId }: any = event.pathParameters || {};
            const resp = await remove(customerId);
            return done(204, resp, null);
        }
        default: {
            return done(405, null, { message: "Method not allowed" });
        }
    }
}

const done = (statusCode: number, res: any, err: any) => {
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

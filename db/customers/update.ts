import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { Customer } from "../../models/Customer";

const documentClient = new DocumentClient({ region: "us-east-1" });
const customersTable = process.env.CustomersTable;

export default async function update(
    customerId: string,
    fields: Customer
): Promise<{ data: Customer }> {
    const getResp = await documentClient
        .update({
            TableName: customersTable,
            ReturnValues: "ALL_NEW",
            Key: { customerId },
            AttributeUpdates: Object.keys(fields).reduce((acc, e) => {
                if (e === "customerId") return acc;
                acc[e] = { Action: "PUT", Value: fields[e] };
                return acc;
            }, {}),
        })
        .promise();

    return {
        data: getResp.Attributes as Customer,
    };
}

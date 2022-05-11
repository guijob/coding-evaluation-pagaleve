import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { Customer } from "../../models/Customer";

const documentClient = new DocumentClient({ region: "us-east-1" });
const customersTable = process.env.CustomersTable;

export default async function insert(
    customer: Customer
): Promise<{ data: Customer }> {
    const putResp = await documentClient
        .put({
            TableName: customersTable,
            ReturnValues: "ALL_NEW",
            Item: customer,
        })
        .promise();

    return {
        data: putResp.Attributes as Customer,
    };
}

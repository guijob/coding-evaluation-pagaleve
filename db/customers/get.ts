import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { Customer } from "../../models/Customer";

const documentClient = new DocumentClient({ region: "us-east-1" });
const customersTable = process.env.CustomersTable;

export default async function get(
    customerId: string
): Promise<{ data: Customer }> {
    const getResp = await documentClient
        .get({
            TableName: customersTable,
            Key: { customerId },
        })
        .promise();

    return {
        data: getResp.Item as Customer,
    };
}

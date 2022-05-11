import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { Customer } from "../../models/Customer";

const documentClient = new DocumentClient({ region: "sa-east-1" });
const customersTable = process.env.CustomersTable;

export default async function list(
    nextKey?: DocumentClient.Key
): Promise<{ customers: Customer[]; nextKey: DocumentClient.Key }> {
    const scanResp = await documentClient
        .scan({
            TableName: customersTable,
            ExclusiveStartKey: nextKey,
        })
        .promise();

    return {
        customers: scanResp.Items as Customer[],
        nextKey: scanResp.LastEvaluatedKey,
    };
}

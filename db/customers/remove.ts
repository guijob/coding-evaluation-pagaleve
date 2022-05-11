import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { Customer } from "../../models/Customer";

const documentClient = new DocumentClient({ region: "sa-east-1" });
const customersTable = process.env.CustomersTable;

export default async function remove(
    customerId: string
): Promise<{ data: Customer }> {
    const getResp = await documentClient
        .delete({
            TableName: customersTable,
            ReturnValues: "ALL_OLD",
            Key: { customerId },
        })
        .promise();

    return {
        data: getResp.Attributes as Customer,
    };
}

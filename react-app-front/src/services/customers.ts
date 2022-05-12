import axios from "axios";

const url = "https://krgy3d55yc.execute-api.us-east-1.amazonaws.com/prod/";

export const customersService = {
    list,
    get,
    insert,
    update,
    remove,
};

async function list() {
    return axios({
        url: `${url}/customers`,
        method: "GET",
    });
}

async function get(customerId: string) {
    return axios({
        url: `${url}/customers/${customerId}`,
        method: "GET",
    });
}

async function insert(customer: any) {
    return axios({
        url: `${url}/customers`,
        method: "POST",
        data: customer,
    });
}

async function update(customerId: string, fields: any) {
    return axios({
        url: `${url}/customers/${customerId}`,
        method: "PUT",
        data: fields,
    });
}

async function remove(customerId: string) {
    return axios({
        url: `${url}/customers/${customerId}`,
        method: "DELETE",
    });
}

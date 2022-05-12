import { useParams } from "react-router-dom";

export default function NewCustomer() {
    let params = useParams();
    return <h2>Invoice: {params.invoiceId}</h2>;
}

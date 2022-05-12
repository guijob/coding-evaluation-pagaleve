import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { customersService } from "../services/customers";

export default function Customers() {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        async function fetchCustomers() {
            const resp = await customersService.list();
            console.log(resp);
            setCustomers([]);
        }
        fetchCustomers();
    }, []);

    return (
        <>
            <div style={{ display: "flex" }}>
                <nav
                    style={{
                        borderRight: "solid 1px",
                        padding: "1rem",
                    }}
                >
                    Customers table
                    {customers.map((customer: any) => (
                        <Link
                            style={{ display: "block", margin: "1rem 0" }}
                            to={`/customers/${customer.id}`}
                            key={customer.number}
                        >
                            {customer.name}
                        </Link>
                    ))}
                </nav>
                <Outlet />
            </div>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: "absolute", bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                
            </SpeedDial>
        </>
    );
}

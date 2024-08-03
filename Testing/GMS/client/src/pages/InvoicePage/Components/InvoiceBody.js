import React from "react";
import InvoiceFrom from "./Body/InvoiceFrom";
import InvoiceTo from "./Body/InvoiceTo";
import Table from "./Body/Table";

const InvoiceBody = (props) => {
    return (
        <div className="card-body">
            <Table />
            <div className="row mt-5">
                <InvoiceFrom />
                <InvoiceTo />
            </div>
        </div>
    );
}

export default InvoiceBody;
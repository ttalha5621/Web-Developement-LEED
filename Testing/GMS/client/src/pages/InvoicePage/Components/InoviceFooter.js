import React from "react";
import InvoiceNotes from "./InvoiceFooter/InvoiceNotes";
import PayNowButton from "./InvoiceFooter/PayNowButton";

const InvoiceFooter = (props) => {
    return (
        <div className="card-footer text-center">
            <PayNowButton />
            <InvoiceNotes />
        </div>
    );
}

export default InvoiceFooter;
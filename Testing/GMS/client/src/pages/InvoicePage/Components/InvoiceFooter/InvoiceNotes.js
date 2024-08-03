import React from "react";

const InvoiceNotes = (props) => {
    return (
        <h6 className="mt-4 text-left">
            <div className="h6 text-capitalize font-weight-bold card-description mb-3">Notes</div>
                The notes added will not be reflected in the previously generated invoices. It will only be added to the upcoming invoices.
        </h6>
    );
}

export default InvoiceNotes;
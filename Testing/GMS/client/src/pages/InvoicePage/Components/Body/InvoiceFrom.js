import React from "react";

const InvoiceFrom = (props) => {
    return (
        <div className="col-12 col-md-6">
            <h6 className="text-uppercase card-description font-weight-bold mb-3">Invoiced from</h6>
            <p className="mb-4">
                <strong>Chris Michael</strong>
                <br />
                        133 Nice Street
                        <br />
                        Appleville, NY 34212
                    </p>
        </div>
    );
}

export default InvoiceFrom;
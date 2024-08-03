import React from "react";

const InvoiceTo = (props) => {
    return (
        <div className="col-12 col-md-6 text-md-right">
            <h6 className="text-uppercase card-description font-weight-bold mb-3">Invoiced to</h6>
            <p className="mb-4">
                <strong>Jenny Lame</strong>
                <br />
                        12 Nord Street
                        <br />
                        Dortmund, QR 63568
                    </p>
        </div>
    );
}

export default InvoiceTo;
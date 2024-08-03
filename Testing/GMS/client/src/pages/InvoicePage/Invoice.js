import React from "react";
import InvoiceFooter from "./Components/InoviceFooter";
import InvoiceTitle from "./Components/InvoiceTitle";
import InvoiceBody from "./Components/InvoiceBody";

const Invoice = (props) => {
    return (

        <div className="content">
            <div className="container">
                <div className="col-md-6 ml-auto mr-auto">
                    <div className="card card-invoice mt-5">
                        <InvoiceTitle />
                        <InvoiceBody />
                        <hr className="hr" />
                        <InvoiceFooter />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invoice;
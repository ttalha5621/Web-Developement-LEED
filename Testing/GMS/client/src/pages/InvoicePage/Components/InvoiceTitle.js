import React from "react";
import Download from "./InvoiceTitle/Dowload";
import Title from "./InvoiceTitle/Title";

const InvoiceTitle = (props) => {
    return (
        <>
            <div className="card-header text-center" data-color-icon="warning">
                <Download />
                <div className="row">
                    <Title />
                </div>
            </div>
        </>
    );
}

export default InvoiceTitle;
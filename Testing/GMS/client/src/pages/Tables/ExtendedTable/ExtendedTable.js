import React from "react";
import AddCustomer from "./Components/AddCustomer";
import ShoppingCart from "./Components/ShoppingCart";
import SimpleTable from "./Components/SimpleTable";
import StripedTable from "./Components/StripedTable";
// import AddCustomer from "./Components/AddCustomer";

const ExtendedTable = (props) => {
    return (
        <>
            <div className="panel-header panel-header-sm"></div>
            <div className="content">
                <div className="row">
                    <SimpleTable />

                    <StripedTable />

                    <ShoppingCart />

                    <AddCustomer />
                </div>
            </div>
        </>
    );
}

export default ExtendedTable;
import React from "react";
import HeaderTables from "./StripedTables/HeaderTables";
import StripedTables from "./StripedTables/StripedTables";
import Title from "../../Title/Title";

const StripedTable = (props) => {
    return (
        <div className="col-md-12">
            <div className="card">
                <Title Title="Striped Table with Checkboxes" />
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead className="text-primary">
                                <HeaderTables Hash="#" Name="Product Name" Type="Type"
                                    Qty="Qty" Price="Price" Amount="Amount" />
                            </thead>
                            <tbody>

                                <StripedTables Serial="1"
                                    Name="Moleskine" Type="Office" Qty="25" Price="€ 49" Amount="€ 1,225" />

                                <StripedTables Serial="2" Name="Stabilo" Type="Office"
                                    Qty="20" Price="€ 329" Amount="€ 3,125" />

                                <StripedTables Serial="3" Name="A4 Paper" Type="Office"
                                    Qty="29" Price="€ 100" Amount="€ 3,154" />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StripedTable;
import React from "react";

const Table = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="table-responsive">
                    <table className="table mt-3">
                        <thead>
                            <tr>
                                <th className="pl-0">
                                    <h6 className="font-weight-bold text-capitalize">Product</h6>
                                </th>
                                <th className="px-0 ">
                                    <h6 className="font-weight-bold text-capitalize">Unit</h6>
                                </th>
                                <th className="pr-0 text-right">
                                    <h6 className="font-weight-bold text-capitalize">Price</h6>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="pl-0">Web Updates</td>
                                <td className="px-0">1</td>
                                <td className="pr-0 text-right">$380.00</td>
                            </tr>
                            <tr>
                                <td className="pl-0">SSL Renewals</td>
                                <td className="px-0">3</td>
                                <td className="pr-0 text-right">$175.00</td>
                            </tr>
                            <tr>
                                <td className="pl-0">VAT</td>
                                <td className="px-0">1</td>
                                <td className="pr-0 text-right">$37.00</td>
                            </tr>
                            <tr>
                                <td className="px-0 font-weight-bold">Total amount due</td>
                                <td></td>
                                <td className="px-0 text-right">
                                    <h3>$592.00</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Table;
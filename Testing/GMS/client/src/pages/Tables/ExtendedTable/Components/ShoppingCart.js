import React from "react";
import HeaderTables from "./ShoppingCartsTables/HeaderTables";
import ShoppingCartsTables from "./ShoppingCartsTables/ShoppingCartsTables";
import Title from "../../Title/Title";

const ShoppingCart = (props) => {
    return (
        <div className="col-md-12">
            <div className="card">
                <Title Title="Shopping Cart Table" />
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-shopping">
                            <thead className="">
                                <HeaderTables Product="Product" Color="Color"
                                    Size="Size" Price="Price" Qty="Qty" Amount="Amount" />
                            </thead>
                            <tbody>
                                <ShoppingCartsTables Name="Suede Biker Jacket" Brand="by Saint Laurent" Color="Black"
                                    Size="M" Sign="€" Price="3,390" Qty="1"
                                    Sign2="€" Amount="549" />
                                <ShoppingCartsTables Name="Jersey T-Shirt" Brand="by Balmain" Color="Black"
                                    Size="M" Sign="€" Price="549" Qty="2"
                                    Sign2="€" Amount="837" />
                                <ShoppingCartsTables Name="Slim-Fit Swim Short" Brand="by prada" Color="Red"
                                    Size="M" Sign="€" Price="234" Qty="3"
                                    Sign2="€" Amount="897" />
                                <tr>
                                    <td colspan="3"></td>
                                    <td className="td-total">Total</td>
                                    <td className="td-price">
                                        <small>€</small>2,346
                                                </td>
                                    <td colspan="3" className="text-right">
                                        <button type="button" rel="tooltip" className="btn btn-info btn-round ">
                                            Complete Purchase
                                                        <i className="now-ui-icons arrows-1_minimal-right"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
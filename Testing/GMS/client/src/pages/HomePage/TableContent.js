import React from "react";
import Images from "../../assets/index";
const TableContent = (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Best Selling Products</h4>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-shopping">
                                <thead className="">
                                    <th className="text-center"></th>

                                    <th>Product</th>

                                    <th>Color</th>

                                    <th>Size</th>

                                    <th className="text-right">Price</th>

                                    <th className="text-right">Qty</th>

                                    <th className="text-right">Amount</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="img-container">
                                                <img src={Images.SaintLaurent} alt="" />
                                            </div>
                                        </td>
                                        <td className="td-name">
                                            <a href="#jacket">Suede Biker Jacket</a>
                                            <br /><small>by Saint Laurent</small>
                                        </td>
                                        <td>Black</td>
                                        <td>M</td>
                                        <td className="td-number"><small>€</small>3,390</td>
                                        <td className="td-number">1</td>
                                        <td className="td-number"><small>€</small>549</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="img-container">
                                                <img src={Images.BalMain} alt="" />
                                            </div>
                                        </td>
                                        <td className="td-name">
                                            <a href="#pants">Jersey T-Shirt</a>
                                            <br /><small>by Balmain</small>
                                        </td>
                                        <td>Black</td>
                                        <td>M</td>
                                        <td className="td-number"><small>€</small>499</td>
                                        <td className="td-number">2</td>
                                        <td className="td-number"><small>€</small>998</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="img-container">
                                                <img src={Images.Prada} alt="" />
                                            </div>
                                        </td>
                                        <td className="td-name">
                                            <a href="#nothing">Slim-Fit Swim Short</a>
                                            <br /><small>by Prada</small>
                                        </td>
                                        <td>Red</td>
                                        <td>M</td>
                                        <td className="td-number"><small>€</small>200</td>
                                        <td className="td-number">1</td>
                                        <td className="td-number"><small>€</small>799</td>
                                    </tr>

                                    <tr>
                                        <td colspan="5"></td>
                                        <td className="td-total">Total</td>
                                        <td className="td-price"><small>€</small>2,346</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TableContent;
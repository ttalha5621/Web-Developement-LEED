import React from "react";
import Images from "../../../../../assets/index";
const Table = (props) => {
    return (
        <div className="table-responsive">
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <div className="flag">
                                <img src={Images.Us} alt="" />
                            </div>
                        </td>
                        <td>USA</td>
                        <td className="text-right">2.920</td>
                        <td className="text-right">53.23%</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flag">
                                <img src={Images.De} alt="" />
                            </div>
                        </td>
                        <td>Germany</td>
                        <td className="text-right">1.300</td>
                        <td className="text-right">20.43%</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flag">
                                <img src={Images.Au} alt="" />
                            </div>
                        </td>
                        <td>Australia</td>
                        <td className="text-right">760</td>
                        <td className="text-right">10.35%</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flag">
                                <img src={Images.Gb} alt="" />
                            </div>
                        </td>
                        <td>United Kingdom</td>
                        <td className="text-right">690</td>
                        <td className="text-right">7.87%</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flag">
                                <img src={Images.Ro} alt="" />
                            </div>
                        </td>
                        <td>Romania</td>
                        <td className="text-right">600</td>
                        <td className="text-right">5.94%</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flag">
                                <img src={Images.Br} alt="" />
                            </div>
                        </td>
                        <td>Brasil</td>
                        <td className="text-right">550</td>
                        <td className="text-right">4.34%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
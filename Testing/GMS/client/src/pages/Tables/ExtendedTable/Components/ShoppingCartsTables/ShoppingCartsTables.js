import React from "react";
import Images from "../../../../../assets/index";
const ShoppingCartsTables = (props) => {
    return (<tr>
        <tr>
            <td>
                <div className="img-container">
                    <img src={Images.SaintLaurent} alt="..." />
                </div>
            </td>
            <td className="td-name">
                <a href="#jacket">{props.Name}</a>
                <br /><small>{props.Brand}</small>
            </td>
            <td>{props.Color}</td>
            <td>{props.Size}</td>
            <td className="td-number">
                <small>{props.Sign}</small>{props.Price}
            </td>
            <td className="td-number">{props.Qty}
                <div className="btn-group">
                    <button className="btn btn-info btn-sm"> <i
                        className="fas fa-minus"></i> </button>
                    <button className="btn btn-info btn-sm"> <i
                        className="fas fa-plus"></i> </button>
                </div>
            </td>
            <td className="td-number">
                <small>{props.Sign2}</small>{props.Amount}</td>
            <td className="td-actions">
                <button type="button" rel="tooltip" data-placement="left"
                    title="Remove item" className="btn btn-neutral">
                    <i className="fas fa-times"></i>
                </button>
            </td>
        </tr>
    </tr>
    );
}
export default ShoppingCartsTables;

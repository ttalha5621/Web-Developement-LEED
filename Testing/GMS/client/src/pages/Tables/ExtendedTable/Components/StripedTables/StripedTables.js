import React from "react";
const StripedTables = (props) => {
    return (
        <tr>
            <td className="text-center">{props.Serial}</td>
            <td className="text-center">
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" checked={props.checked} />
                        <span className="form-check-sign"></span>
                    </label>
                </div>
            </td>
            <td>{props.Name}</td>
            <td>{props.Type}</td>
            <td className="text-center">{props.Qty}</td>
            <td className="text-right">{props.Price}</td>
            <td className="text-right">{props.Amount}</td>
        </tr>

    );
}
export default StripedTables;
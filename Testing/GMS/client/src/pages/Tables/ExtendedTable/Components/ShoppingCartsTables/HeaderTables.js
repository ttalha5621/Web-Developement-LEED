import React from "react";
const HeaderTables = (props) => {
    return (
        <>
            <th className="text-center"></th>
            <th>{props.Product}</th>
            <th>{props.Color}</th>
            <th>{props.Size}</th>
            <th className="text-center">{props.Price}</th>
            <th className="text-right">{props.Qty}</th>
            <th className="text-right">{props.Amount}</th>
        </>
    );
}
export default HeaderTables;
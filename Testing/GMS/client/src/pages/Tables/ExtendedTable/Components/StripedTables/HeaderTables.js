import React from "react";
const HeaderTables = (props) => {
    return (
        <>
            <th className="text-center">{props.Hash}</th>
            <th className="text-center"></th>
            <th>{props.Name}</th>
            <th>{props.Type}</th>
            <th className="text-center">{props.Qty}</th>
            <th className="text-right">{props.Price}</th>
            <th className="text-right">{props.Amount}</th>
        </>
    );
}
export default HeaderTables;
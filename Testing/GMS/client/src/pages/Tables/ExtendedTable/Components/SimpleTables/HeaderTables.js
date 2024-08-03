import React from "react";
const HeaderTables = (props) => {
    return (
        <>
            <th className="text-center">{props.Hash}</th>
            <th>{props.Name}</th>
            <th>{props.Position}</th>
            <th className="text-center">{props.Date}</th>
            <th className="text-right">{props.Salary}</th>
            <th className="text-right">{props.Actions}</th>
        </>
    );
}
export default HeaderTables;
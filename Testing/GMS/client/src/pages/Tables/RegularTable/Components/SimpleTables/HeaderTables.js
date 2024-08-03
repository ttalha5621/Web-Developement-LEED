import React from "react";
const HeaderTables = (props) => {
    return (
        <thead className=" text-primary">
            <th> {props.Name}</th>
            <th>{props.Country}</th>
            <th>{props.City}</th>
            <th className="text-right">{props.Salary}</th>
        </thead>
    )
}
export default HeaderTables
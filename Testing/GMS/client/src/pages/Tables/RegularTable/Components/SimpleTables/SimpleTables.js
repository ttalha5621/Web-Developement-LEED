import React from "react";
const SimpleTables = (props) => {
    return (
        <tbody>
            <tr className={props.Color}>
                <td>{props.Name}</td>
                <td>{props.Country}</td>
                <td>{props.City}</td>
                <td className="text-right">{props.Salary}</td>
            </tr>
        </tbody>

    );
}
export default SimpleTables;
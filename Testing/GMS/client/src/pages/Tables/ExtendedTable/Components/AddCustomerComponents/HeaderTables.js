import React from "react";
const HeaderTables = (props) => {
    return (
        <>
            <th className="text-center">{props.Hash}</th>
            <th className="text-center">{props.FirstName}</th>
            <th className="text-center">{props.LastName}</th>
            <th className="text-center">{props.Email}</th>
            <th className="text-center">{props.ContactNo}</th>
            <th className="text-center">{props.CNIC}</th>
            <th className="text-center">{props.AccountNo}</th>
            <th className="text-center">{props.Action}</th>


        </>
    );
}
export default HeaderTables;
import React from "react";
const AddCustomers = (props) => {
    return (
        <tr>
            <td className="text-center">{props.Serial}</td>
            <td className="text-center">{props.FirstName}</td>
            <td className="text-center">{props.LastName}</td>
            <td className="text-center">{props.Email}</td>
            <td className="text-center">{props.ContactNo}</td>
            <td className="text-center">{props.CNIC}</td>
            <td className="text-center">{props.AccountNo}</td>
            <td className="text-center">
                <div className="btn-group btn-group-sm">
                    <button className="add btn btn-outline-success" title="Add" data-toggle="tooltip" style={{ display: "none" }}><i className="fas fa-plus"></i></button>
                    <button className="edit btn btn-outline-warning" title="Edit" data-toggle="tooltip"><i className="fas fa-pencil-alt"></i></button>
                    <button className="delete btn btn-outline-danger" title="Delete" data-toggle="tooltip"><i className="fas fa-trash"></i></button>
                </div>
            </td>

        </tr>

    );
}
export default AddCustomers;
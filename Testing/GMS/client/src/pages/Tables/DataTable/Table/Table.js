
import React from "react";
import Icons from "./Icons";
const Table = (props) => {
    return (
        <tr>
            <td>{props.Name}</td>
            <td>{props.Position}</td>
            <td>{props.Office}</td>
            <td>{props.Age}</td>
            <Icons Button1="btn btn-round btn-info btn-icon btn-sm like" Icon1="fas fa-heart"
                   Button2="btn btn-round btn-warning btn-icon btn-sm edit" Icon2="far fa-calendar-alt"
                   Button3="btn btn-round btn-danger btn-icon btn-sm remove" Icon3="fas fa-times" />
        </tr>
    )
}
export default Table;

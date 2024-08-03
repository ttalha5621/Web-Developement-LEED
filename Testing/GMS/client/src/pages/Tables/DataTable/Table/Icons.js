import React from "react";
const Icons = (props) => {
    return (
        <td className="text-right">
            <a href="#" className={props.Button1}><i
                className={props.Icon1}></i></a>
            <a href="#" className={props.Button2}><i
                className={props.Icon2}></i></a>
            <a href="#" className={props.Button3}><i
                className={props.Icon3}></i></a>
        </td>

    );
}
export default Icons;
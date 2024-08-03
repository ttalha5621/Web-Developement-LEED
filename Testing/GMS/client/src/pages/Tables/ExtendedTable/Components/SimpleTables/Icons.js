import React from "react";
const Icons = (props) => {
    return (
        <td className="text-right">
            <button type="button" rel="tooltip"
                className={props.Button}>
                <i className={props.Icon}></i>
            </button>
            <button type="button" rel="tooltip" className={props.Button2}>
                <i className={props.Icon2}></i>
            </button>
            <button type="button" rel="tooltip"
                className={props.Button3}>
                <i className={props.Icon3}></i>
            </button>
        </td>);
}
export default Icons;




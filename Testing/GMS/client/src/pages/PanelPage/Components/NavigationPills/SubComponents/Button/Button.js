import React from "react";
const Button = (props) => {
    return (
        <li className="nav-item">
            <a className={props.Nav} data-toggle="tab" href={props.Link} role="tablist">
                <i className={props.Icon}></i>
                {props.Text}
            </a>
        </li>
    )
}
export default Button;

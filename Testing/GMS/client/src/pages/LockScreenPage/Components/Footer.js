import React from "react";

const Footer = (props) => {
    return (
        <div className="card-footer ">
            <a href="#pablo" className={props.Button}>{props.Title}</a>
        </div>
    );
}

export default Footer;
import React from "react";

const Footer = (props) => {
    return (
        <div className="card-footer text-center">
            <button type="submit" className="btn btn-primary">{props.Button}</button>
        </div>
    );
}
export default Footer;
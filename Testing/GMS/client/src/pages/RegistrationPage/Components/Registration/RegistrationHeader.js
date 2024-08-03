import React from "react";

const RegistrationHeader = (props) => {
    return (
        <div className="card-header ">
            <h4 className="card-title">{props.Title}</h4>
            <div className="social">
                <button className={props.TButton}>
                    <i className={props.TIcon}></i>
                </button>
                <button className={props.DButton}>
                    <i className={props.DIcon}></i>
                </button>
                <button className={props.FButton}>
                    <i className={props.FIcon}></i>
                </button>
                <h5 className="card-description"> {props.Text} </h5>
            </div>
        </div>
    );
}

export default RegistrationHeader;

//
//
import React from "react";

const Description = (props) => {
    return (
        <div className={props.Size}>
            <div className={props.Color}>
                <i className={props.Icon}></i>
            </div>
            <div className="description">
                <h5 className="info-title">{props.Title}</h5>
                <p className="description">
                  {props.Description}
                                    </p>
            </div>
        </div>
    );
}

export default Description;

//
//
//
// Title
//  
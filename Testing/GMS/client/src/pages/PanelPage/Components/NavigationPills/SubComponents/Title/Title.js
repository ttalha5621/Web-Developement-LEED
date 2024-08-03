import React from "react";
const Title = (props) => {
    return (
        <div className="card-header ">
            <h4 className={props.Card}> {props.Title} <small className="description">{props.title}</small></h4>
        </div>
    )
}
export default Title;

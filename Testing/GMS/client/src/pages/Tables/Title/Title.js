import React from "react";
const Title = (props) => {
    return (
        <div className="card-header">
            <h4 className="card-title"> {props.Title}</h4>
            <p className="category"> {props.Paragraph}</p>
        </div>
    )
}
export default Title
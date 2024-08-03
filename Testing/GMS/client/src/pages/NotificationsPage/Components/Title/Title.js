import React from "react";
const Title= (props) => {
    return (
        <div className={props.Header}>
            <h4 className="card-title">{props.Text}
            <p className={props.Category}>{props.Paragraph}</p>
            </h4>
        </div>
    )
}
export default Title

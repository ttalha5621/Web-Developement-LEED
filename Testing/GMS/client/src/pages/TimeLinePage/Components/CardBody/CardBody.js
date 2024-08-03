import React from "react";

const CardBody = (props) => {
    return (
        <div className={props.Type}>
            <p>{props.Paragraph}</p>
            <p>{props.Paragraph2}</p>
        </div>
    );
}

export default CardBody



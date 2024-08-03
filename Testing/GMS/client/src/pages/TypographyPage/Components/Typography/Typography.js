import React from "react";
const Typography = (props) => {
    return (
        <div className={props.Heading}>
            <span>{props.Title}</span>
            <blockquote>
                <p className={props.Paragraph}>
                    {props.Text} 
                    <small>
                        {props.Content}
                    </small>
                </p>
            </blockquote>
        </div>
    );
}
export default Typography;
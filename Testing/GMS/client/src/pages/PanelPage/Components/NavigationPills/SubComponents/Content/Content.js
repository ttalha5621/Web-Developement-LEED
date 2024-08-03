import React from "react";
const Content = (props) => {
    return (
        <div className={props.ContentTab} id={props.ContentId}  role={props.Panel}
        aria-labelledby={props.Heading}>
{props.Content}
            <br /><br />
{props.LessContent}
        </div>
    )
}
export default Content;





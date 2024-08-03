import React from "react";

const SingleMultiFileChooser = (props) => {
    return (
        <>
            <h4 className="card-title">{props.Title}</h4>
            <div className={props.Form}>
                <input type={props.File} multiple={props.multiple} className={props.Field} />
                <input type={props.Text} className={props.Field2}
                    placeholder={props.Placeholder} multiple={props.multiple2} />
            </div>
        </>
    );
}

export default SingleMultiFileChooser;

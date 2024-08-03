import React from "react";

const FormRows = (props) => {
    return (
        <>
            <label className={props.Form}>{props.Label}</label>
            <div className={props.Column}>
                <div className="form-group">
                    <input className="form-control" type={props.Type} name={props.Name}
                        required={props.Required} email={props.Email}
                        number={props.Number} url={props.URL} minLength={props.Size}
                        maxLength={props.Size2} range={props.Range} min={props.Size3}
                        max={props.Size4} id={props.Id} placeholder={props.Placeholder} />
                </div>
            </div>
            <label className={props.Form2}><code>{props.Label2}</code></label>
        </>
    );
}
export default FormRows;
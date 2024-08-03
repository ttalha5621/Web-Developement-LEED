import React from "react";

const CheckBoxRadio = (props) => {
    return (
        <>
            <div class={props.Form}>
                <label class="form-check-label">
                    <input class="form-check-input" type={props.Type}
                        name={props.Name} id={props.Id} value={props.Value} disabled={props.disabled} />
                    <span class="form-check-sign"></span>
                    {props.Text}
                </label>
            </div>
        </>
    );
}

export default CheckBoxRadio;

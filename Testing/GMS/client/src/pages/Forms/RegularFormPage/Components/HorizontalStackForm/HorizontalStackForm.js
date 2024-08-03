import React from "react";
const HorizontalStackForm = (props) => {
    return (
        <>
            <label class={props.Column}>{props.Label}</label>
            <div class={props.Column2}>
                <div class="form-group">
                    <input type={props.Type} class="form-control" />
                </div>
            </div>
        </>
    );
}
export default HorizontalStackForm;

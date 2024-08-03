import React from "react";

const Fields = (props) => {
    return (
        <>
            <div class="row">
                <label class="col-sm-2 col-form-label">{props.Label}</label>
                <div class="col-sm-10">
                    <div class={props.Color}>
                        <input type={props.Type} class="form-control" placeholder={props.Placeholder}
                        disabled={props.disabled} value={props.Value}/>
                        <span class={props.Span}>{props.Text}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Fields;



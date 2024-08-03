import React from "react";
const CheckBox = (props) => {
    return (
        <>
            
                <div class={props.Form}>
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" />
                        <span class="form-check-sign"></span>
                                {props.Text}
                            </label>
                
            </div>
        </>
    );
}
export default CheckBox;



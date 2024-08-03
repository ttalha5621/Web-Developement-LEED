import React from "react";
import CheckBoxRadio from "./CheckBox_Radio/CheckBoxRadio";
const InlineCheckBox = (props) => {
    return (
        <>
            <div class="row">
                <label class="col-sm-2 col-form-label">Inline checkboxes</label>
                <div class="col-sm-10">
                    <CheckBoxRadio Form="form-check form-check-inline" 
                    Type="checkbox" Text="a" />
                    <CheckBoxRadio Form="form-check form-check-inline" 
                    Type="checkbox" Text="b" />
                     <CheckBoxRadio Form="form-check form-check-inline" 
                    Type="checkbox" Text="c" />

                </div>
            </div>
        </>
    );
}

export default InlineCheckBox;
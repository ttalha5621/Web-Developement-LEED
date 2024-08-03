import React from "react";
import CheckBoxRadio from "./CheckBox_Radio/CheckBoxRadio";

const CheckBox = (props) => {
    return (
        <>
            <div class="row">
                <label class="col-sm-2 col-form-label">Checkboxes and radios</label>
                <div class="col-sm-10 checkbox-radios">
                    <CheckBoxRadio Form="form-check" Type="checkbox" Text="First Checkbox" />
                    <CheckBoxRadio Form="form-check" Type="checkbox" Text="Second Checkbox" />
                    <CheckBoxRadio Form="form-check form-check-radio" Type="radio"
                        Text="First Radio" Name="exampleRadios" Value="option1" Id="exampleRadios1" />
                    <CheckBoxRadio Form="form-check form-check-radio" Type="radio"
                        Text="Second Radio" Name="exampleRadios" Value="option2" Id="exampleRadios2" />
                </div>
            </div>
        </>
    );
}

export default CheckBox;
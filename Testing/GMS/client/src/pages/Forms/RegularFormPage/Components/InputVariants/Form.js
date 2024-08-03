import React from "react";
import ColumSize from "./Components/ColumSize";
import CheckBoxRadio from "../Elements/CheckBox_Radio/CheckBoxRadio";
import Fields from "../Elements/Fields";

const Form = (props) => {
    return (
        <>
            <form method="get" action="#" class="form-horizontal">
                <div class="row">
                    <label class="col-sm-2 col-form-label">Custom Checkboxes &amp; radios</label>
                    <div class="col-sm-4 col-sm-offset-1 checkbox-radios">
                        <CheckBoxRadio Form="form-check" Type="checkbox" Text="Unchecked" />
                        <CheckBoxRadio Form="form-check" Type="checkbox" Text="Checked" />
                        <CheckBoxRadio Form="form-check disabled" Type="checkbox" Text="DisabledUnChecked" disabled="true" />
                        <CheckBoxRadio Form="form-check disabled" Type="checkbox" Text="DisabledChecked" disabled="true" />
                    </div>
                    <div class="col-sm-5 checkbox-radios">
                        <CheckBoxRadio Form="form-check form-check-radio" Type="radio"
                            Text="Radio Off" Name="exampleRadios" Value="option1" Id="exampleRadios1" />
                        <CheckBoxRadio Form="form-check form-check-radio" Type="radio"
                            Text="Radio On" Name="exampleRadios" Value="option2" Id="exampleRadios2" />
                        <CheckBoxRadio Form="form-check form-check-radio disabled" Type="radio"
                            Text="Radio is Off" Name="exampleRadios" Value="option1" Id="exampleRadios1" disabled="true" />
                        <CheckBoxRadio Form="form-check form-check-radio disabled" Type="radio"
                            Text="Radio is On" Name="exampleRadios" Value="option2" Id="exampleRadios2" disabled="true" />
                    </div>
                </div>
                <Fields Label="Input with success" Color="form-group has-success"
                    Type="text" Value="Success" />
                <Fields Label="Input with error" Color="form-group has-danger"
                    Type="text" Value="Error" />

                <ColumSize Title="Column sizing"/>

            </form>
        </>
    );
}

export default Form;
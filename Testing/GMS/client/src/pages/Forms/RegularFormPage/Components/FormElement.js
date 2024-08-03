import React from "react";
import CheckBox from "./Elements/CheckBoxs";
import InlineCheckBox from "./Elements/InlineCheckBox";
import StaticControl from "./Elements/StaticControl";
import Title from "../../Title/Title";
import Fields from "./Elements/Fields";

const FormElement = (props) => {
    return (
        <>
            <div class="card ">
                <Title Title="Form Elements" />
                <div class="card-body ">
                    <form method="get" action="#" class="form-horizontal">
                        <Fields Label="With help" Type="text" Span="form-text"
                            Text=" A block of help text that breaks onto a new line." Color="form-group" />
                        <Fields Label="Password" Type="password" Color="form-group" />
                        <Fields Label="Placeholder" Type="text" Placeholder="placeholder" Color="form-group" />
                        <Fields Label="Disabled" Type="text" disabled="true" Value="Disabled input here.." Color="form-group" />
                        <StaticControl Title="Static control" />
                        <CheckBox />
                        <InlineCheckBox />
                    </form>
                </div>
            </div>
        </>
    );
}

export default FormElement;
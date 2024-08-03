import React from "react";
import FormElement from "./Components/FormElement";
import HorizontalForm from "./Components/HorizontalForm";
import InputVariants from "./Components/InputVariants";
import StackedForm from "./Components/StackedForm";

const RegularForm = (props) => {
    return (
        <>
            <div class="panel-header panel-header-sm"></div>
            <div class="content">
                <div class="row">
                    <div class="col-md-6">
                        <StackedForm />
                    </div>
                    <div class="col-md-6">
                        <HorizontalForm />
                    </div>
                    <div class="col-md-12">
                        <FormElement />
                    </div>
                    <div class="col-md-12">
                        <InputVariants />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegularForm;
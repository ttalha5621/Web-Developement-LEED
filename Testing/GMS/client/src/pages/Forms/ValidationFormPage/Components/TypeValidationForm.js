import React from "react";
import FormRows from "./TypeRangeForm/FormRows";
import Footer from "./TypeRangeForm/Footer";
import HeaderRequiredText from "./TypeRangeForm/HeaderRequiredText";

const TypeValidation = (props) => {
    return (
        <form id="TypeValidation" className="form-horizontal" action="#" method="">
            <div className="card ">
                <HeaderRequiredText Title="Type Validation" />
                <div className="card-body ">
                    <div className="row">
                        <FormRows Label="Required Text" Type="text" Name="required"
                            Required="true" Label2="required" Column="col-sm-7" Form="col-sm-2 col-form-label"
                            Form2="col-sm-3 label-on-right" />
                    </div>
                    <div className="row">
                        <FormRows Label="Email" Type="text" Name="email" Email="true"
                            Label2='email="true"' Column="col-sm-7" Form="col-sm-2 col-form-label"
                            Form2="col-sm-3 label-on-right" />
                    </div>
                    <div className="row">
                        <FormRows Label="Number" Type="text" Name="number" Number="true"
                            Label2='number="true"' Column="col-sm-7" Form="col-sm-2 col-form-label"
                            Form2="col-sm-3 label-on-right" />
                    </div>
                    <div className="row">
                        <FormRows Label="Url" Type="text" Name="url" URL="true.html"
                            Label2='url="true"' Column="col-sm-7" Form="col-sm-2 col-form-label"
                            Form2="col-sm-3 label-on-right" />
                    </div>
                    <div className="row">
                        <FormRows Label="Equal to" Type="text" Id="idSource" Placeholder="#idSource" Column="col-sm-3" Form="col-sm-2 col-form-label" />
                        <FormRows Column="col-sm-3" Type="text" Id="idDestination" Placeholder="#idDestination"
                            Label2='equalTo="#idSource"' Form2="col-sm-3 label-on-right" />
                    </div>

                </div>
                <Footer Button="Validate Inputs" />
            </div>
        </form >
    )
}

export default TypeValidation;
import React from "react";
import FormRows from "./TypeRangeForm/FormRows";
import Footer from "./TypeRangeForm/Footer";
import HeaderRequiredText from "./TypeRangeForm/HeaderRequiredText";

const RangeValidation = (props) => {
    return (
        <>
            <form id="RangeValidation" className="form-horizontal" action="#" method="">
                <div className="card ">
                    <HeaderRequiredText Title={props.Title} />
                    <div className="card-body ">
                        <div className="row">
                            <FormRows Label="Min Length" Type="text" Name="min_length"
                                Size="5" Label2='minLength="5"' Column="col-sm-7" Form="col-sm-2 col-form-label"
                                Form2="col-sm-3 label-on-right" />
                        </div>
                        <div className="row">
                            <FormRows Label="Max Length" Type="text" Name="max_length"
                                Size2="5" Label2='maxLength="5"' Column="col-sm-7" Form="col-sm-2 col-form-label"
                                Form2="col-sm-3 label-on-right" />
                        </div>
                        <div className="row">
                            <FormRows Label="Range" Type="text" Name="range"
                                Range="[6,10]" Label2='range="[6,10]"' Column="col-sm-7" Form="col-sm-2 col-form-label"
                                Form2="col-sm-3 label-on-right" />
                        </div>
                        <div className="row">
                            <FormRows Label="Min Value" Type="text" Name="min"
                                Size3="6" Label2='min="6"' Column="col-sm-7" Form="col-sm-2 col-form-label"
                                Form2="col-sm-3 label-on-right" />
                        </div>
                        <div className="row">
                            <FormRows Label="Max Value" Type="text" Name="max"
                                Size4="6" Label2='max="6"' Column="col-sm-7" Form="col-sm-2 col-form-label"
                                Form2="col-sm-3 label-on-right" />
                        </div>
                    </div>
                    <Footer Button="Validate Inputs" Column="col-sm-7" />
                </div>
            </form>
        </>
    )
}

export default RangeValidation;
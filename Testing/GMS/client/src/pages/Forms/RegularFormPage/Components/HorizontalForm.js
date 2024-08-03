import React from "react";
import CheckBox from "./HorizontalStackForm/CheckBox";
import Footer from "./HorizontalStackForm/Footer";
import Title from "../../Title/Title";
import HorizontalStackForm from "./HorizontalStackForm/HorizontalStackForm";

const HorizontalForm = (props) => {
    return (
        <>
            <div class="card ">
                <Title Title="Horizontal Form" />
                <div class="card-body ">
                    <form class="form-horizontal">
                        <div class="row">
                            <HorizontalStackForm Column="col-md-3 col-form-label" Label="Username"
                                Column2="col-md-9" Type="text" />
                        </div>
                        <div class="row">
                            <HorizontalStackForm Column="col-md-3 col-form-label" Label="Email"
                                Column2="col-md-9" Type="email" />
                        </div>
                        <div class="row">
                            <HorizontalStackForm Column="col-md-3 col-form-label" Label="Password"
                                Column2="col-md-9" Type="password" />
                        </div>
                        <div class="row">
                            <label class="col-md-3"></label>
                            <div class="col-md-9">
                                <CheckBox Form="form-check" Text="Remember me" />
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer ">
                    <div class="row">
                        <label class="col-md-3"></label>
                        <div class="col-md-9">
                            <Footer Text="Sign In" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HorizontalForm;
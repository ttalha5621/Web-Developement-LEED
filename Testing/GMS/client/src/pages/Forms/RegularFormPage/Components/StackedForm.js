import React from "react";
import Title from "../../Title/Title";
import CheckBox from "./HorizontalStackForm/CheckBox";
import HorizontalStackForm from "./HorizontalStackForm/HorizontalStackForm";
import Footer from "./HorizontalStackForm/Footer";
const StackedForm = (props) => {
    return (
        <>
            <div class="card ">
                <Title Title="Stacked Form" />
                <div class="card-body ">
                    <form method="#" action="#">
                        <HorizontalStackForm Label="Email address"
                            Type="email" />
                        <HorizontalStackForm Label="Password"
                            Type="password" />
                        <CheckBox Form="form-check mt-3" Text=" Subscribe to newsletter" />
                    </form>
                </div>
                <div class="card-footer ">
                    <Footer Text="Submit" />
                </div>
            </div>
        </>
    );
}

export default StackedForm;
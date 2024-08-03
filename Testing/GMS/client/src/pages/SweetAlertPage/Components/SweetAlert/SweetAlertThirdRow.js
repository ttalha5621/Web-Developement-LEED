import React from "react";
import SweetAlertContent from "./SweetAlertContents/SweetAlertContent";
import Button from "../../../ButtonPage/Components/ButtonType/AllButtons/Button";
const SweetAlertThirdRow = (props) => {
    return (
        <div className="row">
            <div className="col-md-3 ml-auto">
                <div className="card ">
                    <div className="card-body text-center">
                        <SweetAlertContent Content="Modal window with input field" />
                        <Button Click="demo.showSwal('input-field')" Text="Try me!" Color="btn btn-primary btn-fill" />
                    </div>
                </div>
            </div>

            <div className="col-md-3 mr-auto">
                <div className="card ">
                    <div className="card-body text-center">
                        <SweetAlertContent Content="A title with a text under" />
                        <Button Click="demo.showSwal('title-and-text')" Text="Try me!" Color="btn btn-primary btn-fill" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default SweetAlertThirdRow;
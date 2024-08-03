import React from "react";
import SweetAlertContent from "./SweetAlertContents/SweetAlertContent";
import Button from "../../../ButtonPage/Components/ButtonType/AllButtons/Button";
const SweetAlertSecondRow = (props) => {
    return (
        <div className="row">
            <div className="col-md-3 ml-auto">
                <div className="card ">
                    <div className="card-body text-center">
                        <SweetAlertContent Content="Custom HTML description" />
                        <Button Click="demo.showSwal('custom-html')" Text="Try me!" Color="btn btn-primary btn-fill" />
                    </div>
                </div>
            </div>
            <div className="col-md-3 mr-auto">
                <div className="card ">
                    <div className="card-body text-center">
                        <SweetAlertContent Content="A warning message, with a function attached to the Confirm Button..." />
                        <Button Click="demo.showSwal('warning-message-and-confirmation')" Text="Try me!" Color="btn btn-primary btn-fill" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SweetAlertSecondRow;
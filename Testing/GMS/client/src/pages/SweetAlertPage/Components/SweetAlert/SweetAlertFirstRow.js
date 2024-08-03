import React from "react";
import SweetAlertContent from "./SweetAlertContents/SweetAlertContent";
import Button from "../../../ButtonPage/Components/ButtonType/AllButtons/Button";
const SweetAlertFirstRow = (props) => {
    return (
        <div className="row">
            <div className="col-md-3 ml-auto">
                <div className="card ">
                    <div className="card-body text-center">
                        <SweetAlertContent Content="Basic example" />
                        <Button Click="demo.showSwal('basic')" Text="Try me!" Color="btn btn-primary btn-fill" />
                    </div>
                </div>
            </div>
            <div className="col-md-3 mr-auto">
                <div className="card ">
                    <div className="card-body text-center">
                        <SweetAlertContent Content="A success message" />
                        <Button Click="demo.showSwal('success-message')" Text="Try me!" Color="btn btn-primary btn-fill" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SweetAlertFirstRow;
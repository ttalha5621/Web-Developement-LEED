import React from "react";
import SweetAlertContent from "./SweetAlertContents/SweetAlertContent";
import Button from "../../../ButtonPage/Components/ButtonType/AllButtons/Button";
const SweetAlertFourthRow = (props) => {
    return (
        <div className="row">
            <div className="col-md-3 ml-auto">
                <div className="card ">
                    <div className="card-body text-center">
                        <SweetAlertContent Content="A message with auto close timer set to 2 seconds" />
                        <Button Click="demo.showSwal('auto-close')" Text="Try me!" Color="btn btn-primary btn-fill" />
                    </div>
                </div>
            </div>
            <div className="col-md-3 mr-auto">
                <div className="card ">
                    <div className="card-body text-center">
                        <SweetAlertContent Content="...and by passing a parameter, you can execute something else for Cancel" />
                        <Button Click="demo.showSwal('warning-message-and-cancel')" Text="Try me!" Color="btn btn-primary btn-fill" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SweetAlertFourthRow;
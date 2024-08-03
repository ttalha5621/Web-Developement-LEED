import React from "react";
import SweetAlertFirstRow from "./Components/SweetAlert/SweetAlertFirstRow";
import SweetAlertFourthRow from "./Components/SweetAlert/SweetAlertFourthRow";
import SweetAlertSecondRow from "./Components/SweetAlert/SweetAlertSecondRow";
import SweetAlertThirdRow from "./Components/SweetAlert/SweetAlertThirdRow";
import SweetTitle from "./Components/SweetAlert/SweetAlertTitle/SweetTitle";
const SweetAlert = (props) => {
    return (
        <>
            <SweetTitle />
            <div className="content">
                <div className="places-sweet-alerts">

                    <SweetAlertFirstRow />
                    <SweetAlertSecondRow />
                    <SweetAlertThirdRow />
                    <SweetAlertFourthRow />
                </div>
            </div>
        </>
    )
}
export default SweetAlert;
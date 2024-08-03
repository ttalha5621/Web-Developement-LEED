import React from "react";
import SmallAlertModalNotification from "./SubModal/SmallAlertModalNotification";
import Button from "../../../ButtonPage/Components/ButtonType/AllButtons/Button";
const SmallAlertModalNotificationPlaces = (props) => {
    return (
        <>
            <Button cssClass={props.Button} Modal={props.Modal} Data={props.Data} Text={props.Text} />
            <div className={props.Alert} id={props.Id} tabindex="-1"
                role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <SmallAlertModalNotification form={props.form} title={props.title} Icon="fas fa-times" Alert="btn btn-primary" Button="Cancel" CloseButton="Close" />
            </div>
        </>
    )
}
export default SmallAlertModalNotificationPlaces;
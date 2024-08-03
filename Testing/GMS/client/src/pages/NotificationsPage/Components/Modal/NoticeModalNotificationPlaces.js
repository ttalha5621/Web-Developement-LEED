import React from "react";
import NoticeModalNotification from "./SubModal/NoticeModalNotification";
const NoticeModalNotificationPlaces = (props) => {
    return (
        <>
            <button className={props.Button} data-toggle="modal" data-target={props.Data}>
                {props.Text}
            </button>
            <div className={props.Alert} id={props.Id} tabindex="-1" role="dialog"
                aria-labelledby="myModalLabel" aria-hidden="true">
                <NoticeModalNotification Icon="fas fa-times" Text="How Do You Become an
                Affiliate?" Heading="1. Register" Description="The first step is to create
                an account at" Link="CapregSoft" Para="You can choose a social network or
                go for the classic version, whatever works best
                for you."  />
                <NoticeModalNotification Heading="2. Apply" Description="The first step is to create
                an account at" Link="CapregSoft" Para="  go for the classic version, whatever works best
                for you."  />
            </div>
        </>
    )
}
export default NoticeModalNotificationPlaces;
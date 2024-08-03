import React from "react";
import Title from "./Title/Title";
import ClassicModalNotificationPlaces from "./Modal/ClassicModalNotificationPlaces";
import SmallAlertModalNotificationPlaces from "./Modal/SmallAlertModalNotificationPlaces"
import NoticeModalNotificationPlaces from "./Modal/NoticeModalNotificationPlaces";

const Modal = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 text-center">
                <Title Text="Modal" Header="card-header" />
                <ClassicModalNotificationPlaces Button="btn btn-primary" Text="Classic modal" Alert="modal fade" Id="myModal" Data="#myModal" Modal="modal" />
                <NoticeModalNotificationPlaces Button="btn btn-info" Text="Notice modal" Alert="modal fade" Id="noticeModal" Data="#noticeModal" />
                <SmallAlertModalNotificationPlaces Button="btn btn-primary" Text="Smart alert modal" Alert="modal fade modal-mini modal-primary" Id="myModal10" Data="#myModal10" Modal="modal" />
            </div>
        </div>
    )
}
export default Modal;
import React from "react";
import TitleNotification from "./Components/TitleNotification/TitleNotification";
import StyleNotifications from "./Components/StyleNotifications";
import StatesNotifications from "./Components/StatesNotifications";
import NotificationsPlaces from "./Components/NotificationsPlaces";
import Modal from "./Components/Modal";
const Notifications = (props) => {
    return (
        <>
            <TitleNotification />
            <div className="content">
                <div className="row">
                    <StyleNotifications />
                    <StatesNotifications />
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <NotificationsPlaces />
                                <Modal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Notifications;
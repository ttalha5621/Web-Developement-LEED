import React from "react";
import Title from "./Title/Title";
import Button from "./Button/Button";
const StyleNotifications = (props) => {
    return (
        <div className="col-md-6">
            <div className="card">
                <Title Text="Notifications Style" Header="card-header" />
                <div className="card-body">
                    <Button Text=" This is a plain notification" Alert="alert alert-info"
                        Notify="container" Message="message" />
                    <Button Icon="fas fa-times"
                        Text=" This is a notification with close button." Alert="alert alert-info"
                        Notify="container" Message="message" />

                    <Button Alert="alert alert-info alert-with-icon"
                        Icon="fas fa-times" NewIcon="now-ui-icons ui-1_bell-53"
                        Text="This is a notification with close button and icon."
                        Notify="container" Message="message" />
                    <Button Alert="alert alert-info alert-with-icon"
                        Icon="fas fa-times" NewIcon="now-ui-icons ui-1_bell-53"
                        Text="This is a notification with close button and icon and
                              have many lines. You can see that the icon and the close button are always
                              vertically aligned. This is a beautiful notification. So you don't have to worry
                              about the style. " Notify="container" Message="message" />
                </div>
            </div>
        </div>
    );
}
export default StyleNotifications;
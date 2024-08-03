import React from "react";
import Title from "./Title/Title";
import Button from "../../ButtonPage/Components/ButtonType/AllButtons/Button";
const NotificationsPlaces = (props) => {
    return (
        <div className="places-buttons">
            <div className="row">
                <Title Paragraph="Click to view notifications" Text="Notifications Places"
                    Header="col-md-6 ml-auto mr-auto text-center" Category="category" />
            </div>
            <div className="row">
                <div className="col-lg-8 ml-auto mr-auto">
                    <div className="row">
                        <div className="col-md-4">
                            <Button Color="btn btn-primary btn-block" Click="demo.showNotification('top','left')" Text="Top Left" />
                        </div>
                        <div className="col-md-4">
                            <Button Size="col-md-4" Color="btn btn-primary btn-block" Click="demo.showNotification('top','center')" Text="Top Center" />
                        </div>
                        <div className="col-md-4">
                            <Button Size="col-md-4" Color="btn btn-primary btn-block" Click="demo.showNotification('top','right')" Text="Top Right" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 ml-auto mr-auto">
                    <div className="row">
                        <div className="col-md-4">
                            <Button Size="col-md-4" Color="btn btn-primary" Click="demo.showNotification('bottom','left')" Text="Bottom Left" />
                        </div>
                        <div className="col-md-4">
                            <Button Size="col-md-4" Color="btn btn-primary" Click="demo.showNotification('bottom','center')" Text="Bottom Center" />
                        </div>
                        <div className="col-md-4">
                            <Button Size="col-md-4" Color="btn btn-primary" Click="demo.showNotification('bottom','right')" Text="Bottom Right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NotificationsPlaces;
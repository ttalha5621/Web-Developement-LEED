import React from "react";
import Title from "./AllButtons/Title";
import Button from "./AllButtons/Button";
const FirstRowButtons = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <Title Title="Pick Your Colour" />
                <div className="card-body">
                    <Button Text="Default" cssClass="btn" />
                    <Button Text="Primary" cssClass="btn btn-primary" />
                    <Button Text="Info" cssClass="btn btn-info" />
                    <Button Text="Success" cssClass="btn btn-success" />
                    <Button Text="Warning" cssClass="btn btn-warning" />
                    <Button Text="Danger" cssClass="btn btn-danger" />
                </div>
            </div>
            <div className="col-md-6">
                <Title Title="Buttons With Label" />
                <div className="card-body">
                    <Button Text=" Left" Icon="now-ui-icons arrows-1_minimal-left" cssClass="btn" Label="btn-label" />
                    <Button Text=" Right" Icon="now-ui-icons arrows-1_minimal-right" cssClass="btn" Label="btn-label btn-label-right" />
                    <Button Text=" Info" Icon="now-ui-icons travel_info" cssClass="btn btn-info" Label="btn-label" />
                    <Button Text=" Success" Icon="now-ui-icons ui-1_check" cssClass="btn btn-success" Label="btn-label" />
                    <Button Text=" Warning" Icon="now-ui-icons ui-2_time-alarm" cssClass="btn btn-warning" />
                    <Button Text=" Danger" Icon="fas fa-times" cssClass="btn btn-danger" />
                </div>
            </div>
        </div>
    )
}
export default FirstRowButtons;
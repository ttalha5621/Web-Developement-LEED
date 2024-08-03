import React from "react";
import Title from "./AllButtons/Title";
import Button from "./AllButtons/Button";
const SecondRowButtons = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <Title Title="Pick Your Size" />
                <div className="card-body">
                    <Button Text="Small" cssClass="btn btn-primary btn-sm" />
                    <Button Text="Regular" cssClass="btn btn-primary" />
                    <Button Text="Large" cssClass="btn-primary btn-lg" />
                </div>
            </div>
            <div className="col-md-6">
                <Title Title="Pick Your Style" />
                <div className="card-body">
                    <Button Text="Default" cssClass="btn btn-primary" />
                    <Button Text="round" cssClass="btn btn-primary btn-round" />
                    <Button Text="withicon" cssClass="btn btn-primary btn-round" Icon="now-ui-icons ui-2_favourite-28" />
                    <Button cssClass="btn btn-primary btn-round btn-icon" Icon="now-ui-icons ui-2_favourite-28" />
                    <Button Text="Outline" cssClass="btn btn-outline-primary" />

                </div>
            </div>
        </div>
    )
}
export default SecondRowButtons;
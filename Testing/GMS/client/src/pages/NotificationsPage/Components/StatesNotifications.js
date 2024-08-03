import React from "react";
import Button from "./Button/Button";
import Title from "./Title/Title";
const StatesNotifications = (props) => {
    return (
        <div className="col-md-6">
            <div className="card">
                <Title Text="Notification states" Header="card-header" />
                <div className="card-body">
                    <Button Alert="alert alert-primary" Icon="fas fa-times" Heading="Primary -" Text='This is a regular notification made with ".alert-primary"' />
                    <Button Alert="alert alert-info" Icon="fas fa-times" Heading="Info -" Text='This is a regular notification made with ".alert-info"' />
                    <Button Alert="alert alert-success" Icon="fas fa-times" Heading="Success -" Text='This is a regular notification made with ".alert-success"' />
                    <Button Alert="alert alert-warning" Icon="fas fa-times" Heading="Warning -" Text='This is a regular notification made with ".alert-warning"' />
                    <Button Alert="alert alert-danger" Icon="fas fa-times" Heading="Danger -" Text='This is a regular notification made with ".alert-danger"' />

                </div>
            </div>
        </div>
    )
}
export default StatesNotifications;
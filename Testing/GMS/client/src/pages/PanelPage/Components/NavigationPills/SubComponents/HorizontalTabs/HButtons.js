import React from "react";
import Button from "../Button/Button";

const HButtons = (props) => {
    return (
        <ul className="nav nav-pills nav-pills-primary" role="tablist">
            <Button Nav="nav-link active" Link="#link1" Text="Profile"/>
            <Button Nav="nav-link" Link="#link2" Text="Settings"/>
            <Button Nav="nav-link" Link="#link3" Text="Options"/>
        </ul>
    )
}
export default HButtons;

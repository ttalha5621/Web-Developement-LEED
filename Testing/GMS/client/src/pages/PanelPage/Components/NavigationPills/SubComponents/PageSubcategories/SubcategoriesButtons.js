import React from "react";
import Button from "../Button/Button";
const SubcategoriesButtons = (props) => {
    return (
        <ul className="nav nav-pills nav-pills-primary nav-pills-icons justify-content-center"
            role="tablist">
            <Button Nav="nav-link active" Link="#link7" Icon="now-ui-icons objects_umbrella-13" Text="Home" />
            <Button Nav="nav-link" Link="#link8" Icon="now-ui-icons shopping_shop" Text="Messages" />
            <Button Nav="nav-link" Link="#link9" Icon="now-ui-icons ui-2_settings-90" Text="Settings" />
        </ul>
    )
}
export default SubcategoriesButtons;

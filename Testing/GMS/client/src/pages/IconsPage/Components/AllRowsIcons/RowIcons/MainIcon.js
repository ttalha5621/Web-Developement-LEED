import React from "react";
const MainIcon = (props) => {
    return (
        <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
            <div className={props.Detail}>
                <i className={props.Icon}></i>
    <p>{props.Text}</p>
            </div>
        </div>
    );
}
export default MainIcon;



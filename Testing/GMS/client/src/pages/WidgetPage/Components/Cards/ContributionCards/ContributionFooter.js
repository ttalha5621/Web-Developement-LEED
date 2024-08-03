import React from "react";

const ContributionFooter = (props) => {
    return (
       
        <div className="col-6">
            <div className="card-stats justify-content-center">
                <input type="checkbox" name="checkbox" className="bootstrap-switch"
                    data-on-label="ON" data-off-label="OFF" checked={props.checked} />
                <span>{props.Text}</span>
            </div>
        </div>
        
    );
}

export default ContributionFooter;

// Text
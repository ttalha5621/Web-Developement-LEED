import React from "react";
import Description from "./Description/Description";


const Info = (props) => {
    return (
        <div className="col-md-5 ml-auto">
            <Description Size="info-area info-horizontal mt-5" Color="icon icon-primary"
                Icon="now-ui-icons media-2_sound-wave" Title="Marketing"
                Description="We've created the marketing campaign of the website. 
                It was a very interesting collaboration." />

            <Description Size="info-area info-horizontal" Color="icon icon-primary"
                Icon="now-ui-icons media-1_button-pause" Title="Fully Coded in HTML5"
                Description="We've developed the website with HTML5 and CSS3. 
                The client has access to the code using GitHub." />

            <Description Size="info-area info-horizontal" Color="icon icon-info"
                Icon="now-ui-icons users_single-02" Title="Built Audience"
                Description="There is also a Fully Customizable CMS Admin Dashboard for this product." />
        </div>
    );
}

export default Info;
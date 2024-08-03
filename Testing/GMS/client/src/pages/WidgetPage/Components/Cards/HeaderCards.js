import React from "react";
import AllCards from "./HeaderCards/AllCards";
const HeaderCards = (props) => {
    return (
        <div className="row">
            <AllCards Size=" col-7 text-right" Title="1058" Text="messages"
                Icon="now-ui-icons arrows-1_refresh-69" Content="  Update now"
                Type="icon icon-primary icon-circle" Icon2="now-ui-icons ui-2_chat-round" Column="col-5"/>
            <AllCards Size="col-7 text-right" Span="$" Title="23,68" Text="Deposit"
                Icon="now-ui-icons ui-1_calendar-60" Content="  Last week" 
                Type="icon icon-warning icon-circle" Icon2="now-ui-icons business_bank" Column="col-5"/>
            <AllCards Size="col-7 text-right" Title="364" Text="Players"
                Icon="now-ui-icons ui-2_time-alarm" Content=" In the last hour" 
                Type="icon icon-danger icon-circle"  Icon2="now-ui-icons sport_user-run" Column="col-5"/>
            <AllCards Size="col-7 text-right" Title="+83K" Text="followers"
                Icon="now-ui-icons arrows-1_refresh-69" Content="  Update now" 
                Type="icon icon-info icon-circle"  Icon2="now-ui-icons ui-2_favourite-28" Column="col-5"/>
        </div>
    );
}

export default HeaderCards;
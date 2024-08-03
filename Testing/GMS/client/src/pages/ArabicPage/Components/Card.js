import React from "react";
import AllCards from "../../WidgetPage/Components/Cards/HeaderCards/AllCards";


const Card = (props) => {
    return (
        <div className="row">
            <AllCards Size=" col-7 text-right" Title="1058" Text="سرائل"
                Icon="now-ui-icons arrows-1_refresh-69" Content="  تحديثالان"
                Type2="icon icon-primary icon-circle" Icon3="now-ui-icons ui-2_chat-round" Column1="col-5"/>
            <AllCards Size="col-7 text-right" Span="$" Title="23,68" Text="الوديعة"
                Icon="now-ui-icons ui-1_calendar-60" Content="  الاسبوع الماضى" 
                Type2="icon icon-warning icon-circle" Icon3="now-ui-icons business_bank" Column1="col-5"/>
            <AllCards Size="col-7 text-right" Title="364" Text="لاعبين"
                Icon="now-ui-icons ui-2_time-alarm" Content=" في الساعة الماضية" 
                Type2="icon icon-danger icon-circle"  Icon3="now-ui-icons sport_user-run" Column1="col-5"/>
            <AllCards Size="col-7 text-right" Title="+83K" Text="متابعون"
                Icon="now-ui-icons arrows-1_refresh-69" Content="  تحديثالان" 
                Type2="icon icon-info icon-circle"  Icon3="now-ui-icons ui-2_favourite-28" Column1="col-5"/>
        </div>
    );
}

export default Card;
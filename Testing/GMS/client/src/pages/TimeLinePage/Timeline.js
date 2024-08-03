import React from "react";
import Card from "./Components/Card";
import CardAction from "./Components/CardAction";
import CardLeft from "./Components/CardLeft";
import CardLightColor from "./Components/CardLightColor";
import Title from "./Components/Title";
import Icons from "./Icons/Icons";


const Timeline = (props) => {
    return (
        <>
            <div className="panel-header panel-header-sm"></div>
            <div className="content">
                <Title />
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-timeline card-plain">
                            <div className="card-body">
                                <ul className="timeline">
                                    <li className="timeline-inverted">
                                        <Icons Badge="timeline-badge danger" Icon="now-ui-icons objects_planet" />
                                        <Card />
                                    </li>
                                    <li>
                                        <Icons Badge="timeline-badge success" Icon="now-ui-icons shopping_tag-content" />
                                        <CardLeft />
                                    </li>
                                    <li className="timeline-inverted">
                                        <Icons Badge="timeline-badge info" Icon="now-ui-icons shopping_delivery-fast" />
                                        <CardAction />
                                    </li>
                                    <li>
                                        <Icons Badge="timeline-badge warning" Icon="now-ui-icons ui-1_email-85" />
                                        <CardLightColor />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Timeline;
import React from "react";
import Card from "../../TimeLinePage/Components/Card";
import CardAction from "../../TimeLinePage/Components/CardAction";
import CardLeft from "../../TimeLinePage/Components/CardLeft";
import Icons from "../../TimeLinePage/Icons/Icons";
import ContributionCard from "./Cards/ContributionCard";
import TaskCard from "./Cards/TaskCard";

const ContentCard = (props) => {
    return (
        <div className="row">
            <div className="col-lg-6 col-md-12 text-center">
                <ContributionCard />
                <TaskCard />
            </div>
            <div className="col-md-6">
                <div className="card card-timeline card-plain">
                    <div className="card-body">
                        <ul className="timeline timeline-simple">
                            <li className="timeline-inverted">
                                <Icons Badge="timeline-badge danger" Icon="now-ui-icons objects_planet" />
                                <Card />
                            </li>

                            <li className="timeline-inverted">
                                <Icons Badge="timeline-badge success" Icon="now-ui-icons shopping_tag-content" />
                                <CardLeft />
                            </li>

                            <li className="timeline-inverted">
                                <Icons Badge="timeline-badge info" Icon="now-ui-icons shopping_delivery-fast" />
                                <CardAction />
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContentCard;
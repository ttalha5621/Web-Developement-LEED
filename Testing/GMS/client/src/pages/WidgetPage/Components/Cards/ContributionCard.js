import React from "react";
import ContributionFooter from "./ContributionCards/ContributionFooter";
import ContributionHeader from "./ContributionCards/ContributionHeader";

const ContributionCard = (props) => {
    return (
        <div className="card card-contributions">
            <ContributionHeader Title="3,521" Category="Total Public Contributions"
                Description="After a very successful two-year run, we’re going to be changing the way that contributions work." />
            <hr />
            <div className="card-footer ">
                <div className="row">
                    <ContributionFooter Text="All public contributions" checked="True" />
                    <ContributionFooter Text="Past week contributions" />
                </div>
                </div>
                </div>
    );
}

export default ContributionCard;
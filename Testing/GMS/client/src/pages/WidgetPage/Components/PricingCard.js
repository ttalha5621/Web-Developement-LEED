import React from "react";
import Cards from "../../PricingPage/Components/Cards/Cards";
import TestimonialCard from "./TestimonialCard";

const PricingCard = (props) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="row">
                    <div className="col-lg-6">

                        <Cards Type="card card-pricing" Title="Alpha Pack" Icon="card-icon icon-primary"
                            Button="now-ui-icons objects_diamond" CardTitle="69$" List="Working materials in EPS"
                            List2="6 months access to the library" Link="#pablo" Button2="btn btn-round btn-primary"
                            Text="Add to Chart" />
                    </div>
                    <div className="col-lg-6">
                        <Cards Type="card card-pricing card-plain" Title="Bravo Pack" Icon="card-icon icon-warning"
                            Button="now-ui-icons media-1_button-power" CardTitle="10$" List="Complete documentation"
                            List2="Working materials in Sketch" Link="#pablo" Button2="btn btn-round btn-neutral btn-warning"
                            Text="Add to Chart" />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <TestimonialCard />
            </div>
        </div>
    );
}

export default PricingCard;
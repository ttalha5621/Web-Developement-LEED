import React from "react";
import PricingBody from "./Components/PricingBody";
import Title from "./Components/Title";

const Price = (props) => {
    return (
        <>
            <div className="content">
                <div className="container">
                    <Title Title="Pick the best plan for you" Description="You have Free Unlimited Updates and Premium Support on each package." />
                    <div class="row">
                        <PricingBody Type="card card-pricing card-plain" Title="Bravo Pack" Icon="card-icon icon-warning"
                            Button="now-ui-icons media-1_button-power" CardTitle="10$" List="Complete documentation"
                            List2="Working materials in Sketch" Link="#pablo" Button2="btn btn-round btn-neutral btn-warning"
                            Text="Add to Chart" />
                        <PricingBody Type="card card-pricing" Title="Alpha Pack" Icon="card-icon icon-primary"
                            Button="now-ui-icons objects_diamond" CardTitle="69$" List="Working materials in EPS"
                            List2="6 months access to the library" Link="#pablo" Button2="btn btn-round btn-primary"
                            Text="Add to Chart" />
                        <PricingBody Type="card card-pricing card-plain" Title="Charlie Pack" Icon="card-icon icon-success"
                            Button="now-ui-icons media-2_sound-wave" CardTitle="179$" List="Working materials in EPS"
                            List2="6 months access to the library" Link="#pablo" Button2="btn btn-round btn-neutral btn-success"
                            Text="Add to Chart" />
                        <PricingBody Type="card card-pricing card-plain" Title="Extra Pack" Icon="card-icon icon-danger"
                            Button="now-ui-icons education_atom" CardTitle="159$" List="Complete documentation"
                            List2="2GB cloud storage" Link="#pablo" Button2="btn btn-round btn-neutral btn-danger"
                            Text="Add to Chart" />
                    </div>
                </div></div>

        </>
    );
}
export default Price;
import React from "react";
import Cards from "./Cards/Cards";
const PricingBody = (props) => {
    return (
            <div className="col-lg-3 col-md-6">
                <Cards Type={props.Type} Title={props.Title} Icon={props.Icon}
                    Button={props.Button} CardTitle={props.CardTitle} List={props.List}
                    List2={props.List2} Link={props.Link} Button2={props.Button2}
                    Text={props.Text} />
            </div>
    );
}
export default PricingBody;


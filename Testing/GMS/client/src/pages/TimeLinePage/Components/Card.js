import React from "react";
import CardBody from "./CardBody/CardBody";
import CardFooter from "./Footer/CardFooter";
import CardTitle from "./Header/CardTitle";

const Card = (props) => {
    return (
        <div className="timeline-panel">
            <CardTitle Badge="badge badge-danger" Title="Some Title" />
            <CardBody Type="timeline-body" Paragraph="Wifey made the best Father's Day meal ever. 
                            So thankful so happy so blessed. Thank you for making my family We just 
                            had fun with the “future” theme !!! It was a fun night all together ... 
                            The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown."/>
            <CardFooter />
        </div>
        
    );
}

export default Card;
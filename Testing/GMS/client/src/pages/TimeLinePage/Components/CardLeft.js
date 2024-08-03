import React from "react";
import CardBody from "./CardBody/CardBody";
import CardTitle from "./Header/CardTitle";
const CardLeft = (props) => {
    return (
        <div className="timeline-panel">
            <CardTitle Badge="badge badge-success" Title="Another One" />
            <CardBody Type="timeline-body" Paragraph="Thank God for the support of my wife and real friends. I also wanted
                      to point out that it’s the first album to go number 1 off of
                      streaming!!! I love you Ellen and also my number one design rule of
                      anything I do from shoes to music to homes is that Kim has to like it...."/>
        </div>

    );
}

export default CardLeft;
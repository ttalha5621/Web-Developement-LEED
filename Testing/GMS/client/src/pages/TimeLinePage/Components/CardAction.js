import React from "react";
import CardBody from "./CardBody/CardBody";
import CardTitle from "./Header/CardTitle";
const CardAction = (props) => {
    return (
        <>

            <div className="timeline-panel">
                <CardTitle Badge="badge badge-info" Title="Another Title" />
                <CardBody Type="timeline-body" Paragraph="Called I Miss the Old Kanye That’s all it was Kanye And I love you
                                like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM"
                    Paragraph2="What if Kanye made a song about Kanye Royère doesn't make a Polar
                                bear bed but the Polar bear couch is my favorite piece of furniture
                                we own It wasn’t any Kanyes Set on his goals Kanye"/><hr/>
                <div className="timeline-footer">
                    <div className="dropdown">
                        <button type="button" className="btn btn-round btn-info dropdown-toggle"
                            data-toggle="dropdown">
                            <i className="now-ui-icons design_bullet-list-67"></i>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardAction;
import React from "react";

const VectorMap = (props) => {
    return (
        <>
            <div className="panel-header">
                <div className="header text-center">
                    <h2 className="title">Vector Map</h2>
                    <p className="category">Looks great on any resolution. Made by our friends from <a target="_blank"
                        href="http://jvectormap.com/">jVector Map</a>.</p>
                </div>
            </div>

            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card ">
                            <div className="card-body ">
                                <div id="worldMap" className="map map-big"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default VectorMap;
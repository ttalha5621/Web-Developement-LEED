import React from "react";
const Maps = (props) => {
    return (
        <div className={props.Size}>
            <div className="card ">
                <div className="card-header ">
                    <h4 className='card-title'>{props.Title}</h4>
                </div>
                <div className="card-body ">
                    <div id={props.Id} className="map"></div>
                </div>
            </div>
        </div>
    );
}
export default Maps;

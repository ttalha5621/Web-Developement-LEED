import React from "react";

const Slider = (props) => {
    return (
        <>
            <div className="col-md-6">
                <h4 className="card-title">Sliders</h4>
                <div id="sliderRegular" className="slider"></div>
                <br />
                <div id="sliderDouble" className="slider slider-primary"></div>
            </div>
        </>
    );
}

export default Slider;
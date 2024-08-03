import React from "react";

const BottomMiddleCard = (props) => {
    return (
        <div className="col-lg-6">
            <div className="card card-pricing card-plain">
                <h6 className="card-category"> برافو باك</h6>
                <div className="card-body">

                    <div className="card-icon icon-warning ">
                        <i className="now-ui-icons media-1_button-power"></i>
                    </div>
                    <h3 className="card-title">10$</h3>

                    <ul>
                        <li>وثائق كاملة</li>
                        <li>مواد العمل في Sketch</li>
                    </ul>

                </div>

                <div className="card-footer">
                    <a href="#pablo" className="btn btn-round btn-neutral btn-warning">أضف إلى السلة</a>
                </div>

            </div>
        </div>
    );
}

export default BottomMiddleCard;
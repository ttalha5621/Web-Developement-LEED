import React from "react";

const BottomLeftCard = (props) => {
    return (
        <div className="col-lg-6">
            <div className="card card-pricing ">

                <h6 className="card-category"> حزمة ألفا</h6>
                <div className="card-body">
                    <div className="card-icon icon-primary ">
                        <i className="now-ui-icons objects_diamond"></i>
                    </div>
                    <h3 className="card-title">69$</h3>
                    <ul>
                        <li>مواد العمل في EPS</li>
                        <li>6 أشهر الوصول إلى المكتبة</li>
                    </ul>

                </div>

                <div className="card-footer">
                    <a href="#pablo" className="btn btn-round btn-primary">أضف إلى السلة</a>
                </div>

            </div>
        </div>
    )
}
export default BottomLeftCard;
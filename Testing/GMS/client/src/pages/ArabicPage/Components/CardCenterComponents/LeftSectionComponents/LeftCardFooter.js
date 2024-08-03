import React from "react";

const LeftCardFooter = (props) => {
    return (
        <div className="card-footer">
            <div className="row">
                <div className="col-6">
                    <div className="card-stats justify-content-center">
                        <input type="checkbox" name="checkbox" className="bootstrap-switch" data-on-label="ON"
                            data-off-label="OFF" checked />
                        <span>جميع المساهمات العامة</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card-stats justify-content-center">
                        <input type="checkbox" name="checkbox" className="bootstrap-switch" data-on-label="ON"
                            data-off-label="OFF" />
                        <span>مساهمات الأسبوع </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftCardFooter;
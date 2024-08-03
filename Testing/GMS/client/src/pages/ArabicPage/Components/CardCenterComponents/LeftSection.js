import React from "react";
import LeftCardBottomFooter from "./LeftSectionComponents/LeftCardBottomFooter";
import LeftCardBottomHeader from "./LeftSectionComponents/LeftCardBottomHeader";
import LeftCardBottomTable from "./LeftSectionComponents/LeftCardBottomTable";
import LeftCardFooter from "./LeftSectionComponents/LeftCardFooter";
import LeftCardHeader from "./LeftSectionComponents/LeftCardHeader";

const LeftSection = (props) => {
    return (
        <div className="col-lg-6 col-md-12 text-center">
            <div className="card card-contributions">
                <LeftCardHeader />
                <hr />

                <LeftCardFooter />
            </div>

            <div className="card card-tasks">
                <LeftCardBottomHeader />

                <div className="card-body">
                    <div className="table-full-width table-responsive">
                        <LeftCardBottomTable />
                    </div>
                </div>

                <LeftCardBottomFooter />
            </div>
        </div>
    );
}

export default LeftSection;
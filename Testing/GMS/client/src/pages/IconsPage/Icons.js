import React from "react";
import TitleIcons from "./Components/AllRowsIcons/TitleIcons";
import OneToSixRowsIcons from "./Components/OneToSixRowsIcons";
import SevenToTwelveRowsIcons from "./Components/SevenToTwelveRowsIcons";
import ThirteenToSeventeenRowsIcons from "./Components/ThirteenToSeventeenRowsIcons";
const Icons = (props) => {
    return (
        <>
            <div className="panel-header panel-header-sm">
            </div>
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <TitleIcons />
                            <div className="card-body all-icons">
                                <div className="row">
                                    <OneToSixRowsIcons />
                                    <SevenToTwelveRowsIcons />
                                    <ThirteenToSeventeenRowsIcons />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Icons;
import React from "react";
import AllHeaders from "./Components/AllHeaders";
import AllText from "./Components/AllText";
import ParagraphWithQuote from "./Components/ParagraphWithQuote";
import TitleTypography from "./Components/TitleText/TitleTypography";
const Typography = (props) => {
    return (
        <>
            <div className="panel-header panel-header-sm">
            </div>
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <TitleTypography Title="Now Ui Table Heading" Text="Created using Montserrat Font Family"/>
                            <div className="card-body">
                                <AllHeaders />
                                <ParagraphWithQuote />
                                <AllText />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Typography;
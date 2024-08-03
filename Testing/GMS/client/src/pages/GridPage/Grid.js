import React from "react";
import AllGrids from "./Components/AllGrids";
import AllParagraphs from "./Components/AllParagraphs/AllParagraphs";
import Heading from "./Components/AllParagraphs/Heading/Heading";
const Grid = (props) => {
    return (
        <>
            <div className="panel-header panel-header-sm"> </div>
            <div className="content">
                <div className="card">
                    <div className="card-body">
                        <AllGrids />
                    </div>
                </div>
                <Heading heading="Paragraphs"/>
                <div className="card">
                    <div className="card-header">
                    </div>
                    <div className="card-body">
                        <AllParagraphs/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Grid;
import React from "react";
import TitleGrid from "./Grids/TitleGrid";
import DataGrid from "./Grids/DataGrid";
const MixedGrid = (props) => {
    return (
        <>
             <TitleGrid Title={props.GridTitle} title={props.Gridtitle} />
            <div className="row">
                <DataGrid Text={props.GridText} Size={props.GridSize} />
                <DataGrid Text={props.GridText} Size={props.GridSize} />
                <DataGrid Text={props.GridText} Size={props.GridSize} />
                <DataGrid Text={props.GridText} Size={props.GridSize} />
            </div>
        </>
    )
}
export default MixedGrid;

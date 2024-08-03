import React from "react";
import DataGrid from "./Grids/DataGrid";
import TitleGrid from "./Grids/TitleGrid";
const Grids = (props) => {
    return (
        <>
            <TitleGrid Title={props.GridTitle} title={props.Gridtitle} />
            <div className="row">
                <DataGrid Text={props.GridText} Size={props.GridSize} />
                <DataGrid Text={props.GridText} Size={props.GridSize} />
                <DataGrid Text={props.GridText} Size={props.GridSize} />
            </div>
        </>
    )
}
export default Grids;
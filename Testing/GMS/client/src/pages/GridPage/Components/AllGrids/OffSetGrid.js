import React from "react";
import TitleGrid from "./Grids/TitleGrid";
import DataGrid from "./Grids/DataGrid";
const OffSetGrid = (props) => {
    return (
        <>
            <TitleGrid Title="Offset Grid" title=" Adding some space when needed" />
            <div className="row">
            <DataGrid Text="col-md-3" Size="col-md-3" />
            <DataGrid Text="col-md-3 ml-auto" Size="col-md-3 ml-auto" />            
            </div>
            <div className="row">
            <DataGrid Text="col-md-4 ml-auto mr-auto" Size="col-md-4 ml-auto mr-auto" />
            <DataGrid Text="col-md-4 ml-auto mr-auto" Size="col-md-4 ml-auto mr-auto" />      
            </div>
            <div className="row">
            <DataGrid Text="col-md-6 ml-auto mr-auto" Size="col-md-6 ml-auto mr-auto" />
            </div>
        </>
    )
}
export default OffSetGrid;


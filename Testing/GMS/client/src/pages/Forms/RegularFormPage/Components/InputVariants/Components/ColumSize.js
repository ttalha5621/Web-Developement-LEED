import React from "react";
import ColumnSize from "./ColumnSize/ColumnSize";

const ColumSize = (props) => {
    return (
        <div class="row">
            <label class="col-sm-2 col-form-label">{props.Title}</label>
            <div class="col-sm-10">
                <div class="row">
                    <ColumnSize Title="Column sizing" Size="col-md-3" placeHolder=".col-md-3" />
                    <ColumnSize Size="col-md-4" placeHolder=".col-md-4" />
                    <ColumnSize Size="col-md-5" placeHolder=".col-md-5" />
                </div>
            </div>
        </div>
    )
}
export default ColumSize;
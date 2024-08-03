import React from "react";

const ColumnSize = (props) => {
    return (
        <div class={props.Size}>
            <div class="form-group">
                <input type="text" class="form-control" placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default ColumnSize;

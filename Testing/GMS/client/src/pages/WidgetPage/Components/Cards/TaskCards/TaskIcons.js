import React from "react";

const TaskIcons = (props) => {
    return (
        <button type="button" rel="tooltip" title=""
            className={props.Button}
            data-original-title={props.Title}>
            <i className={props.Icon}></i>
        </button>
    );
}

export default TaskIcons;


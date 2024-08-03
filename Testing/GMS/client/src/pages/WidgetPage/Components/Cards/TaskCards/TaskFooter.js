import React from "react";

const TaskFooter = (props) => {
    return (
        <div className="card-footer ">
            <hr />
            <div className="stats">
                <i className={props.Icon}></i> {props.Content}
                                </div>
        </div>
    );
}

export default TaskFooter;

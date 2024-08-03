import React from "react";
import TaskIcons from "./TaskIcons";

const TaskCardTable = (props) => {
    return (
        <div className="card-body ">
            <div className="table-full-width table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" checked={props.checked} />
                                        <span className="form-check-sign"></span>
                                    </label>
                                </div>
                            </td>

                            <td className="text-left">
                                {props.Text}</td>
                            <td className="td-actions text-right">
                                <TaskIcons Button="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral"
                                    Title="Edit Task" Icon="now-ui-icons ui-2_settings-90" />
                                <TaskIcons Button="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral"
                                    Title="Remove" Icon="fas fa-times" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TaskCardTable;

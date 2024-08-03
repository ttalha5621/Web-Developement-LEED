import React from "react";
import Images from "../../../../../assets/index";
// import RemoveIcon from "../../../../WidgetPage/Components/Cards/Icon/RemoveIcon";
// import SettingIcon from "../../../../WidgetPage/Components/Cards/Icon/SettingIcon";
import TaskIcons from "../../../../WidgetPage/Components/Cards/TaskCards/TaskIcons";

const LeftCardBottomTable = (props) => {
    return (
        <table className="table">
            <tbody>
                <tr>
                    <td>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" checked="" />
                                <span className="form-check-sign"></span>
                            </label>
                        </div>
                    </td>
                    <td className="img-row">
                        <div className="img-wrapper img-raised">
                            <img src={Images.Emilyz} alt="" className="img-raised" />
                        </div>
                    </td>
                    <td className="text-left">توقيع عقد "ما يخشاه منظمو المؤتمر؟"</td>
                    <td className="td-actions">
                        <TaskIcons Button="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral"
                            Title="Edit Task" Icon="now-ui-icons ui-2_settings-90" />
                        <TaskIcons Button="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral"
                            Title="Remove" Icon="fas fa-times" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" />
                                <span className="form-check-sign"></span>
                            </label>
                        </div>
                    </td>
                    <td className="img-row">
                        <div className="img-wrapper img-raised">
                            <img src={Images.James} alt="" className="img-raised" />
                        </div>
                    </td>
                    <td className="text-left">خطوط من الأدب الروسي العظيم؟ أو رسائل البريد الإلكتروني من بلدي بوس؟</td>
                    <td className="td-actions">
                        <TaskIcons Button="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral"
                            Title="Edit Task" Icon="now-ui-icons ui-2_settings-90" />
                        <TaskIcons Button="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral"
                            Title="Remove" Icon="fas fa-times" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" checked="" />
                                <span className="form-check-sign"></span>
                            </label>
                        </div>
                    </td>
                    <td className="img-row">
                        <div className="img-wrapper img-raised">
                            <img src={Images.Mike} alt="" className="img-raised" />
                        </div>
                    </td>
                    <td className="text-left">مغمورة: بعد مرور عام ، تقييم ما فقد وما تم العثور عليه عندما اجتاحتالأمطار المدمرة مترو ديترويت</td>
                    <td className="td-actions">
                        <TaskIcons Button="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral"
                            Title="Edit Task" Icon="now-ui-icons ui-2_settings-90" />
                        <TaskIcons Button="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral"
                            Title="Remove" Icon="fas fa-times" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default LeftCardBottomTable;
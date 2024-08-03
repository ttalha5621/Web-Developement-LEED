import React from "react";
import DateTimePicker from "./Components/DateTimepicker";
import Card from "./Components/Card";

const ExtendedForm = (props) => {
    return (
        <>
            <div className="panel-header panel-header-sm"></div>
            <div className="content">
                <div className="row">
                    <DateTimePicker Title="DateTimePicker" Form="form-control datetimepicker" Value="10/05/2016" />
                    <DateTimePicker Title="Date Picker" Form="form-control datepicker" Value="10/05/2016" />
                    <DateTimePicker Title="Time Picker" Form="form-control timepicker" Value="10/05/2016" />
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Card />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExtendedForm;
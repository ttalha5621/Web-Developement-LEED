import React from "react";

const SelectOneMultiOptions = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-3">
                <select className="selectpicker"
                    data-style={props.Button} multiple={props.multiple}
                    title={props.Title} data-size="7">
                    <option disabled> {props.Option}</option>
                    <option value={props.Value1}>{props.Name1} </option>
                    <option value={props.Value2}>{props.Name2}</option>
                    <option value={props.Vlaue3}>{ props.Name3}</option>
                </select>
            </div>
        </>
    );
}

export default SelectOneMultiOptions;

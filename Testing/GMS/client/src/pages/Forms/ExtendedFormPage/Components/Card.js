import React from "react";
import SelectOneMultiOptions from "./CardComponents/SelectOneMultipleOptions";
import ToggleButtons from "./CardComponents/ToggleButtons";
import Tag from "./CardComponents/Tag";
import DropDownUp from "./CardComponents/DropDownUp";
import ProgressBar from "./CardComponents/ProgressBar";
import Slider from "./CardComponents/Slider";
import RegularAvatarImage from "./CardComponents/RegularAvatarImage";
import SingleMultiFileChooser from "./CardComponents/SingleMultiFileChooser";

const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="card-title">Toggle Buttons</h4>
                            <div className="row">
                                <ToggleButtons Title="Default" />
                                <ToggleButtons Title="Plain" />
                                <ToggleButtons Title="With Icons" OnLabel="<i className='now-ui-icons ui-1_check'></i>"
                                    OffLabel="<i className='fas fa-times'></i>" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4 className="card-title">Customizable Select</h4>
                            <div className="row">
                                <SelectOneMultiOptions Title="Single Select"
                                    Button="btn btn-primary btn-round btn-block" Option="Single Option"
                                    Value1="2" Name1="Foobar"
                                    Value2="3" Name2="Is great"
                                />
                                <SelectOneMultiOptions Title="Choose City" multiple="true"
                                    Button="btn btn-info btn-round btn-block" Option="Multiple Options"
                                    Value1="2" Name1="Paris"
                                    Value2="3" Name2="Bucharest"
                                    Value3="4" Name3="Rome" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Tag />
                        <div className="col-md-6">
                            <h4 className="card-title">Dropup & Dropdown</h4>
                            <div className="row">

                                <DropDownUp Column="col-lg-4 col-md-6 col-sm-3" Name="dropup"
                                    Button="dropdown-toggle btn btn-primary btn-round btn-block" Type="button"
                                    Id="dropdownMenuButton" Toggle="dropdown" Popup="true" Expand="false"
                                    Menu="dropdown-menu" MenuButton="dropdownMenuButton" Header="Dropdown header"
                                    Item1="Action" Item2="Another action" Item3="SomeThing Else" Text="Drop Up" />

                                <DropDownUp Column="col-lg-4 col-md-6 col-sm-3" Name="dropdown"
                                    Button="dropdown-toggle btn btn-primary btn-round btn-block"
                                    Toggle="dropdown" Menu="dropdown-menu" MenuButton="dropdownMenuButton"
                                    Header="Dropup header" Item1="Action" Item2="Another action"
                                    Item3="SomeThing Else" Text="Drop Down" />



                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <ProgressBar Badge="Default" Color="progress-bar"
                                Value="25%" Color2="progress-container" Title="Progress Bar" />
                            <ProgressBar Badge="Primary" Color="progress-bar progress-bar-warning"
                                Value="60%" Color2="progress-container progress-primary" />
                        </div>
                        <Slider />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <RegularAvatarImage Title="Regular Image" Img="fileinput-new thumbnail"
                                    Img2="fileinput-preview fileinput-exists thumbnail" Button="btn btn-rose btn-round btn-file"
                                    Text="Select image" Text2="Change" Text3="Remove" />

                                <RegularAvatarImage Title="Avatar" Img="fileinput-new thumbnail img-circle"
                                    Img2="fileinput-preview fileinput-exists thumbnail img-circle"
                                    Button="btn btn-round btn-rose btn-file"
                                    Text="Add Photo" Text2="Change" Text3="Remove" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <SingleMultiFileChooser Title="Single File" Form="form-group form-file-upload form-file-simple"
                                File="file" Field="inputFileHidden" Text="text" Field2="form-control inputFileVisible"
                                Placeholder="Simple chooser..." />
                            <SingleMultiFileChooser Title="Multiple Files" Form="form-group form-file-upload form-file-multiple"
                                File="file" Field="inputFileHidden" Text="text" Field2="form-control inputFileVisible"
                                Placeholder="Multiple chooser..." multiple="true" multiple2="true" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
import React from "react";
import Images from "../../../../../assets/index";

const RegularAvatarImage = (props) => {
    return (
        <>
            <div className="col-md-6">
                <h4 className="card-title">{props.Title}</h4>
                <div className="fileinput fileinput-new text-center"
                    data-provides="fileinput">
                    <div className={props.Img}>
                        <img src={Images.PlaceHolder} alt="..." />
                    </div>
                    <div className={props.Img2}></div>
                    <div>
                        <span className={props.Button}>
                            <span className="fileinput-new">{props.Text}</span>
                            <span className="fileinput-exists">{props.Text2}</span>
                            <input type="file" name="..." />
                        </span>
                        <a href="#pablo"
                            className="btn btn-danger btn-round fileinput-exists"
                            data-dismiss="fileinput"><i className="fa fa-times"></i>
                            {props.Text3}</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegularAvatarImage;
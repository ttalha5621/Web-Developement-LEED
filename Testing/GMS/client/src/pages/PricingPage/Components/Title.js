import React from "react";

const Title = (props) => {
    return (
        <div className="row">
            <div className="col-md-6 ml-auto mr-auto text-center">
    <h2 className="title">{props.Title}</h2>
                <h5 className="description">{props.Description}
                            </h5>
            </div>
        </div>
    );
}

export default Title;
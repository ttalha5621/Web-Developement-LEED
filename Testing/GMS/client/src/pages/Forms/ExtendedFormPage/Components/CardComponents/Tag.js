import React from "react";

const Tag = (props) => {
    return (
        <>
            <div className="col-md-6">
                <h4 className="card-title">Tags</h4>
                <input type="text" value="Amsterdam,Washington,Sydney,Beijing" className="tagsinput"
                    data-role="tagsinput" data-color="danger" />
            </div>
        </>
    );
}

export default Tag;
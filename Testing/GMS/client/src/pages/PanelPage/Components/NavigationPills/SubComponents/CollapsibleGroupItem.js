import React from "react";
import FirstItem from "./CollapsibleGroupItem/Firstitem";
import SecondItem from "./CollapsibleGroupItem/SecondItem";
import ThirdItem from "./CollapsibleGroupItem/ThirdItem";
const CollapsibleGroupItems = (props) => {
    return (
        <div className="col-md-6">
            <div className="card">
                <div className="card-body">
                    <div id="accordion" role="tablist" aria-multiselectable="true" className="card-collapse">
                        <FirstItem />
                        <SecondItem />
                        <ThirdItem />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CollapsibleGroupItems;
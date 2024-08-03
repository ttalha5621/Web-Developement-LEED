import React from "react";
const ItemsTitle = (props) => {
    return (
        <div className="card-header" role="tab" id={props.Id}>
            <a data-toggle={props.Collapse} data-parent={props.Data} href={props.Link}
                aria-expanded={props.Expand} aria-controls={props.Control}>
                {props.Text}
                <i className={props.Icon}></i>
            </a>
        </div>
    )
}
export default ItemsTitle;

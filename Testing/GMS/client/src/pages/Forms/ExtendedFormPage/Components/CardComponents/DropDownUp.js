import React from "react";

const DropDownUp = (props) => {
    return (
        <>
            <div className={props.Column}>
                <div className={props.Name}>
                    <button className={props.Button}
                        type={props.Type} id={props.Id} data-toggle={props.Toggle}
                        aria-haspopup={props.Popup} aria-expanded={props.Expand}>
                        {props.Text}
                    </button>
                    <div className={props.Menu} aria-labelledby={props.MenuButton}>
                        <h6 className="dropdown-header">{props.Header}</h6>
                        <a className="dropdown-item" href="#">{props.Item1}</a>
                        <a className="dropdown-item" href="#">{props.Item2}</a>
                        <a className="dropdown-item" href="#">{ props.Item3}</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DropDownUp;
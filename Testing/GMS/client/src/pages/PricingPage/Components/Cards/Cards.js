import React from "react";

const Cards = (props) => {
    return (

        <div className={props.Type}>
            <h6 className="card-category"> {props.Title}</h6>
            <div className="card-body">
                <div className={props.Icon}>
                    <i className={props.Button}></i>
                </div>
                <h3 className="card-title">{props.CardTitle}</h3>
                <ul>
                    <li>{props.List}</li>
                    <li>{props.List2}</li>
                </ul>
            </div>
            <div className="card-footer">
                <a href={props.Link} className={props.Button2}>{props.Text}</a>
            </div>
        </div>
    );
}

export default Cards;
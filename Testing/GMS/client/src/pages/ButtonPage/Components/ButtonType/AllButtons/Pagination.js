import React from "react";
const Pagination = (props) => {
    return (
        <>
            <li class={props.Item}><a class={props.Link} href={props.Hash} aria-label={props.Label} >
                <span aria-hidden={props.Aria}><i class={props.Icon}
                    aria-hidden={props.Aria}></i></span>{props.Text}</a></li>

        </>
    );
}
export default Pagination;


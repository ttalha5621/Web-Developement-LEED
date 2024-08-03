import React from "react";
import MainIcon from "./RowIcons/MainIcon";
const RowIcons = (props) => {
    return (
        <>
            <MainIcon Text={props.Text1} Icon={props.Icon1} Detail={props.Detail1} />
            <MainIcon Text={props.Text2} Icon={props.Icon2} Detail={props.Detail2}/>
            <MainIcon Text={props.Text3} Icon={props.Icon3} Detail={props.Detail3}/>
            <MainIcon Text={props.Text4} Icon={props.Icon4} Detail={props.Detail4}/>
            <MainIcon Text={props.Text5} Icon={props.Icon5} Detail={props.Detail5}/>
            <MainIcon Text={props.Text6} Icon={props.Icon6} Detail={props.Detail6}/>

        </>
    );
}
export default RowIcons;
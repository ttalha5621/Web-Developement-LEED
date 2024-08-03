import React from "react";
import Content from "../Content/Content";
import ItemsTitle from "./Items/ItemsTitle";
const FirstItem = (props) => {
    return (
        <div className="card card-plain">
            <ItemsTitle Id="headingOne" Text="Collapsible Group Item #1"
                Collapse="collapse" Control="collapseOne"
                Data="#accordion" Link="#collapseOne"
                Icon="now-ui-icons arrows-1_minimal-down" Expand="true" />

            <Content ContentId="collapseOne" ContentTab="collapse show" Heading="headingOne" Panel="tabpanel"
                Content=" Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
            beer farm-to-table, raw denim aesthetic synth nesciunt you probably
            haven't heard of them accusamus labore sustainable VHS.
            " />
        </div>
    )
}
export default FirstItem;
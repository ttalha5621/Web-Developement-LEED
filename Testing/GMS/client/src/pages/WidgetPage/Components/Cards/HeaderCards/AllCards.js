import React from "react";
import CardIcons from "./CardIcons";

const AllCards = (props) => {
    return (
        <div class="col-lg-3 col-sm-6">
            <div class="card card-stats">
                <div class="card-body ">
                    <div class="statistics statistics-horizontal">
                        <div class="info info-horizontal">
                            <div class="row">
                                <CardIcons Type={props.Type}
                                    Icon={props.Icon2} Column={props.Column}/>
                                <div class={props.Size}>
                                    <h3 class="info-title"><span>{props.Span}</span>{props.Title}</h3>
                                    <h6 class="stats-title">{props.Text}</h6>
                                </div>
                                <CardIcons Type={props.Type2}  
                                Icon={props.Icon3} 
                                Column={props.Column1}/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="card-footer ">
                    <div class="stats">
                        <i class={props.Icon}>{props.Content}</i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllCards;
import React from "react";
import HeaderTables from "./SimpleTables/HeaderTables";
import SimpleTables from "./SimpleTables/SimpleTables";
import Title from "../../Title/Title";
const SimpleTable = (props) => {
    return (
        <div className="col-md-12">
            <div className={props.Card}>
                <Title Title={props.Title}  Paragraph={props.Paragraph}/>
                <div className={props.Body}>
                    <div className="table-responsive">
                        <table className="table">
                            <HeaderTables Name={props.Name} Country={props.Country} City={props.City} Salary={props.Salary} />
                            <SimpleTables Name={props.Name1} Country={props.Country1} City={props.City1} Salary={props.Salary1} Color={props.Color1} />
                            <SimpleTables Name={props.Name2} Country={props.Country2} City={props.City2} Salary={props.Salary2} />
                            <SimpleTables Name={props.Name3} Country={props.Country3} City={props.City3} Salary={props.Salary3} Color={props.Color3} />
                            <SimpleTables Name={props.Name4} Country={props.Country4} City={props.City4} Salary={props.Salary4} />
                            <SimpleTables Name={props.Name5} Country={props.Country5} City={props.City5} Salary={props.Salary5} Color={props.Color5} />
                            <SimpleTables Name={props.Name6} Country={props.Country6} City={props.City6} Salary={props.Salary6} />
                            <SimpleTables Name={props.Name7} Country={props.Country7} City={props.City7} Salary={props.Salary7} Color={props.Color7} />
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SimpleTable;
import React from "react";
import HeaderTables from "./SimpleTables/HeaderTables";
import SimpleTables from "./SimpleTables/SimpleTables";
import Title from "../../Title/Title";
const SimpleTable = (props) => {
    return (
        <div className="col-md-12">
            <div className="card">
                <Title Title="Simple Table" />
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="text-primary">
                                <HeaderTables Hash="#" Name="Name" Position="Job Position"
                                    Date="Since" Salary="Salary" Actions="Actions" />
                            </thead>
                            <tbody>
                                <SimpleTables Serial="1" Name="Andrew" Position="Developer"
                                    Date="2013" Salary="€99,225"
                                    Button="btn btn-info btn-icon btn-sm" Icon="fas fa-user"
                                    Button2="btn btn-success btn-icon btn-sm" Icon2="fas fa-tools"
                                    Button3="btn btn-danger btn-icon btn-sm" Icon3="fas fa-times"
                                />

                                <SimpleTables Serial="2" Name="John" Position="Design"
                                    Date="2012" Salary="€89,241"
                                    Button="btn btn-info btn-icon btn-sm" Icon="fas fa-user"
                                    Button2="btn btn-success btn-icon btn-sm" Icon2="fas fa-tools"
                                    Button3="btn btn-danger btn-icon btn-sm" Icon3="fas fa-times" />

                                <SimpleTables Serial="3" Name="Mike" Position="Marketing"
                                    Date="2011" Salary="€49,990"
                                    Button="btn btn-info btn-icon btn-sm   btn-neutral" Icon="fas fa-user"
                                    Button2="btn btn-success btn-icon btn-sm   btn-neutral" Icon2="fas fa-tools"
                                    Button3="btn btn-danger btn-icon btn-sm   btn-neutral  " Icon3="fas fa-times" />

                                <SimpleTables Serial="4" Name="Paul" Position="Communication"
                                    Date="2010" Salary="€69,201"
                                    Button="btn btn-info btn-icon btn-sm   btn-neutral" Icon="fas fa-user"
                                    Button2="btn btn-success btn-icon btn-sm   btn-neutral" Icon2="fas fa-tools"
                                    Button3="btn btn-danger btn-icon btn-sm   btn-neutral  " Icon3="fas fa-times" />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SimpleTable;
import React from "react";
import Table from "./Table/Table";
const DataTable = (props) => {
    return (
        <>
            <div className="panel-header"></div>
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">DataTables.net</h4>
                            </div>
                            <div className="card-body">

                                <div className="toolbar">
                                    {/* <!--        Here you can write extra buttons/actions for the toolbar              --> */}
                                </div>
                                <table id="datatable" className="table table-striped table-bordered" cellspacing="0"
                                    width="100%">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th className="disabled-sorting text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <Table Name="Tiger Nixon" Position="System Architect"
                                            Office="Edinburgh" Age="61" />
                                        <Table Name="Garrett Winters" Position="Accountant"
                                            Office="Tokyo" Age="63" />
                                        <Table Name="Garrett Winters" Position="Accountant"
                                            Office="Tokyo" Age="63" />
                                    </tbody>
                                </table>
                                {/* <!-- end content--> */}
                            </div>
                            {/* <!--  end card  --> */}
                        </div>
                        {/* <!-- end col-md-12 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>

            </div>
        </>
    )
}

export default DataTable;
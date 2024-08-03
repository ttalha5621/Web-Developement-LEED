import React from "react";
import HeaderTables from "./AddCustomerComponents/HeaderTables";
import AddCustomers from "./AddCustomerComponents/AddCustomers";
import Title from "../../Title/Title";
import SmallAlertModalNotificationPlaces from "../../../NotificationsPage/Components/Modal/SmallAlertModalNotificationPlaces";

const AddCustomer = (props) => {
    return (
        <div className="col-md-12 pt-1">
            <div className="card">
                <div className="row justify-content-between">
                    <div className="col-md-6">
                        <Title Title="Add Customers" />
                    </div>
                    <div className="col-md-5 text-right pt-2 mr-3">
                        <SmallAlertModalNotificationPlaces
                            form={<>
                                <div className="row">
                                    <div className="col-md-6 pr-1">
                                        <div className="form-group">
                                            <input className="form-control " type="text" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 pl-1">
                                        <div className="form-group">
                                            <input className="form-control " type="text" placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input className="form-control " type="email" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control " type="tel" placeholder="Contact No" maxLength="11" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control " type="text" maxLength="13" placeholder="CNIC" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control " type="text" placeholder="Account No" maxLength="16" />
                                </div>
                            </>}
                            title={<><strong>Add Customer</strong></>}
                            Button="btn btn-primary btn-round"
                            Text="Add Customer's"
                            Alert="modal fade modal-primary"
                            Id="myModal10"
                            Data="#myModal10"
                            Modal="modal" />
                        {/* <button className="btn btn-primary add-new btn-round" ><i class="fa fa-plus"></i> Add Customer's</button> */}
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead className="text-primary">
                                <HeaderTables Hash="#" FirstName="First Name" LastName="Last Name" Email="Email" ContactNo="Contact No" AccountNo="Account No" CNIC="CNIC" Action="Action" />
                            </thead>
                            <tbody>

                                <AddCustomers Serial="1" FirstName="Abdullah" LastName="Azhar" Email="abdullahazhar@gmail.com" ContactNo="12345678900" AccountNo="0000-0000-0000-0000" CNIC="00000-000000-0" />

                                <AddCustomers Serial="2" FirstName="Talha" LastName="Rizwan" Email="ttalha5621@gmail.com" ContactNo="03009766135" AccountNo="0000-0000-0000-0000" CNIC="00000-000000-0" />

                                <AddCustomers Serial="3" FirstName="Bilal" LastName="Rajpoot" Email="bilalrajpoot@gmail.com" ContactNo="090078601" AccountNo="0000-0000-0000-0000" CNIC="00000-000000-0" />

                                <AddCustomers Serial="4" FirstName="" LastName="" Email="" ContactNo="" AccountNo="" CNIC="" />

                                <AddCustomers Serial="5" FirstName="" LastName="" Email="" ContactNo="" AccountNo="" CNIC="" />

                                <AddCustomers Serial="6" FirstName="" LastName="" Email="" ContactNo="" AccountNo="" CNIC="" />

                                <AddCustomers Serial="7" FirstName="" LastName="" Email="" ContactNo="" AccountNo="" CNIC="" />

                            </tbody>
                        </table>
                        <div className="text-center">
                            {/* <SmallAlertModalNotificationPlaces Button="btn btn-info" Text="Smart alert modal" Alert="modal fade modal-mini modal-primary" Id="myModal10" Data="#myModal10" Modal="modal" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCustomer;
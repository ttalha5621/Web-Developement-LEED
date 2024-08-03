import React from "react";
import ProfileForms from "./ProfileForms/ProfileForms";

const ProfileForm = (props) => {
    return (
        <div className="col-md-8">
            <div className="card">
                <div className="card-header">
                    <h5 className="title">Edit Profile</h5>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <ProfileForms Size="col-md-5 pr-1" Text="Company (disabled)"
                                Placeholder="Company" Value="Creative Code Inc." />
                            <ProfileForms Size="col-md-3 px-1" Text="Username"
                                Placeholder="Username" Value="michael23" />
                            <ProfileForms Size="col-md-4 pl-1" Text="Email address"
                                Placeholder="Email" />
                        </div>
                        <div className="row">
                            <ProfileForms Size="col-md-6 pr-1" Text="First Name"
                                Placeholder="Company" Value="Mike" />
                            <ProfileForms Size="col-md-6 pl-1" Text="Last Name"
                                Placeholder="Last Name" Value="Andrew" />
                        </div>
                        <div className="row">
                            <ProfileForms Size="col-md-12" Text="Address"
                                Placeholder="Home Address" Value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
                        </div>
                        <div className="row">
                            <ProfileForms Size="col-md-4 pr-1" Text="City"
                                Placeholder="City" Value="Mike" />
                            <ProfileForms Size="col-md-4 px-1" Text="Country"
                                Placeholder="Country" Value="Andrew" />
                            <ProfileForms Size="col-md-4 pl-1" Text="Postal Code"
                                Placeholder="ZIP Code" />
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>About Me</label>
                                    <textarea rows="4" cols="80" className="form-control"
                                        placeholder="Here can be your description"
                                        value="Mike">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ProfileForm;
import React from "react";
import ProfileCard from "./Components/ProfileCard";
import ProfileForm from "./Components/ProfileForm";

const UserProfile = (props) => {
    return (
        <>
            <div className="panel-header panel-header-sm"></div>
            <div className="content">
                <div className="row">
                    <ProfileForm />
                    <ProfileCard />
                </div>
            </div>
        </>
    );
}

export default UserProfile;
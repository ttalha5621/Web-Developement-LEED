import React from 'react';
import Main from "../../pages/Home/Main/Main"
import Teacher from "../../pages/Home/Main/Teacher"

const RoleLayout = ({ user, Component }) => {
    return (
        (user.role === 'teacher' ? <Teacher><Component /></Teacher> : <Main> <Component /> </Main>)
    )

}

export default RoleLayout;
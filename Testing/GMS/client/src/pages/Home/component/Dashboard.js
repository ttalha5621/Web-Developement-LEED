import React from 'react'
import HomePage from '../../../pages/HomePage';

const Dashboard = (props) => {
    console.log("HEY", props.name)
    return (
        <>
            <HomePage />
        </>

    );
}

export default Dashboard;
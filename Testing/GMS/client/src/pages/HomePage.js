import React from 'react';
import Chart from "./HomePage/Chart";
import Content from './HomePage/Content';
import AddCustomer from './Tables/ExtendedTable/Components/AddCustomer'


const HomePage = (props) => {
    return (
        <>
            <div className="panel-header panel-header-sm"></div>
            {/* <!-- Chart --> */}
            {/* <Chart /> */}
            {/* <!-- End Chart --> */}

            {/* {<!-- Content --> } */}
            {/* <Content /> */}
            {/* {<!-- END Content --> } */}
            <div className="content">
                <AddCustomer />
            </div>
        </>
    )
}

export default HomePage;
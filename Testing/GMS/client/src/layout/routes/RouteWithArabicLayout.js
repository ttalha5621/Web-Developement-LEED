import React from "react";
import { Route } from "react-router-dom";
import Sidebar from '../../pages/shared/Sidebar/Sidebar';
import SideBarArabic from '../../pages/shared/Sidebar/SideBarArabic';

const RouteWithArabicLayout = (props) => {
    const { layout: Layout, component: Component, name: name, ...rest } = props;
    console.log(props);
    console.log("Name ", props.name);
    return (
        <Route {...rest}
            render={matchProps => (
                <>
                    <div className={"rtl rtl-active " + props.sidebar + ""}>
                        <div className="wrapper ">
                            <SideBarArabic {...rest} />


                            {/* <Sidebar  /> */}

                            <Layout name={name} >
                                <Component {...matchProps} />
                            </Layout>

                        </div>
                    </div >

                </>
            )}
        />
    )
}

export default RouteWithArabicLayout
import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import Sidebar from '../../pages/shared/Sidebar/Sidebar';


const RouteWithRoute = (props) => {
    const { layout: Layout, component: Component, name: name, ...rest } = props;
    console.log(props);
    return (
        <Route {...rest}
            render={matchProps => (
                <>
                    <div className={"wrapper " + props.sidebar + ""}>
                        <Sidebar {...rest} />

                        <Layout name={name} >
                            <Component {...matchProps} />
                        </Layout>
                    </div>
                </>
            )}
        />
    )
}

export default RouteWithRoute;
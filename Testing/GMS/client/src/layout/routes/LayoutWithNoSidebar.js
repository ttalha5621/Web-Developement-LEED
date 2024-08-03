import React from 'react';
import { Route } from "react-router-dom";

const LayoutWidthNoSideBar = (props) => {
    const { layout: Layout, component: Component, ...rest } = props;
    console.log(props)
    return (
        <Route {...rest}
            render={(matchProps) => (
                <Layout {...rest}>
                    <Component {...matchProps} />
                </Layout>
            )}
        />
    )
}

export default LayoutWidthNoSideBar;
import React from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthConsumer } from "../providers/AuthProvider";
import RoleLayout from "./RoleLayout";

const PrivateRouteWithLayout = ({
    component: Component, ...rest
}) => (
        <AuthConsumer>
            {({ isAuth, user }) => (
                <Route
                    render={(props) =>
                        isAuth ? (
                            <RoleLayout user={user} Component={Component} {...props} />
                        ) : (
                                <Redirect
                                    to={{
                                        pathname: "/login",
                                        state: { from: props.location },
                                    }}
                                />
                            )
                    }
                    {...rest}
                />
            )}
        </AuthConsumer>
    );

export default PrivateRouteWithLayout;

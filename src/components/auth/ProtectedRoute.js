import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthUser } from "./AuthUser";

export const ProtectedRoute = ({
    component: Component,
    ...rest
}) => {
    const { logged } = useAuthUser();

    return (
        <Route
            {...rest}
            render={props => {
                if (logged) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/home",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

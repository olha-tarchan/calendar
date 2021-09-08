import React, {useState} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privatRoutes, publicRoutes, RouterName} from "../routes";
import {useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth);

    return (
        isAuth
            ?
            <Switch>
                {privatRoutes.map(route =>
                    <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />
                    )}
                    {/*если ни один роутер не был введен то показывать страницу Login:*/}
                    <Redirect to={RouterName.EVENT} />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />
                )}
                <Redirect to={RouterName.LOGIN} />
            </Switch>
    );
};

export default AppRouter;
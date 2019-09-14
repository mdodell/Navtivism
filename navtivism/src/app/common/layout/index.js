import React, { Fragment } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, TEST_ROUTE} from "../constants";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import {UserIsNotAuthenticated} from "../utils/authentication";
import TestPage from "../../pages/TestPage";

const App = ({location}) => {
    return (
        <Fragment>
            <Route exact path={HOME_ROUTE} component={HomePage} />
            <Route exact path={TEST_ROUTE} component={TestPage} />
            <Route exact path={LOGIN_ROUTE} component={UserIsNotAuthenticated(LoginPage)} />
        </Fragment>
    )
};

export default withRouter(App);
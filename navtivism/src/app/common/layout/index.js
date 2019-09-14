import React, { Fragment } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE} from "../constants";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import {UserIsNotAuthenticated} from "../utils/authentication";
import NavBar from "../components/NavBar";

const App = ({location}) => {
    return (
        <Fragment>
            <Route exact path={HOME_ROUTE} component={HomePage}/>
            <Route
                path="/(.+)"
                render={() => (
                    <Fragment>
                        <NavBar/>
                        <Switch key={location.key}>
                            <Route exact path={LOGIN_ROUTE} component={UserIsNotAuthenticated(LoginPage)}/>
                        </Switch>
                    </Fragment>
                )}
            />
        </Fragment>
    )
};

export default withRouter(App);
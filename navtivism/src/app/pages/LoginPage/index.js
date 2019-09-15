import React, { Fragment } from 'react';
import { Formik } from 'formik';
import {initialValues} from "../../common/components/Forms/LoginForm/initialValues";
import {validation} from "../../common/components/Forms/LoginForm/validation";
import CssBaseline from "@material-ui/core/CssBaseline";
import LoginForm from "../../common/components/Forms/LoginForm/form";

const LoginPage = () => {
    return (
        <Fragment>
            <CssBaseline />
            <Formik initialValues={initialValues} validationSchema={validation} render={LoginForm}/>
        </Fragment>

    );
};

export default LoginPage;



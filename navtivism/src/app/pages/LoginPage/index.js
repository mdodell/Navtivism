import React from 'react';
import { Formik } from 'formik';

const LoginPage = () => {
    return (
        <Formik initialValues={{
            password: ''
        }}
        />
    );
};

export default LoginPage;

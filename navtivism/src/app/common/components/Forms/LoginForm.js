import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik';

const LoginForm = () => {
    return (
        <Form>
            <Field
                type="password"
                label="Password"
                name="password"
                component={TextField}
            />
        </Form>
    );
};

export default LoginForm;

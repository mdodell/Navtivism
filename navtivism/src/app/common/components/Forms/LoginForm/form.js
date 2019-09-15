import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import Grid from '@material-ui/core/Grid';

const LoginForm = () => {
    return (
        <Form>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Field
                        type="text"
                        label="First Name"
                        name="firstName"
                        component={TextField}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        type="text"
                        label="Last Name"
                        name="lastName"
                        component={TextField}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        type="text"
                        label="Email"
                        name="email"
                        component={TextField}
                    />
                </Grid>
            </Grid>
        </Form>
    );
};

export default LoginForm;
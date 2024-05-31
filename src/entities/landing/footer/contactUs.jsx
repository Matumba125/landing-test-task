import React from 'react';
import {Button, TextField} from "@mui/material";
import * as yup from 'yup'
import {useFormik} from "formik";
import style from './footer.module.scss'

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    name: yup
        .string('Enter your name')
        .min(3, 'Name should be of minimum 3 characters length')
});

const ContactUs = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    
    return (
        <div className={style.contactWrapper}>
            <h1>Contact Us</h1>
            <form className={style.formWrapper} onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Your name*:"
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Your Email:"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    multiline
                    minRows={3}
                    id="message"
                    name="message"
                    label="Message:"
                    type="message"
                    className={style.textField}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                />
                <Button className={style.submitButton} color="primary" variant="contained" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default ContactUs;
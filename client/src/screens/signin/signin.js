import React from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import PageDefault from '../../components/page-default/page-default'
import { Lock, EmailOutline } from '../../components/icons/icons'
import styles from './signin.module.scss'

const FormSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email.')
        .required('Email required.'),
    password: Yup.string()
        .required('Password required.')
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            'Must contain 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character.'
        )
})

const SignIn = () => {
    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
        }, 400)
    }

    return (
        <PageDefault>
            <div className={styles.formikWrapper}>
                <div className={styles.formHeader}>
                    <h1 className={styles.formLabel}>Sign In</h1>
                </div>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={FormSchema}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className={styles.form}>
                            <div className={styles.fieldGroup}>
                                <EmailOutline />
                                <Field
                                    className={styles.inputField}
                                    type='email'
                                    name='email'
                                    placeholder='Email Address'
                                />
                            </div>
                            <ErrorMessage
                                name='email'
                                component='div'
                                className={styles.errorMessage}
                            />
                            <div className={styles.fieldGroup}>
                                <Lock />
                                <Field
                                    className={styles.inputField}
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                />
                            </div>
                            <ErrorMessage
                                name='password'
                                component='div'
                                className={styles.errorMessage}
                            />
                            <button
                                className={styles.buttonSubmit}
                                type='submit'
                                disabled={isSubmitting}
                            >
                                Sign In
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className={styles.loginHint}>
                <p className={styles.loginHintLabel}>
                    Don&apos;t have an account?{' '}
                    <a className={styles.loginHintLink} href='/register'>
                        Create one now
                    </a>
                </p>
            </div>
        </PageDefault>
    )
}

export default SignIn

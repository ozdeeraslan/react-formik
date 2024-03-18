import React from 'react'
import { Formik, useFormik } from 'formik';
import Validation from './Validation';

function Signup() {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched  } = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: Validation
    });

    return (
        <div>
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />

                {errors.email && touched.email && <div className='error'>{errors.email}</div>}

                <br />
                <br />

                <label>Password</label>
                <input
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />

                {errors.password && touched.password && <div className='error'>{errors.password}</div>}

                <br />
                <br />


                <label>Confirm Password</label>
                <input
                    name="passwordConfirm"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordConfirm}
                />

                {errors.passwordConfirm && touched.passwordConfirm && <div className='error'>{errors.passwordConfirm}</div>}


                <br />
                <br />

                <button type="submit">Submit</button>

                <br />
                <br />

                {JSON.stringify(values)}

            </form>
        </div>
    )
}

export default Signup
import React from 'react'
import { Formik } from 'formik'
const LoginForm = props => (
  <div>
    <h1>Login!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        // eslint-disable-next-line react/prop-types
        props.handleSubmit(values.email, values.password)
        setSubmitting(false)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className='form-group mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              className='form-control'
              value={values.email}
            />
            <span className='text-danger'>{errors.email && touched.email && errors.email}</span>
          </div>
          <div className='form-group mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              className='form-control'
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
          </div>
          <button type='submit' className='btn btn-primary' disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
)

export default LoginForm

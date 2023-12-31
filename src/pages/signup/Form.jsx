import React from 'react'
import { Formik } from 'formik'

const Form = () => (
  <div>
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address'
        } else if (!values.name) {
          errors.name = 'Required'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
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
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='name'
              name='name'
              className='form-control'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <span className='text-danger'>{errors.name && touched.name && errors.name}</span>
          </div>
          <div className='form-group mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              name='email'
              className='form-control'
              onChange={handleChange}
              onBlur={handleBlur}
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
              className='form-control'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <span className='text-danger'>
              {errors.password && touched.password && errors.password}
            </span>
          </div>

          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
)

export default Form

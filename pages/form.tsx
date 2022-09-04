import { useMutation, useQuery } from "../convex/_generated/react"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TestFunction = () => {
    const freeItems = useQuery("getFreeItems") || [];
    const header = DisplayHeader();
    const form = SignupForm();

    return <div> {DisplayHeader()}
    {form}
    </div>
}

const DisplayHeader = () => {
  return <header>
    <div className="pt-30 pb-30 bg-light lh-40 text-center navigation_8">
      <h1 className="mb-3">DROP</h1>
      <h4 className="mb-3">Fill out the form below with the info about the item you want to dispose of!</h4>
    </div>
  </header>
}

export default TestFunction

const SignupForm = () => {
  const submitFreeItem = useMutation("submitFreeItem")

  const formik = useFormik({
    initialValues: {
      boxDescription: '',
      location: 0,
      email: '',
    },
    validationSchema: Yup.object({
      boxDescription: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .required('Required'),
      location: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address'),
    }),
    onSubmit: values => {
        submitFreeItem(values.boxDescription, values.location, values.email)
        formik.resetForm();
    },
  });

  return (
    <div className="container">
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="boxDescription">Box description</label>
      <input
        id="boxDescription"
        name="boxDescription"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.boxDescription}
      />
      {formik.touched.boxDescription && formik.errors.boxDescription ? (
        <div>{formik.errors.boxDescription}</div>
      ) : null}

      <label htmlFor="location">Location</label>
      <input
        id="location"
        name="location"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.location}
      />
      {formik.touched.location && formik.errors.location ? (
        <div>{formik.errors.location}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit" className="btn btn-primary" style={{backgroundColor: 'green'}}>Submit</button>
    </form>
    </div>
  );
};
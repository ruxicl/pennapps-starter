import { useMutation, useQuery } from "../convex/_generated/react"
import React from 'react';
import { useFormik } from 'formik';

const submitItem = () => {
    alert("hjh")
    const submitFreeItem = useMutation("submitFreeItem")
    submitFreeItem("ss", 2, 2)
    alert("Done")
}

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
      firstName: '',
      lastName: 0,
      email: 0,
    },
    onSubmit: values => {
        submitFreeItem(values.firstName, values.lastName, values.email)
        formik.resetForm();
    },
  });

  return (
    <div className="container">
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit" className="btn btn-primary" style={{backgroundColor: 'green'}}>Submit</button>
    </form>
    </div>
  );
};

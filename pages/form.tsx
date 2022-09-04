import { useMutation, useQuery } from "../convex/_generated/react"
import React from 'react';
import { useFormik } from 'formik';

const TestFunction = () => {
    const submitFreeItem = useMutation("submitFreeItem")

    const freeItems = useQuery("getFreeItems") || [];
    const header = DisplayHeader();

    const miniFunction = () => {
        // console.log("Hey hey")
        submitFreeItem("test", 5, 6)
    }

    return <div> {DisplayHeader()}
    {SignupForm()}
    <a className="btn btn-primary" onClick={miniFunction} role="button" style={{backgroundColor: 'green'}}>Submit Form</a>
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
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
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
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

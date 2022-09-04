import { useMutation, useQuery } from "../convex/_generated/react"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { map } from "lodash";

const TestFunction = () => {
    const submitFreeItem = useMutation("submitFreeItem")

    return <div> {DisplayHeader()}
    {SignupForm()}
    {AddNewItems(submitFreeItem)}
    </div>
}

const DisplayHeader = () => {
  return <header>
    <div className="pt-30 pb-30 bg-light lh-40 text-center navigation_8" >
      <h1 className="mb-3" >DROP</h1>
    </div>
  </header>
}

export default TestFunction

const SignupForm = () => {
  const submitFreeItem = useMutation("submitFreeItem")

  const formik = useFormik({
    initialValues: {
      boxDescription: '',
      location: '',
      email: '',
    },
    validationSchema: Yup.object({
      boxDescription: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .required('Required'),
      location: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      nrOfLightbulbs: Yup.string()
        .max(50, 'Sorry, you reached the maximum number'),
      nrOfBatteries: Yup.string()
        .max(50, 'Sorry, you reached the maximum number'),
      email: Yup.string().email('Invalid email address'),
    }),
    onSubmit: values => {
        submitFreeItem(values.boxDescription, values.location, 0)
        formik.resetForm();
    },
  });

  return (
    <div className="container">
      <p> Add the items you want to dispose of and the corresponding quantities</p>
    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="location" style={{"width" : "150px"}}>Address</label>
      <input
        id="location"
        name="location"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.location}
      />
      {formik.touched.location && formik.errors.location ? (
        <div>{formik.errors.location}</div>
      ) : null}

    <br></br>
    <br></br>

      <label htmlFor="email" style={{"width" : "150px"}}>Email Address</label>
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

    <br></br>
    <br></br>
    </form>
    </div>
  );
};


const initialValues = {
  items: [
    {
      name: '',
      quantity: 0,
    },
  ],
};

const AddNewItems = (submitFreeItem) => (
    
<div className="container">
    <p>Add the items you want to dispose of and the corresponding quantities</p>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { resetForm }) => {
        
        await new Promise((r) => setTimeout(r, 500));
        var title = 'Box with: ';
        map(values["items"], p => {if (p["quantity"]>0 && p["name"]!="") { title = title + p["quantity"] + " " + p["name"] + ","}})
        title = title.substring(0, title.length - 1);

        if (title != 'Box with:') {
            var lat = 0;
            var long = 0;

            submitFreeItem(title, lat, long)}
        resetForm();
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="items">
            {({ insert, remove, push }) => (
              <div>
                {values.items.length > 0 &&
                  values.items.map((item, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`items.${index}.name`} style={{"width" : "150px"}}>Item</label>
                        &nbsp;&nbsp;
                        <Field component="select" name={`items.${index}.name`} style={{"width" : "150px", "height" : "27px"}}>
                            <option value=""></option>
                            <option value="batteries">Batteries</option>
                            <option value="lightbulbs">Lightbulbs</option>
                            <option value="smartphones">Smartphones</option>
                            <option value="laptops">Laptops</option>
                            <option value="appliances">Appliancess</option>
                          placeholder="Choose the item "
                          type="text"
                        </Field>
                        <ErrorMessage
                          name={`items.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`items.${index}.quantity`} style={{"width" : "150px", "height" : "20px"}}>Quantity</label>
                        &nbsp;&nbsp;
                        <Field
                          name={`items.${index}.quantity`}
                          placeholder="Insert"
                          type="number"
                        />
                        <ErrorMessage
                          name={`items.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          style={{"width" : "35px", "height" : "35px", backgroundColor: 'green'}}
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  style={{"width" : "70px", "height" : "65px", backgroundColor: 'green'}}
                  className="secondary"
                  onClick={() => push({ name: '', quantity: 0 })}
                >
                  Add item
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit" className="btn btn-primary" style={{backgroundColor: 'green'}}>Done</button>
        </Form>
      )}
    </Formik>
  </div>
);

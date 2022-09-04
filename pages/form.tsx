import { useMutation, useQuery } from "../convex/_generated/react"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

const TestFunction = () => {
    const freeItems = useQuery("getFreeItems") || [];
    const header = DisplayHeader();
    const form = SignupForm();

    return <div> {DisplayHeader()}
    {form}
    {AddNewItems()}
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
      location: '',
      nrOfLightbulbs: 0,
      nrOfBatteries: 0,
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
        submitFreeItem(values.boxDescription, values.location, values.nrOfLightbulbs, values.email)
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

      <label htmlFor="nrOfLightbulbs">Number of lightbulbs</label>
      <input
        id="nrOfLightbulbs"
        name="nrOfLightbulbs"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nrOfLightbulbs}
      />
      {formik.touched.nrOfLightbulbs && formik.errors.nrOfLightbulbs ? (
        <div>{formik.errors.nrOfLightbulbs}</div>
      ) : null}

    <label htmlFor="nrOfBatteries">Number of batteries</label>
      <input
        id="nrOfBatteries"
        name="nrOfBatteries"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nrOfBatteries}
      />
      {formik.touched.nrOfBatteries && formik.errors.nrOfBatteries ? (
        <div>{formik.errors.nrOfBatteries}</div>
      ) : null}

      <label htmlFor="location">Location</label>
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


const initialValues = {
  items: [
    {
      name: '',
      quantity: 0,
    },
  ],
};

const AddNewItems = () => (
  <div>
    <p>Add the items you want to dispose of and the corresponding quantities</p>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
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
                        <label htmlFor={`items.${index}.name`}>Item</label>
                        <Field component="select" name={`items.${index}.name`}>
                            <option value=""></option>
                            <option value="batteries">Batteries</option>
                            <option value="lightbulbs">Lightbulbs</option>
                            <option value="smartphones">Smartphones</option>
                            <option value="laptops">Laptops</option>
                            <option value="appliances">Appliancess</option>
                          placeholder="Choose the item"
                          type="text"
                        </Field>
                        <ErrorMessage
                          name={`items.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`items.${index}.quantity`}>Quantity</label>
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
                  className="secondary"
                  onClick={() => push({ name: '', quantity: 0 })}
                >
                  Add new item to your box
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Done</button>
        </Form>
      )}
    </Formik>
  </div>
);
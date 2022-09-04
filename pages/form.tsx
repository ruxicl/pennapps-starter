import { useMutation, useQuery } from "../convex/_generated/react"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { map } from "lodash";

const TestFunction = () => {
    const submitFreeItem = useMutation("submitFreeItem")

    return <div> {DisplayHeader()}
    {AddNewItems(submitFreeItem)}
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

            if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(showPosition);
            }
              
            function showPosition(position) {
             lat =  position.coords.latitude;
             long = position.coords.longitude;
            }

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
                        <label htmlFor={`items.${index}.name`}>Item </label>
                        &nbsp;&nbsp;
                        <Field component="select" name={`items.${index}.name`}>
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
                        <label htmlFor={`items.${index}.quantity`}>Quantity</label>
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
                          className="secondary"
                          onClick={() => remove(index)}
                          style={{backgroundColor: 'green'}}
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
                  style={{backgroundColor: 'green'}}
                >
                  Add new item to your box
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

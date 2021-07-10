import React, { useContext } from 'react';
import { AuthContext } from "../../Helpers/AuthContext";
import { useHistory } from 'react-router-dom';
import './Registration.css';
import axios from "axios";
import * as Yup from "yup";
const { Formik, Form, Field, ErrorMessage } = require('formik');

function Registration() {
  let history = useHistory();
  const { setAuthState } = useContext(AuthContext);
    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    };

    // validating form
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().min(5).max(15).required(),
        lastname: Yup.string().min(5).max(15).required(),
        email: Yup.string().min(5).max(30).required(),
        password: Yup.string().min(5).max(15).required(),
    });

    // submitting user infor and registration
    const onSubmit = async (data) => {
        const response = await axios.post('/users', data)
            .catch((err) => console.log(err));
      if (response && response.data) {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          status: true,
          firstname: response.data.firstname,
          id: response.data.id,
        });
            console.log(response.data);
            history.push('../../dash');
        }
    };

    return (
      <div className="register-page">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="form-control">
              <label htmlFor="firstname">Firstname:</label>
              <ErrorMessage name="firstname" component="span" />
              <Field
                type="text"
                placeholder="firstname..."
                name="firstname"
                id="form-input"
              />
            </div>
            <div className="form-control">
              <label htmlFor="lastname">Lastname:</label>
              <ErrorMessage name="lastname" component="span" />
              <Field
                type="text"
                placeholder="lastname..."
                name="lastname"
                id="form-input"
              />
            </div>
            <div className="form-control">
              <label htmlFor="Email">Email:</label>
              <ErrorMessage name="email" component="span" />
              <Field
                type="email"
                placeholder="email@xyz.com"
                name="email"
                id="form-input"
              />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password:</label>
              <ErrorMessage name="password" component="span" />
              <Field
                type="password"
                placeholder="password..."
                name="password"
                id="form-input"
              />
            </div>
            <button type="submit" className="submit-btn" onClick={onSubmit}>
              Register
            </button>
          </Form>
        </Formik>
      </div>
    );
}

export default Registration;

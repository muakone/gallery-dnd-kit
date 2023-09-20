import React, { useState } from "react";
import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Auth = () => {
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email field is required"),
    password: Yup.string().required("Password field is required"),
  });
  const onSubmit = (values) => {
    // sign in user
    setIsLoading(true);
    console.log(values, "values");
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
        localStorage.setItem("user", userCredential.user.email);
        setIsLoading(false);
        Navigate("/home");
        toast.success("User has logged in");
        // ...
      })
      .catch((err) => {
        if (
          err.code === AuthErrorCodes.INVALID_PASSWORD ||
          err.code === AuthErrorCodes.USER_DELETED
        ) {
          toast.error("The email address or password is incorrect");
        } else {
          console.log(err.code);
          toast.error(err.code);
        }
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-300 flex">
        <div className="bg-white md:w-[400px] w-[90%] min-h-[400px] shadow-lg m-auto flex flex-col items-center py-6">
          <h2 className="text-center text-5xl font-bold">Login</h2>
          <div className="my-5 w-9/12">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="grid gap-y-10 w-full">
                <div className="grid gap-y-2">
                  <label htmlFor="Email">Email</label>
                  <Field
                    name="email"
                    placeholder="user@example.com"
                    className="mt-1 p-2 border outline-none rounded-md focus:ring focus:ring-blue-300"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="grid gap-y-2">
                  <label htmlFor="Password">Password</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 p-2 border outline-none rounded-md focus:ring focus:ring-blue-300"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                {!isLoading ? (
                  <button type="submit" className="p-4 rounded bg-blue-200">
                    Submit
                  </button>
                ) : (
                  <button className="p-4 rounded bg-blue-200">
                    Loading...
                  </button>
                )}
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;

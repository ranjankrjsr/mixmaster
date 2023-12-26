import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async (data) => {
  const { request } = data;
  console.log(request);
  const formData = await request.formData();
  console.log("formData , ", formData);
  const result = Object.fromEntries(formData);
  console.log(result);

  try {
    const response = await axios.post(newsletterUrl, result);

    console.log("responseData", response.data);
    toast.success(response.data.msg);

    return redirect("/");
  } catch (err) {
    console.log("err", err);
    toast.error(err?.response?.data?.msg);
    return err;
  }
};

const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>

      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          defaultValue="john"
        ></input>
      </div>

      {/* lastName */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last Name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          defaultValue="Doe"
        ></input>
      </div>

      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          defaultValue="test@test.com"
        ></input>
      </div>

      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
};

export default NewsLetter;

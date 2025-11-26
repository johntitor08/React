import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import type { UserFormValues } from "../types/form";
import "./UserForm.css";

const UserForm: React.FC = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must be less than 50 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must be less than 50 characters")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    age: Yup.number()
      .min(18, "You must be at least 18 years old")
      .max(100, "Age must be less than 100")
      .required("Age is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    acceptTerms: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("You must accept the terms and conditions"),
  });

  // Initial values with proper typing
  const initialValues: UserFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  };

  // Form submission handler
  const handleSubmit = (
    values: UserFormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    // Simulate API call
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  // Formik hook with TypeScript
  const formik = useFormik<UserFormValues>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="form-container">
      <h1>User Registration Form</h1>
      <form onSubmit={formik.handleSubmit} className="form">
        {/* First Name */}
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className={`form-input ${
              formik.touched.firstName && formik.errors.firstName ? "error" : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error-message">{formik.errors.firstName}</div>
          ) : null}
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className={`form-input ${
              formik.touched.lastName && formik.errors.lastName ? "error" : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="error-message">{formik.errors.lastName}</div>
          ) : null}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className={`form-input ${
              formik.touched.email && formik.errors.email ? "error" : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Age */}
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            className={`form-input ${
              formik.touched.age && formik.errors.age ? "error" : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="error-message">{formik.errors.age}</div>
          ) : null}
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className={`form-input ${
              formik.touched.password && formik.errors.password ? "error" : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error-message">{formik.errors.password}</div>
          ) : null}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className={`form-input ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? "error"
                : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error-message">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        {/* Terms and Conditions */}
        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.acceptTerms}
            />
            I accept the terms and conditions
          </label>
          {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
            <div className="error-message">{formik.errors.acceptTerms}</div>
          ) : null}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="submit-button"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {/* Reset Button */}
        <button
          type="button"
          className="reset-button"
          onClick={() => formik.resetForm()}
          disabled={formik.isSubmitting}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default UserForm;

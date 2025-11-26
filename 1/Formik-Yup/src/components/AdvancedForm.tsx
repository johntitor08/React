import React from "react";
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import * as Yup from "yup";

interface AdvancedFormValues {
  username: string;
  email: string;
  website: string;
  bio: string;
  category: string;
}

const AdvancedForm: React.FC = () => {
  const initialValues: AdvancedFormValues = {
    username: "",
    email: "",
    website: "",
    bio: "",
    category: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    website: Yup.string().url("Must be a valid URL"),
    bio: Yup.string().max(500, "Bio must be less than 500 characters"),
    category: Yup.string().required("Category is required"),
  });

  const onSubmit = (
    values: AdvancedFormValues,
    { setSubmitting, resetForm }: FormikHelpers<AdvancedFormValues>
  ) => {
    console.log("Form data", values);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  const categories = [
    { value: "", label: "Select a category" },
    { value: "tech", label: "Technology" },
    { value: "health", label: "Health" },
    { value: "education", label: "Education" },
    { value: "business", label: "Business" },
  ];

  return (
    <div className="form-container">
      <h2>Advanced Form with Formik Components</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            {/* Username */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                id="username"
                name="username"
                className={`form-input ${
                  touched.username && errors.username ? "error" : ""
                }`}
              />
              <ErrorMessage
                name="username"
                component="div"
                className="error-message"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className={`form-input ${
                  touched.email && errors.email ? "error" : ""
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            {/* Website */}
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <Field
                type="url"
                id="website"
                name="website"
                className={`form-input ${
                  touched.website && errors.website ? "error" : ""
                }`}
              />
              <ErrorMessage
                name="website"
                component="div"
                className="error-message"
              />
            </div>

            {/* Category */}
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <Field
                as="select"
                id="category"
                name="category"
                className={`form-input ${
                  touched.category && errors.category ? "error" : ""
                }`}
              >
                {categories.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="category"
                component="div"
                className="error-message"
              />
            </div>

            {/* Bio */}
            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <Field
                as="textarea"
                id="bio"
                name="bio"
                className={`form-input ${
                  touched.bio && errors.bio ? "error" : ""
                }`}
                rows="4"
              />
              <ErrorMessage
                name="bio"
                component="div"
                className="error-message"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdvancedForm;

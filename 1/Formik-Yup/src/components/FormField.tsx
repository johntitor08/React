import React from "react";
import { Field, ErrorMessage } from "formik";
import type { FormFieldProps } from "../types/form";

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  as = "input",
  options = [],
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {as === "select" ? (
        <Field as="select" id={name} name={name} className="form-input">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
      ) : (
        <Field
          type={type}
          id={name}
          name={name}
          as={as}
          className="form-input"
          {...(as === "textarea" && { rows: 4 })}
        />
      )}
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
};

export default FormField;

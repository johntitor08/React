export interface UserFormValues {
  firstName: string;
  lastName: string;
  email: string;
  age: number | "";
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface FormFieldProps {
  label: string;
  name: keyof UserFormValues;
  type?: string;
  as?: "input" | "textarea" | "select";
  options?: { value: string; label: string }[];
}

export interface FormikFormProps {
  initialValues: UserFormValues;
  onSubmit: (values: UserFormValues) => void;
  validationSchema: object;
}

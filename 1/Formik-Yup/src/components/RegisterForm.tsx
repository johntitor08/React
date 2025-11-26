import { useFormik } from "formik";

function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h2>Register</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            required
          />
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;

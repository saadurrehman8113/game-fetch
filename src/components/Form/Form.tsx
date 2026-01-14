import { useForm, type FieldValues } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = (formData: FieldValues) => console.log(formData);

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="mb-3">
        <label htmlFor="name" className="label-form">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="label-form">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="text"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;

import { useForm, type FieldValues } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const submitForm = (formData: FieldValues) => console.log(formData);

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="mb-3">
        <label htmlFor="name" className="label-form">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
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
          {...register("age", { required: true, minLength: 3 })}
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

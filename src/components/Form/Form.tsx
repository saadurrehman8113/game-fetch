import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";

//defining schema
const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be atleast 3 characters long!" }),
  age: z.number({}).min(18),
});

//generating the interface/type of the schema
type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema), //integrating the zod schema with hookform
  });

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
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="label-form">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="text"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>

      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;

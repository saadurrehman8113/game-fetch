import { useForm, type FieldValues } from "react-hook-form";

interface Props {
  categories: string[];
}

const AddProduct = ({ categories }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData: FieldValues) => console.log(formData);

  return (
    <form onSubmit={handleSubmit(submitForm)} className="mb-3">
      <div className="mb-3">
        <label htmlFor="Description" className="form-label">
          Description
        </label>
        <input
          {...register("Description")}
          id="Description"
          type="text"
          className="form-control"
        />
        <div className="mb-3">
          <label htmlFor="Amount" className="form-label">
            Amount
          </label>
          <input
            {...register("Amount")}
            id="Amount"
            type="numeric"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Category" className="form-lable">
            Category
          </label>
          <select
            {...register("Category")}
            id="Category"
            className="form-control"
          >
            {categories.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary">Add Product</button>
      </div>
    </form>
  );
};

export default AddProduct;

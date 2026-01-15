interface Props {
  products: { description: string; amount: number; category: string }[];
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const ListProducts = ({ products, categories, onSelectCategory }: Props) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="Select Category" className="form-label">
          Select Category
        </label>
        <select
          onChange={onSelectCategory}
          id="Select Category"
          className="form-control"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col">Description</div>
            <div className="col">Amount</div>
            <div className="col">Category</div>
          </div>
          {products.map((product: any, index) => (
            <div key={index} className="row">
              <div className="col">{product.description}</div>
              <div className="col">{product.amount}</div>
              <div className="col">{product.category}</div>
            </div>
          ))}
          <div className="row">
            <div className="row">{""}</div>
            <div className="col">Total</div>
            <div className="col">
              {products.length &&
                products
                  .map((product: any) => product.amount)
                  .reduce((a, c) => a + c)}
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProducts;

import { useState } from "react";
import AddProduct from "./AddProduct";
import ListProducts from "./ListProducts";

// interface Products {
//   description: string;
//   amount: number;
//   category: string;
// }

const ExpenseTracker = () => {
  const [filterBy, setFilterBy] = useState("");
  const [products, setProducts] = useState([
    {
      description: "abc",
      amount: 10,
      category: "Grocery",
    },
    {
      description: "def",
      amount: 20,
      category: "Fuel",
    },
    {
      description: "ghi",
      amount: 15,
      category: "Bills",
    },
  ]);

  return (
    <>
      <h1 className="text-center">Expense Tracker</h1>
      <AddProduct categories={products.map((product) => product.category)} />
      <ListProducts
        products={
          filterBy
            ? products.filter((product) => product.category === filterBy)
            : products
        }
        categories={products.map((product) => product.category)}
        onSelectCategory={(event) => {
          setFilterBy(event.target.value);
        }}
      />
    </>
  );
};

export default ExpenseTracker;

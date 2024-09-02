import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../app/slices/productSlice";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Electronics");
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    if (name && price) {
      dispatch(addProduct({ id: Date.now(), name, price: Number(price), category }));
      setName("");
      setPrice("");
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Product Price"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
      </select>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;

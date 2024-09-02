import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../app/slices/productSlice";
import { setCategory } from "../app/slices/filtersSlics";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const category = useSelector((state) => {
    console.log("state : ", state);
    return state.filters.category;
  });

  const filteredProducts =
    category === "All" ? products : products.filter((product) => product.category === category);

  return (
    <div>
      <h1>Product Catalogue</h1>
      <select value={category} onChange={(e) => dispatch(setCategory(e.target.value))}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
      </select>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <span>
              {product.name} - ${product.price} ({product.category})
            </span>
            <button onClick={() => dispatch(removeProduct(product.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

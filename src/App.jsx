import { Provider } from "react-redux";
import store from "./app/store";
import "./App.css"; // Optional, for styles
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProdcutList";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <AddProduct />
      <ProductList />
    </div>
  </Provider>
);

export default App;

import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/:id" element={<ProductDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;

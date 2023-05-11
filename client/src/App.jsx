import { useSelector } from "react-redux";
import Pay from "./components/Pay";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/:?" element={<Home />}></Route>
          <Route path="/login" element={user ? <Home /> : <Login />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/products/:category" element={<ProductList />}></Route>
          <Route path="/pay" element={<Pay />}></Route>
          <Route
            path="/register"
            element={user ? <Home /> : <Register />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

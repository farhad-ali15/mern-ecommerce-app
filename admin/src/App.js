import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import NewProduct from "./pages/newProduct/NewProduct";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        {admin && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Routes>
                <Route path="/:id?" element={<Home />}></Route>
                <Route path="/users" element={<UserList />}></Route>
                <Route path="/user/:id" element={<User />}></Route>
                <Route path="/new-user" element={<NewUser />}></Route>
                <Route path="/new-product" element={<NewProduct />}></Route>
                <Route path="/products" element={<ProductList />}></Route>
                <Route path="/product/:productId" element={<Product />}></Route>
              </Routes>
            </div>
          </>
        )}
      </Router>
    </>
  );
}

export default App;

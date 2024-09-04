import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Firms from "../pages/Firms";
import Brands from "../pages/Brands";
import Purchases from "../pages/Purchases";
import Sales from "../pages/Sales";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />        
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            {/* <Route path="" element={<Home/>}/> */}
            {/* nested route yapılarında index dediğimzde boş path vermemize gerek kalmaz. kapsayıcısının pathi geldğinde çalışır */}
            <Route index element={<Home/>}/>
            {/* Absolute Path Kullanımı */}
            {/* <Route path="/brands" element={<Brands />} /> // bu şekilde bırakırsam bana şu hatayı verecektir=> Absolute route path "/products" nested under path "/stock/" is not valid. An absolute child route path must start with the combined path of all its parent routes. */}
            <Route path="brands" element={<Brands/>}/>
            {/* <Route path="/stock/brands" element={<Brands/>}/> bu, Absolute path, diğer yazış şekli relative path oluyor */}
            <Route path="products" element={<Products/>}/>
            <Route path="firms" element={<Firms/>}/>
            <Route path="purchases" element={<Purchases/>}/>
            <Route path="sales" element={<Sales/>}/>
          </Route>

        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

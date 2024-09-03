import Navbar from "./componets/Navbar/Navbar";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./componets/Footer/Footer";
import men_banner from  './componets/data/banner_mens.png'
import women_banner from './componets/data/banner_women.png'
import kid_banner from './componets/data/banner_kids.png'


function Success() {
  return (
      <div>
          <h1>Payment Successful!</h1>
          <p>Thank you for your purchase.</p>
      </div>
  );
}

function Cancel() {
  return (
      <div>
          <h1>Payment Cancelled</h1>
          <p>Your payment was not processed.</p>
      </div>
  );
}





function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<ShopCategory banner = {men_banner}  category="men"/>}/>
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />}/>
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>  
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/cancel" element={<Cancel/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <main>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <Outlet context={{ cartItems, setCartItems }} />
    </main>
  );
};

export default App;

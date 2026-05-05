import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";

const Navbar = ({ cartItems, setCartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className=" bg-[#ffffff] h-11 mt-3 rounded-[8px] inset-shadow-xs shadow-sm mx-5  ">
        <nav className="h-full">
          <ul className="flex h-full items-center p-2">
            <div className=" w-full flex justify-center text-[0.95rem]">
              <Link
                className="hover:bg-gray-200 rounded-[50px] px-3 py-2 "
                to="/"
              >
                Home
              </Link>
              <Link
                className="hover:bg-gray-200 rounded-[50px] px-3 py-2 "
                to="/products"
              >
                Products
              </Link>
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="ml-auto cursor-pointer hover:bg-gray-200  w-10 h-9 flex justify-center items-center rounded-full"
            >
              {cartItems.length} <ShoppingCart size={20} />
            </button>
          </ul>
        </nav>
        {isCartOpen && (
          <Cart
            cartItems={cartItems}
            setIsCartOpen={setIsCartOpen}
            setCartItems={setCartItems}
          />
        )}
      </header>
    </>
  );
};

export default Navbar;

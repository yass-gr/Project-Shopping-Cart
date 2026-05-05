import React from "react";

const Cart = ({ cartItems, setIsCartOpen, setCartItems }) => {
  const handleDelClick = (id) => {
    setCartItems((items) => {
      return items.filter((i) => i.item.id !== id);
    });
  };
  return (
    <div className="fixed h-dvh bg-[#f0eee9] top-0 left-0 w-full">
      <button
        className="w-12 font-bold p-2 text-2xl hover:bg-gray-300 rounded-full "
        onClick={() => setIsCartOpen(false)}
      >
        X
      </button>
      <h1 className="text-center py-10 text-3xl font-bold text-teal-800">
        Cart
      </h1>
      <div>
        {cartItems.map((p) => {
          const id = crypto.randomUUID();
          return (
            <div
              key={id}
              className="grid grid-cols-10  mb-5 h-20 bg-white mx-10 py-3 place-items-center  rounded-lg hover:bg-gray-100  gap-3"
            >
              <h1 className="col-span-1 font-bold text-2xl">x {p.count}</h1>
              <img
                src={p.item.image}
                alt=""
                className="col-span-1 object-cover  max-w-10"
              />
              <h4 className="col-span-4">{p.item.title}</h4>
              <p className="text-teal-600">{p.item.price} $</p>
              <button
                onClick={() => handleDelClick(p.item.id)}
                className="col-span-3 bg-red-600  px-3 py-1 rounded-lg hover:bg-red-900"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;

import useProductData from "@/hooks/useProductData";
import { useOutletContext } from "react-router-dom";

const Products = () => {
  const { cartItems, setCartItems } = useOutletContext();
  const handlePlusClick = (e) => {
    const input = e.target.parentElement.querySelector("input");
    input.value = Number(input.value) + 1;
  };
  const handleMinusClick = (e) => {
    const input = e.target.parentElement.querySelector("input");

    input.value = Number(input.value) - 1 <= 1 ? 1 : Number(input.value) - 1;
  };

  const handleAddToCart = (e, p) => {
    const itemsCount = Number(
      e.target.parentElement.querySelector("input").value,
    );
    let foundId = null;
    cartItems.forEach((i, idx) => {
      if (p.id === i.item.id) {
        foundId = idx;
        return;
      }
    });
    if (foundId === null) {
      setCartItems((items) => [...items, { item: p, count: itemsCount }]);
      return;
    }

    setCartItems((items) => {
      items[foundId] = {
        ...items[foundId],
        count: itemsCount,
      };
      return items;
    });
  };

  const { data, loading, error } = useProductData();

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>ERROR</h1>;

  return (
    <>
      <h1 className="text-center text-3xl font-bold my-5">Products</h1>
      <section className=" mx-5 grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {data.map((p, i) => {
          return (
            <article
              key={i}
              className="rounded-[10px] bg-[#ffffff] flex items-center flex-col justify-between"
            >
              <div className="w-4/5 h-60 flex items-center justify-center min-w-0 ">
                <img
                  className=" aspect-square   h-auto min-w-0  max-w-50"
                  src={p.image}
                  alt=""
                />
              </div>
              <div className="px-3 py-2 w-full">
                <p className="text-sm text-teal-700">{p.category}</p>
                <h3>{p.title}</h3>
                <p className="text-teal-700 font-bold">{p.price} $</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="grid grid-cols-5 w-full gap-1"
                >
                  <input
                    type="number"
                    defaultValue={1}
                    placeholder="Number"
                    className="border border-gray-200 rounded-[5px] text-sm pl-2 h-8 mt-2 col-span-3 "
                  />
                  <button
                    className=" bg-teal-600 text-white rounded-[5px] text-lg h-8 mt-2 hover:bg-teal-900 cursor-pointer "
                    type="button"
                    onClick={(e) => handlePlusClick(e)}
                  >
                    +
                  </button>
                  <button
                    className="cursor-pointer bg-teal-600 text-white rounded-[5px]  h-8 mt-2 flex items-center justify-center text-2xl hover:bg-teal-900 cursor-pointer"
                    type="button"
                    onClick={(e) => handleMinusClick(e)}
                  >
                    -
                  </button>
                  <button
                    onClick={(e) => handleAddToCart(e, p)}
                    className="col-span-5 cursor-pointer text-lg bg-teal-700 text-white rounded-[5px]  h-8 mt-2 flex items-center justify-center hover:bg-teal-900 "
                  >
                    Add to cart
                  </button>
                </form>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Products;

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="mx-10">
      <h1 className="mt-40 text-7xl font-extrabold text-taupe-900">
        Shop what <br /> you <span className="text-teal-600">love.</span>
      </h1>
      <p className="mt-10">
        Discover thousands of curated products — from everyday essentials to
        rare finds — delivered to your door.
      </p>

      <Link className="h-full w-full" to="/products">
        <button className="border-teal-600 border rounded-[5px] px-10 py-1 mt-3 w-full h-13 text-teal-800 hover:bg-teal-600 hover:text-white">
          Products
        </button>
      </Link>
    </section>
  );
};

export default Home;

import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const CookieForm = () => {
  const [nuts, setNuts] = useState("");
  const [sugar, setSugar] = useState("");
  const [flour, setFlour] = useState("");
  const [oil, setOil] = useState("");
  const [sweet_baking_soda, setSweet_baking_Soda] = useState("");
  const [submit, setSubmit] = useState(false);
  const [chocolate, setChocolate] = useState("");

  let squareCount = Math.min(Math.floor(flour / 15), Math.floor(sugar / 3));
  let circularCount = Math.min(Math.floor(flour / 10), Math.floor(sugar / 3));
  let triangularCount = Math.min(Math.floor(flour / 10), Math.floor(sugar / 7));
  let starCount = Math.min(Math.floor(flour / 10), Math.floor(sugar / 7));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (flour && sugar) {
      alert("Prepared");
      setSubmit(true);
    }

    //setSubmit(true);
  };
  return (
    <>
      <Header />
      <div className="mt-6 text-center">
        <Link to="/Home" className="bg-blue-600 text-white p-2 rounded-full">
          Go Back
        </Link>
      </div>
      <h2 className="text-center text-4xl mt-2 font-semibold">
        Custom Cookies
      </h2>
      <form
        className="max-w-sm mx-auto mt-5 bg-blue-500 p-6 rounded-lg"
        onSubmit={handleSubmit}
      >
        {/* Input fields */}
        {/* Nuts */}
        <div className="mb-4">
          <label htmlFor="nuts" className="block mb-2 text-white font-semibold">
            Enter amount of Nuts(in g)
          </label>
          <input
            type="number"
            id="nuts"
            className="input-field w-full"
            name="nuts"
            min="0"
            onChange={(e) => setNuts(e.target.value)}
          />
        </div>
        {/* Sugar */}
        <div className="mb-4">
          <label
            htmlFor="sugar"
            className="block mb-2 text-white font-semibold"
          >
            Enter amount of Sugar(in g)
          </label>
          <input
            type="number"
            id="sugar"
            className="input-field w-full"
            name="sugar"
            min="7"
            placeholder={`min value 7`}
            value={sugar}
            onChange={(e) => setSugar(e.target.value)}
          />
        </div>

        {/* Flour */}
        <div className="mb-4">
          <label
            htmlFor="flour"
            className="block mb-2 text-white font-semibold"
          >
            Enter amount of Flour(in g)
          </label>
          <input
            type="number"
            id="flour"
            className="input-field w-full"
            name="flour"
            min="10"
            placeholder={`min value 10`}
            value={flour}
            onChange={(e) => setFlour(e.target.value)}
          />
        </div>

        {/* Oil */}
        <div className="mb-4">
          <label htmlFor="oil" className="block mb-2 text-white font-semibold">
            Enter amount of Oil(in g)
          </label>
          <input
            type="number"
            id="oil"
            className="input-field w-full"
            name="oil"
            min="0"
            value={oil}
            onChange={(e) => setOil(e.target.value)}
          />
        </div>

        {/* Sweet Baking Soda */}
        <div className="mb-4">
          <label
            htmlFor="sweet_baking_soda"
            className="block mb-2 text-white font-semibold"
          >
            Enter amount of Sweet Baking Soda(in g)
          </label>
          <input
            type="number"
            id="sweet_baking_soda"
            className="input-field w-full"
            name="sweet_baking_soda"
            min="0"
            value={sweet_baking_soda}
            onChange={(e) => setSweet_baking_Soda(e.target.value)}
          />

          {/* Chocolate */}
        </div>
        <div className="mb-4">
          <label
            htmlFor="chocolate"
            className="block mb-2 text-white font-semibold"
          >
            Enter amount of Chocolate(in g)
          </label>
          <input
            type="number"
            id="chocolate"
            className="input-field w-full"
            name="chocolate"
            min="0"
            value={chocolate}
            onChange={(e) => setChocolate(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 mt-2 rounded-full w-full"
        >
          Submit
        </button>
      </form>

      {submit && (
        <div className="mt-6 bg-blue-600 text-white p-2 w-48 max-w-sm mx-auto">
          {oil == 0 && <h1>Square Biscuits: {squareCount}</h1>}
          {sweet_baking_soda == 0 && (
            <h1>Circular Biscuits: {circularCount}</h1>
          )}
          {chocolate == 0 && <h1>Triangular Biscuits: {triangularCount}</h1>}
          {nuts == 0 && <h1>Star Biscuits: {starCount}</h1>}
        </div>
      )}
    </>
  );
};
export default CookieForm;

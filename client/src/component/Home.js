import React, { useEffect, useState } from "react";
import axios from "axios";
import RenderData from "./RenderData";
import Header from "./Header";
import { Link } from "react-router-dom";
function Home() {
  const [inventory, setInventory] = useState("");
  const [cookies, setCookies] = useState("");
  const [updateFormData, setUpdateFormData] = useState({
    ingredient: "",
    quantity: "",
  });
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateFormData({
      ...updateFormData,
      [name]: value,
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3001/inven/ingredients/${updateFormData.ingredient}`,
        {
          quantity: updateFormData.quantity,
        }
      );
      alert(`Quantity of ${updateFormData.ingredient} updated successfully`);
      // Refresh inventory data after update
      getData();
      setShowUpdateForm(false);
      setUpdateFormData({ ingredient: "", quantity: "" });
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred.");
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/inven/ingredients"
      );
      const postData = response.data[0];
      setInventory(postData);
    } catch (error) {
      console.log(error);
    }
  };

  const getCookies = async () => {
    try {
      const response = await axios.get("http://localhost:3001/cookie");
      const cookieData = response.data;
      setCookies(cookieData);
      console.log(cookies);
    } catch (error) {
      console.error("Error fetching cookies:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [inventory]);

  return (
    <>
      <Header />
      {inventory && (
        <div className=" mt-40 p-2 mr-3 text-black-400 border w-60 text-center bg-sky-200 float-right rounded-lg ">
          <p className="font-bold">Inventory</p>
          <p>Nuts: {inventory.nuts}</p>
          <p>Sweet Baking Soda: {inventory.sweet_baking_soda}</p>
          <p>Oil: {inventory.oil}</p>
          <p>Sugar: {inventory.sugar}</p>
          <p>Chocolate: {inventory.chocolate}</p>
          <p>Flour: {inventory.flour}</p>
          <button
            onClick={() => setShowUpdateForm(!showUpdateForm)}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
          >
            Update Inventory
          </button>
        </div>
      )}
      {showUpdateForm && (
        <form
          onSubmit={handleUpdateSubmit}
          className="max-w-md mx-auto mb-6 p-2 bg-gray-100 rounded-lg shadow-md"
        >
          <div className="mb-1">
            <label htmlFor="ingredient" className="block text-gray-700">
              Ingredient:
            </label>
            <input
              type="text"
              id="ingredient"
              name="ingredient"
              value={updateFormData.ingredient}
              onChange={handleUpdateChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="quantity" className="block text-gray-700">
              Quantity:
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={updateFormData.quantity}
              onChange={handleUpdateChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md focus:outline-none focus:bg-blue-700"
          >
            Update Quantity
          </button>
        </form>
      )}
      <div className="flex justify-center ">
        <button
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
          onClick={getCookies}
        >
          cookies
        </button>
        <Link
        to="/Cookie"
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full inline-block"
      >
        Customised Cookies
      </Link>
      </div>
      {cookies !== "" && <RenderData cookies={cookies} />}
    </>
  );
}

export default Home;

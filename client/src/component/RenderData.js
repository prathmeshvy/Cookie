import React, { useState, useEffect } from "react";
import axios from "axios";

const RenderData = ({ cookies }) => {
  const [flag, setFlag] = useState(true);
  const [inventory, setInventory] = useState("");
  useEffect(() => {
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
    getData();
  }, [inventory]);
  const [formData, setFormData] = useState({
    nuts: "",
    sweet_baking_soda: "",
    oil: "",
    sugar: "",
    chocolate: "",
    flour: "",
    shape: "Triangular",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Allow only numeric values for specified fields
    if (
      [
        "nuts",
        "sweet_baking_soda",
        "oil",
        "sugar",
        "chocolate",
        "flour",
      ].includes(name)
    ) {
      // Check if the value is numeric
      if (
        value === "" ||
        (Number.isInteger(Number(value)) &&
          Number(value) >= 0 &&
          !value.includes(".") &&
          parseInt(value) <= inventory[name])
      ) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      // For other fields, accept any value
      setFormData({
        ...formData,
        nuts: "",
        sweet_baking_soda: "",
        oil: "",
        sugar: "",
        chocolate: "",
        flour: "",
        [name]: value,
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.shape === "Triangular") {
      const { nuts, sweet_baking_soda, flour, sugar, oil, shape } = formData;

      // Required quantities per biscuit
      const requiredNutsPerBiscuit = 10;
      const requiredSweetBakingSodaPerBiscuit = 15;
      const requiredFlourPerBiscuit = 10;
      const requiredSugarPerBiscuit = 7;
      const requiredOilPerBiscuit = 10;

      // Calculate the maximum number of biscuits based on the minimum ingredient availability
      const maxBiscuitsByNuts = Math.floor(nuts / requiredNutsPerBiscuit);
      const maxBiscuitsBySweetBakingSoda = Math.floor(
        sweet_baking_soda / requiredSweetBakingSodaPerBiscuit
      );
      const maxBiscuitsByFlour = Math.floor(flour / requiredFlourPerBiscuit);
      const maxBiscuitsBySugar = Math.floor(sugar / requiredSugarPerBiscuit);
      const maxBiscuitsByOil = Math.floor(oil / requiredOilPerBiscuit);

      // Find the minimum of the maximum biscuits calculated
      const maxBiscuits = Math.min(
        maxBiscuitsByNuts,
        maxBiscuitsBySweetBakingSoda,
        maxBiscuitsByFlour,
        maxBiscuitsBySugar,
        maxBiscuitsByOil
      );

      if (maxBiscuits <= 0) {
        alert(`Insufficient ingredients to make ${shape} biscuits.`);
        return;
      }
      // console.log(maxBiscuits);

      const updatedFormData = {
        ...formData,
        nuts: maxBiscuits * requiredNutsPerBiscuit,
        sweet_baking_soda: maxBiscuits * requiredSweetBakingSodaPerBiscuit,
        flour: maxBiscuits * requiredFlourPerBiscuit,
        sugar: maxBiscuits * requiredSugarPerBiscuit,
        oil: maxBiscuits * requiredOilPerBiscuit,
      };
      try {
        await axios.post(`http://localhost:3001/shape`, {
          formData: updatedFormData,
        });
        alert(`We can make ${maxBiscuits} ${shape} Cookie...Thank You!!`);
      } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred.");
      }
    }
    if (formData.shape === "Circular") {
      // console.log(`before destruct ${formData}`);
      const { nuts, chocolate, flour, sugar, oil, shape } = formData;
      // console.log(`before updation ${formData}`);

      // Required quantities per biscuit
      const requiredNutsPerBiscuit = 10;
      const requiredChocolatePerBiscuit = 5;
      const requiredFlourPerBiscuit = 10;
      const requiredSugarPerBiscuit = 3;
      const requiredOilPerBiscuit = 10;

      // Calculate the maximum number of biscuits based on the minimum ingredient availability
      const maxBiscuitsByNuts = Math.floor(nuts / requiredNutsPerBiscuit);
      const maxBiscuitsByChocolate = Math.floor(
        chocolate / requiredChocolatePerBiscuit
      );
      const maxBiscuitsByFlour = Math.floor(flour / requiredFlourPerBiscuit);
      const maxBiscuitsBySugar = Math.floor(sugar / requiredSugarPerBiscuit);
      const maxBiscuitsByOil = Math.floor(oil / requiredOilPerBiscuit);
      // Find the minimum of the maximum biscuits calculated
      const maxBiscuits = Math.min(
        maxBiscuitsByNuts,
        maxBiscuitsByChocolate,
        maxBiscuitsByFlour,
        maxBiscuitsBySugar,
        maxBiscuitsByOil
      );

      if (maxBiscuits <= 0) {
        alert(`Insufficient ingredients to make ${shape} biscuits.`);
        return;
      }
      // console.log(maxBiscuits);

      const actualNuts = maxBiscuits * requiredNutsPerBiscuit;
      const actualChocolate = maxBiscuits * requiredChocolatePerBiscuit;
      const actualFlour = maxBiscuits * requiredFlourPerBiscuit;
      const actualSugar = maxBiscuits * requiredSugarPerBiscuit;
      const actualOil = maxBiscuits * requiredOilPerBiscuit;

      // Update the form data with the actual quantities
      const updatedFormData = {
        ...formData,
        nuts: actualNuts,
        chocolate: actualChocolate,
        flour: actualFlour,
        sugar: actualSugar,
        oil: actualOil,
      };
      // console.log(updatedFormData);
      try {
        await axios.post(`http://localhost:3001/shape`, {
          formData: updatedFormData,
        });
        alert(`We can make ${maxBiscuits} ${shape} Cookie...Thank You!!`);
      } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred.");
      }
    }
    if (formData.shape === "Square") {
      const { nuts, sweet_baking_soda, flour, sugar, chocolate, shape } =
        formData;

      const requiredNutsPerBiscuit = 10;
      const requiredSweetBakingSodaPerBiscuit = 20;
      const requiredFlourPerBiscuit = 15;
      const requiredSugarPerBiscuit = 3;
      const requiredChocolatePerBiscuit = 5;

      const maxBiscuitsByNuts = Math.floor(nuts / requiredNutsPerBiscuit);
      const maxBiscuitsBySweetBakingSoda = Math.floor(
        sweet_baking_soda / requiredSweetBakingSodaPerBiscuit
      );
      const maxBiscuitsByFlour = Math.floor(flour / requiredFlourPerBiscuit);
      const maxBiscuitsBySugar = Math.floor(sugar / requiredSugarPerBiscuit);
      const maxBiscuitsByChocolate = Math.floor(
        chocolate / requiredChocolatePerBiscuit
      );

      const maxBiscuits = Math.min(
        maxBiscuitsByNuts,
        maxBiscuitsBySweetBakingSoda,
        maxBiscuitsByFlour,
        maxBiscuitsBySugar,
        maxBiscuitsByChocolate
      );

      if (maxBiscuits <= 0) {
        alert(`Insufficient ingredients to make ${shape} biscuits.`);
        return;
      }

      const actualNuts = maxBiscuits * requiredNutsPerBiscuit;
      const actualSweetBakingSoda =
        maxBiscuits * requiredSweetBakingSodaPerBiscuit;
      const actualFlour = maxBiscuits * requiredFlourPerBiscuit;
      const actualSugar = maxBiscuits * requiredSugarPerBiscuit;
      const actualChocolate = maxBiscuits * requiredChocolatePerBiscuit;

      const updatedFormData = {
        ...formData,
        nuts: actualNuts,
        sweet_baking_soda: actualSweetBakingSoda,
        flour: actualFlour,
        sugar: actualSugar,
        chocolate: actualChocolate,
      };

      try {
        await axios.post(`http://localhost:3001/shape`, {
          formData: updatedFormData,
        });
        alert(`We can make ${maxBiscuits} ${shape} Cookies... Thank You!!`);
      } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred.");
      }
    }
    if (formData.shape === "Star") {
      const { chocolate, sweet_baking_soda, flour, sugar, oil, shape } =
        formData;

      // Required quantities per biscuit
      const requiredchocolatePerBiscuit = 10;
      const requiredSweetBakingSodaPerBiscuit = 15;
      const requiredFlourPerBiscuit = 10;
      const requiredSugarPerBiscuit = 7;
      const requiredOilPerBiscuit = 8;

      // console.log("nuts:",nuts);
      // Calculate the maximum number of biscuits based on the minimum ingredient availability
      const maxBiscuitsByChocolate = Math.floor(
        chocolate / requiredchocolatePerBiscuit
      );
      const maxBiscuitsBySweetBakingSoda = Math.floor(
        sweet_baking_soda / requiredSweetBakingSodaPerBiscuit
      );
      const maxBiscuitsByFlour = Math.floor(flour / requiredFlourPerBiscuit);
      const maxBiscuitsBySugar = Math.floor(sugar / requiredSugarPerBiscuit);
      const maxBiscuitsByOil = Math.floor(oil / requiredOilPerBiscuit);

      // Find the minimum of the maximum biscuits calculated
      const maxBiscuits = Math.min(
        maxBiscuitsByChocolate,
        maxBiscuitsBySweetBakingSoda,
        maxBiscuitsByFlour,
        maxBiscuitsBySugar,
        maxBiscuitsByOil
      );

      if (maxBiscuits <= 0) {
        alert(`Insufficient ingredients to make ${shape} biscuits.`);
        return;
      }

      // Calculate the actual quantities of ingredients based on the maximum number of biscuits
      const actualChocolate = maxBiscuits * requiredchocolatePerBiscuit;
      const actualSweetBakingSoda =
        maxBiscuits * requiredSweetBakingSodaPerBiscuit;
      const actualFlour = maxBiscuits * requiredFlourPerBiscuit;
      const actualSugar = maxBiscuits * requiredSugarPerBiscuit;
      const actualOil = maxBiscuits * requiredOilPerBiscuit;

      console.log(chocolate);
      // Update the form data with the actual quantities
      const updatedFormData = {
        ...formData,
        chocolate: actualChocolate,
        sweet_baking_soda: actualSweetBakingSoda,
        flour: actualFlour,
        sugar: actualSugar,
        oil: actualOil,
      };

      console.log(updatedFormData.chocolate);
      try {
        await axios.post(`http://localhost:3001/shape`, {
          formData: updatedFormData,
        });
        alert(`We can make ${maxBiscuits} ${shape} Cookies... Thank You!!`);
      } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred.");
      }
    }

    setFormData({
      nuts: "",
      sweet_baking_soda: "",
      oil: "",
      sugar: "",
      chocolate: "",
      flour: "",
      shape: "Triangular", // Reset shape to Triangular shape
    });
    setFlag(true);
  };
  return (
    <>
      <div className="flex flex-wrap justify-center ">
        {cookies.map((cookie) => (
          <div
            key={cookie._id}
            className="max-w-sm rounded overflow-hidden shadow-lg mr-20"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{cookie.shape}</div>
              <p className="text-sm mb-2">
                Baking Temp: {cookie.bakingTemp} °C
              </p>
              <p className="text-sm mb-2">Cost: ₹ {cookie.cost}</p>
              <p className="text-sm mb-2">Calories: {cookie.calories} kcal</p>
              <h3 className="text-sm font-semibold mt-2">
                Ingredients: in grams
              </h3>
              <li className="text-sm mb-2"> nuts: {cookie.nuts || 0}</li>
              <li className="text-sm mb-2">
                chocolate: {cookie.chocholate || 0}
              </li>
              <li className="text-sm mb-2">
                sweet_baking_soda: {cookie.sweet_baking_soda || 0}
              </li>
              <li className="text-sm mb-2">flour: {cookie.flour || 0}</li>
              <li className="text-sm mb-2"> sugar: {cookie.sugar || 0}</li>
              <li className="text-sm mb-2"> oil: {cookie.oil || 0}</li>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mr-40"
          onClick={(e) => setFlag(!flag)}
        >
          Order Now
        </button>
      </div>
      {!flag && (
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mb-6 p-2 bg-gray-100 rounded-lg shadow-md"
        >
          <div className="mb-1">
            <label htmlFor="shape" className="block text-gray-700">
              Shape of Cookies:
            </label>
            <select
              id="shape"
              name="shape"
              value={formData.shape}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Shape</option>
              <option value="Triangular">Triangular</option>
              <option value="Circular">Circular</option>
              <option value="Star">Star</option>
              <option value="Square">Square</option>
            </select>
          </div>
          {formData.shape !== "Star" && (
            <div className="mb-1">
              <label htmlFor="nuts" className="block text-gray-700">
                Nuts:(in g)
              </label>
              <input
                required
                max={inventory.nuts}
                placeholder={`max value ${inventory.nuts}`}
                type="text"
                id="nuts"
                name="nuts"
                value={formData.nuts}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
          {formData.shape !== "Circular" && (
            <div className="mb-1">
              <label
                htmlFor="sweet_baking_soda"
                className="block text-gray-700"
              >
                Sweet_baking_soda (in g)
              </label>
              <input
                required
                max={inventory.sweet_baking_soda}
                placeholder={`max value ${inventory.sweet_baking_soda}`}
                type="text"
                id="sweet_baking_soda"
                name="sweet_baking_soda"
                value={formData.sweet_baking_soda}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
          {formData.shape !== "Square" && (
            <div className="mb-1">
              <label htmlFor="oil" className="block text-gray-700">
                Oil:(in g)
              </label>
              <input
                max={inventory.oil}
                placeholder={`max value ${inventory.oil}`}
                required
                type="text"
                id="oil"
                name="oil"
                value={formData.oil}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
          <div className="mb-1">
            <label htmlFor="sugar" className="block text-gray-700">
              Sugar: (in g)
            </label>
            <input
              max={inventory.sugar}
              placeholder={`max value ${inventory.sugar}`}
              required
              type="text"
              id="sugar"
              name="sugar"
              value={formData.sugar}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          {formData.shape !== "Triangular" && (
            <div className="mb-1">
              <label htmlFor="chocolate" className="block text-gray-700">
                Chocolate:(in g)
              </label>
              <input
                max={inventory.chocolate}
                placeholder={`max value ${inventory.chocolate}`}
                required
                type="text"
                id="chocolate"
                name="chocolate"
                value={formData.chocolate}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
          <div className="mb-1">
            <label htmlFor="flour" className="block text-gray-700">
              Flour:(in g)
            </label>
            <input
              max={inventory.flour}
              placeholder={`max value ${inventory.flour}`}
              required
              type="text"
              id="flour"
              name="flour"
              value={formData.flour}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-[-0rem] py-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md focus:outline-none focus:bg-blue-700"
          >
            Buy now
          </button>
        </form>
      )}
    </>
  );
};

export default RenderData;

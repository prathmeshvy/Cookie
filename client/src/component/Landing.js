import React from "react";
import { Link } from "react-router-dom";
import BakeryImage from "../Images/Bakery.jpeg";
const Landing = () => {  
    const buttonStyle = "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full";
    return (
        <div
        className="flex flex-col items-center justify-center h-screen"
        style={{ backgroundImage: `url(${BakeryImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="bg-white bg-opacity-60 rounded-lg p-5">
          <h4 className="text-3xl mb-3">
            Satisfy your sweet cravings with our delicious cookies!
          </h4>
          <div className="flex justify-center">
          <Link to="/home">
            <button className={buttonStyle}>Welcome</button>
          </Link>
        </div>
        </div>
      </div>
  );
};

export default Landing;

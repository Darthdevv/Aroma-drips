import React, { useState } from "react";
import CoffeImage from '../assets/images/Ellipse 1.png'

const PorductsPage: React.FC = () => {
  const [size, setSize] = useState("Medium");
  const [addOns, setAddOns] = useState<{ [key: string]: boolean }>({
    Milk: false,
    "Baby Spinach": false,
    Masroom: false,
  });
  const [quantity, setQuantity] = useState(1);
  const basePrice = 20.5;
  const addOnPrices: { [key: string]: number } = {
    Milk: 20,
    "Baby Spinach": 20,
    Masroom: 20,
  };

  const handleSizeChange = (size: string) => setSize(size);

  const handleAddOnToggle = (addOn: string) => {
    setAddOns((prevAddOns) => ({
      ...prevAddOns,
      [addOn]: !prevAddOns[addOn],
    }));
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  const calculateTotal = () => {
    const addOnTotal = Object.keys(addOns).reduce((sum, addOn) => {
      return addOns[addOn] ? sum + addOnPrices[addOn] : sum;
    }, 0);
    return (basePrice + addOnTotal) * quantity;
  };

  return (
    <div className=" min-h-screen">
      {/* Header */}
      <header className="bg-background-white p-4  text-black text-lg font-bold">
        <span>&lt; Drink menu</span> / Coffee
      </header>
      <main className="w-full h-screen flex flex-col">
        {/* Sidebar */}
        {/* <aside className="w-1/4 bg-green-900 text-white p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-6">Aroma Drips Coffee</h1>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="mr-2">🏠</span>
              Home
            </li>
            <li className="flex items-center">
              <span className="mr-2">📋</span>
              Menu
            </li>
            <li className="flex items-center">
              <span className="mr-2">🛒</span>
              Cart{" "}
              <span className="ml-auto bg-orange-500 px-2 rounded-full">
                13
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📜</span>
              Order History
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <div className="flex items-center">
            <img
              src="/path/to/profile.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-bold">John Esmat</p>
              <p className="text-sm">John.gars@flairstech.com</p>
            </div>
          </div>
        </div>
      </aside> */}

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8 flex flex-col">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* Header */}
            <header className="flex items-center mb-6">
              <button className="text-orange-500 text-lg mr-4">&lt;</button>
              <h1 className="text-xl font-bold">Cappuccino</h1>
            </header>

            {/* Description */}
            <div className="mb-6">
              <img
                src={CoffeImage}
                alt="Cappuccino"
                className="w-[9.688rem] h-[9.688rem]  rounded-lg mb-4"
              />
              <p className="text-gray-700">
                Brown the beef better. Lean ground beef - I like to use 85% lean
                angus. Garlic - use fresh. Chopped. Spices - chili powder,
                cumin, onion powder.
              </p>
            </div>

            {/* Choice of Size */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">Choice of Size</h2>
              <div className="flex space-x-4">
                {[
                  { label: "Small", value: "Small" },
                  { label: "Medium", value: "Medium" },
                  { label: "Large", value: "Large" },
                ].map(({ label, value }) => (
                  <button
                    key={value}
                    onClick={() => handleSizeChange(value)}
                    className={`px-4 py-2 rounded-md border ${
                      size === value
                        ? "bg-orange-500 text-white"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Choice of Add-ons */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">Choice of Add-On</h2>
              {Object.keys(addOns).map((addOn) => (
                <label
                  key={addOn}
                  className="flex items-center justify-between p-2 border rounded-md mb-2 cursor-pointer"
                >
                  <span>{addOn}</span>
                  <span className="text-orange-500">
                    +{addOnPrices[addOn]} LE
                  </span>
                  <input
                    type="checkbox"
                    checked={addOns[addOn]}
                    onChange={() => handleAddOnToggle(addOn)}
                    className="ml-2"
                  />
                </label>
              ))}
            </div>

            {/* Price and Quantity */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-lg font-bold">
                {calculateTotal().toFixed(2)} LE
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-1 bg-gray-300 rounded-md"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-1 bg-gray-300 rounded-md"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full py-3 bg-orange-500 text-white rounded-md font-bold">
              Add to cart
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full bg-green-900 rounded-[50px] text-white p-3 flex items-center justify-between ">
          <div>
            <p>Quantity 02 Items / Total: 35 LE</p>
          </div>
          <button className="bg-white text-green-900  rounded-md font-bold">
            Cart →
          </button>
        </footer>
      </main>
    </div>
  );
};

export default PorductsPage;

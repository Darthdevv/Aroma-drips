import React from "react";

/**
 * Represents a single coffee item in the coffee menu.
 * @typedef {Object} CoffeeItem
 * @property {number} id - Unique identifier for the coffee item.
 * @property {string} name - Name of the coffee item.
 * @property {string} price - Price of the coffee item.
 * @property {string} imageUrl - URL of the coffee item's image.
 */
interface CoffeeItem {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

/**
 * Array of coffee items to be displayed in the menu.
 * @type {CoffeeItem[]}
 */
const coffeeItems: CoffeeItem[] = [
  {
    id: 1,
    name: "Ristretto",
    price: "20.00 LE",
    imageUrl: "Ellipse 1.png",
  },
  {
    id: 2,
    name: "Espresso Single",
    price: "25.00 LE",
    imageUrl: "Ellipse 2.png",
  },
  {
    id: 3,
    name: "Americano",
    price: "30.00 LE",
    imageUrl: "Ellipse 3.png",
  },
  {
    id: 4,
    name: "French Press",
    price: "35.00 LE",
    imageUrl: "Ellipse 4.png",
  },
  {
    id: 5,
    name: "Macchiato",
    price: "25.00 LE",
    imageUrl: "Ellipse 5.png",
  },
  {
    id: 6,
    name: "Cortado",
    price: "28.00 LE",
    imageUrl: "Ellipse 6.png",
  },
  {
    id: 7,
    name: "Flat White",
    price: "30.00 LE",
    imageUrl: "Ellipse 7.png",
  },
  {
    id: 8,
    name: "Cappuccino",
    price: "30.00 LE",
    imageUrl: "Ellipse 8.png",
  },
  {
    id: 9,
    name: "Classic Latte",
    price: "32.00 LE",
    imageUrl: "Ellipse 9.png",
  },
  {
    id: 10,
    name: "Spanish Latte",
    price: "35.00 LE",
    imageUrl: "Ellipse 10.png",
  },
  {
    id: 11,
    name: "Mocha",
    price: "30.00 LE",
    imageUrl: "Ellipse 11.png"
  },
  {
    id: 12,
    name: "Espresso Double",
    price: "35.00 LE",
    imageUrl: "Ellipse 12.png",
  },
  {
    id: 13,
    name: "Matcha Latte",
    price: "40.00 LE",
    imageUrl: "Ellipse 13.png",
  },
  {
    id: 14,
    name: "White Mocha",
    price: "38.00 LE",
    imageUrl: "Ellipse 14.png",
  },
];

/**
 * The CategoriesPage component renders a coffee menu with categories and a responsive layout.
 * @component
 * @returns {JSX.Element} The rendered CategoriesPage component.
 */
const CategoriesPage: React.FC = () => {
  return (
    <div className="bg-background-gray text-black min-h-screen">
      {/* Header */}
      <header className="bg-background-white p-4 mb-6 text-black text-lg font-bold">
        <span>&lt; Drink menu</span> / Coffee
      </header>

      <main className="flex flex-col lg:flex-row text-center">
        {/* Sidebar */}
        {/* <div className="lg:w-1/4 bg-gray-800 p-6 hidden lg:block">
          <div className="mb-8">
            <img
              src="/path/to/logo.png"
              alt="Aroma Drops Coffee"
              className="w-32 mx-auto"
            />
          </div>
          <ul className="space-y-4 text-center">
            <li className="text-gray-400 hover:text-white">Menu</li>
            <li className="text-gray-400 hover:text-white">Cart</li>
            <li className="text-gray-400 hover:text-white">Order History</li>
          </ul>
          <div className="absolute bottom-10 left-6 flex items-center space-x-4">
            <img
              src="/path/to/user-avatar.jpg"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm">John Esmat</p>
            </div>
          </div>
        </div> */}

        {/* Main Content */}
        <div className="flex-grow px-4 py-14">
          {/* Coffee Grid */}
          <div className="bg-background-gray grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-8 place-items-center">
            {coffeeItems.map((item) => (
              <div
                key={item.id}
                className="bg-background-white mb-16 flex flex-col items-center justify-end w-[14.75rem] h-[15.875rem] px-4 pb-16 rounded-t-[90px] rounded-b-3xl shadow-lg hover:shadow-xl relative"
              >
                <img
                  loading="lazy"
                  src={"../../src/assets/images/" + item.imageUrl}
                  alt={`Image of ${item.name}`}
                  className="w-[9.688rem] h-[9.688rem] mx-auto rounded-md mb-4 absolute bottom-32 left-0 right-0"
                />
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-accent-orange font-bold">{item.price}</p>
                <button
                  aria-label={`More details about ${item.name}`}
                  className="absolute bottom-0 right-0 w-10 h-10 bg-accent-orange rounded-ss-3xl rounded-ee-3xl flex items-center justify-center shadow-lg hover:bg-accent-orange transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CategoriesPage;






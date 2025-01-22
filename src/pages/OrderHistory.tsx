import React, { useState } from "react";
import OrderCard from "@/pages/OrderCard";

/**
 * Represents an order item.
 * @typedef {Object} OrderItem
 * @property {string} name - The name of the item.
 * @property {string} description - A description of the item.
 * @property {number} price - The price of the item.
 */

/**
 * Represents an order.
 * @typedef {Object} Order
 * @property {string} id - The unique identifier for the order.
 * @property {string} date - The date and time of the order.
 * @property {OrderItem[]} items - The list of items in the order.
 * @property {number} total - The total cost of the order.
 * @property {string} status - The current status of the order.
 */

/**
 * OrderHistory component displays the list of orders with tabs to filter between
 * upcoming and past order history.
 *
 * @component
 * @example
 * return (
 *   <OrderHistory />
 * )
 */
const OrderHistory: React.FC = () => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState<"upcoming" | "history">(
        "upcoming"
    );

    // Example order data
    const orders = [
        {
            id: "1234567678688",
            date: "20 December, 2025 - 2:00 PM",
            items: [
                {
                    name: "Item 1",
                    description: "Skimmed Milk | Without Sugar",
                    price: 125,
                },
                {
                    name: "Item 2",
                    description: "Skimmed Milk | Without Sugar",
                    price: 125,
                },
                {
                    name: "Item 3",
                    description: "Skimmed Milk | Without Sugar",
                    price: 125,
                },
            ],
            total: 375,
            status: "Pending",
        },
        {
            id: "1234567678689",
            date: "20 December, 2025 - 2:00 PM",
            items: [
                {
                    name: "Item 1",
                    description: "Skimmed Milk | Without Sugar",
                    price: 125,
                },
                {
                    name: "Item 2",
                    description: "Skimmed Milk | Without Sugar",
                    price: 125,
                },
                {
                    name: "Item 3",
                    description: "Skimmed Milk | Without Sugar",
                    price: 125,
                },
            ],
            total: 375,
            status: "Pending",
        },
    ];

    return (
        <div>
            {/* Page Header */}
            <header className="bg-background-white h-[6.625rem] w-full flex items-center justify-start p-4  text-black text-lg font-bold">
                <span>&lt; Order history</span>
            </header>

            {/* Tabs to switch between Upcoming and History */}
            <nav className="px-8 mt-6">
                <div className="w-[336px] h-[55px] flex space-x-2 bg-gray-100 border-2 border-background-white rounded-full p-0.5">
                    <button
                        onClick={() => setActiveTab("upcoming")}
                        className={`w-1/2 py-2 text-center rounded-full transition ${activeTab === "upcoming"
                                ? "bg-orange-500 text-white font-semibold"
                                : "bg-transparent text-black"
                            }`}
                    >
                        Upcoming
                    </button>
                    <button
                        onClick={() => setActiveTab("history")}
                        className={`w-1/2 py-2 text-center rounded-full transition ${activeTab === "history"
                                ? "bg-orange-500 text-white font-semibold"
                                : "bg-transparent text-black"
                            }`}
                    >
                        History
                    </button>
                </div>
            </nav>

            {/* Order cards rendered based on the active tab */}
            <section className="space-y-[16px] px-8 py-6">
                {orders.map((order) => (
                    <OrderCard key={order.id} order={order} />
                ))}
            </section>
        </div>
    );
};

export default OrderHistory;

import React, { useState } from "react";
import OrderCard from "@/pages/OrderCard";
import SearchFilter from "./SearchFilter";
import ChevronLeftIcon from "@/assets/icons/ChevronLeft";

/**
 * Represents an order item.
 * @typedef {Object} OrderItem
 * @property {string} name - The name of the item.
 * @property {string} description - A description of the item.
 * @property {number} price - The price of the item.
 */
interface OrderItem {
    name: string;
    description: string;
    price: number;
}

/**
 * Represents an order.
 * @typedef {Object} Order
 * @property {string} id - The unique identifier for the order.
 * @property {string} date - The date and time of the order.
 * @property {OrderItem[]} items - The list of items in the order.
 * @property {number} total - The total cost of the order.
 * @property {string} status - The current status of the order.
 * @property {number} [subtotal] - The subtotal amount before taxes and discounts (optional).
 * @property {number} [tax] - The tax amount applied to the order (optional).
 * @property {number} [promo] - The promotional discount applied to the order (optional).
 */
interface Order {
    id: string;
    date: string;
    items: OrderItem[];
    total: number;
    status: "Pending" | "Cancelled" | "Delivered";
    subtotal?: number;
    tax?: number;
    promo?: number;
}

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
    const [activeTab, setActiveTab] = useState<"upcoming" | "history">("upcoming");


    // Example order data
    const upcomingOrders: Order[] = [
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

    const historyOrders: Order[] = [
        {
            id: "9876543210123",
            date: "15 December, 2025 - 5:00 PM",
            items: [
                { name: "Item A", description: "Full Cream Milk | With Sugar", price: 150 },
                { name: "Item B", description: "Almond Milk | With Honey", price: 200 },
                { name: "Item C", description: "Soy Milk | Without Sugar", price: 175 },
            ],
            subtotal: 150 + 200 + 175, // 525
            tax: 525 * 0.05, // 5% tax = 26.25
            promo: 50, // Flat discount
            total: 525 + 26.25 - 50, // 501.25
            status: "Delivered",
        },
        {
            id: "9876543210456",
            date: "10 December, 2025 - 1:00 PM",
            items: [
                { name: "Item X", description: "Low Fat Milk | Without Sugar", price: 100 },
                { name: "Item Y", description: "Skimmed Milk | With Sugar", price: 125 },
                { name: "Item Z", description: "Coconut Milk | With Sugar", price: 150 },
            ],
            subtotal: 100 + 125 + 150, // 375
            tax: 375 * 0.05, // 5% tax = 18.75
            promo: 50, // Flat discount
            total: 375 + 18.75 - 50, // 343.75
            status: "Cancelled",
        },
    ];


    return (
        <section className="bg-background-grey dark:bg-background-navy min-h-screen">
            {/* Page Header */}
            <header className="bg-background-white dark:bg-background-navygrey h-[6.625rem] w-full flex items-center justify-start p-4 text-text-blackish dark:text-text-whitish text-lg font-semibold">
                <span className="flex items-center justify-center gap-3 px-6">
                    <ChevronLeftIcon />
                    <span className="text-2xl">Order History</span>
                </span>
            </header>

            {/* Tabs to switch between Upcoming and History */}
            {activeTab === "upcoming" ? (
                <nav className="px-8 mt-6">
                    <div className="w-[336px] h-[55px] flex space-x-2 bg-background-gray dark:bg-background-navy border-2 border-background-white dark:border-[#2E3439]  rounded-full p-0.5">
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
                            className={`w-1/2 py-2 text-center rounded-full transition text-text-blackish dark:text-text-whitish`}
                        >
                            History
                        </button>
                    </div>
                </nav>
            ) : (
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <nav className="px-8 mt-6 self-start">
                        <div className="w-[336px] h-[55px] flex space-x-2 bg-background-gray dark:bg-background-navy border-2 border-background-white dark:border-[#2E3439] rounded-full p-0.5">
                            <button
                                onClick={() => setActiveTab("upcoming")}
                                className={`w-1/2 py-2 text-center rounded-full transition text-text-blackish dark:text-text-whitish`}
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
                    <SearchFilter />
                </div>
            )}

            {/* Order cards rendered based on the active tab */}
            {activeTab === "upcoming" && (
                <section className="space-y-[16px] px-8 py-6">
                    {upcomingOrders.map((order) => (
                        <OrderCard key={order.id} order={order} tab={activeTab} />
                    ))}
                </section>
            )}

            {activeTab === "history" && (
                <section className="space-y-[16px] px-8 py-6">
                    {historyOrders.map((order) => (
                        <OrderCard key={order.id} order={order} tab={activeTab} />
                    ))}
                </section>
            )}
        </section>
    );
};

export default OrderHistory;

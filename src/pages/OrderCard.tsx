import React, { useState } from "react";
import OrderImage from "@/assets/images/Order 1.png"
import ArrowDownIcon from "@/assets/icons/ArrowDown";
import ArrowUpIcon from "@/assets/icons/ArrowUp";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Represents an order item.
 * @typedef {Object} OrderItem
 * @property {string} name - The name of the item.
 * @property {string} description - A description of the item.
 * @property {number} price - The price of the item.
 */
type OrderItem = {
  name: string;
  description: string;
  price: number;
};

/**
 * Represents an order.
 * @typedef {Object} Order
 * @property {string} id - The unique identifier for the order.
 * @property {string} date - The date and time of the order.
 * @property {OrderItem[]} items - The list of items in the order.
 * @property {number} total - The total cost of the order.
 * @property {string} status - The current status of the order.
 */
type Order = {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: string;
};

/**
 * OrderCard component displays the details of a single order.
 *
 * @component
 * @param {Object} props
 * @param {Order} props.order - The order details to display.
 * @returns {JSX.Element} The rendered component.
 * @example
 * const order = {
 *   id: "123456",
 *   date: "20 December, 2025 - 2:00 PM",
 *   items: [
 *     { name: "Item 1", description: "Skimmed Milk | Without Sugar", price: 125 },
 *   ],
 *   total: 375,
 *   status: "Pending"
 * };
 * return <OrderCard order={order} />;
 */
const OrderCard: React.FC<{ order: Order }> = ({ order }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="bg-white shadow rounded-[20px] p-8">
      {/* Order Header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center"
      >
        <div className="flex items-start justify-center gap-4">
          <div className="mb-2 lg:mb-0">
            <p className="font-bold">Order ID: #{order.id}</p>
            <p className="text-sm text-gray-500">{order.date}</p>
          </div>
          <span className="bg-accent-yellow text-accent-brown shadow-neutral-300 shadow-md font-bold text-xs px-2 py-1 rounded">
            {order.status}
          </span>
        </div>

        <div className="flex items-start justify-center gap-4">
          <p className="text-[#8E8E93] ">{order.items.length} Items</p>
          <button className="text-gray-500 focus:outline-none">
            {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </button>
        </div>
      </div>

      {/* Order Items */}
      {isExpanded && (
        <AnimatePresence>
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-4 space-y-2 bg-background-gray rounded-[10px] px-4 py-6 overflow-hidden"
            variants={{
              hidden: { opacity: 0, height: 0 },
              visible: { opacity: 1, height: "auto" },
            }}
          >
            {order.items.map((item, index) => (
              <motion.li
                key={index}
                className="flex flex-col lg:flex-row justify-between border-b border-[#dbdbdb] last:border-0 p-2"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.1, // Delay each item
                    },
                  },
                }}
              >
                <div className="flex items-center gap-4">
                  <img
                    loading="lazy"
                    src={OrderImage}
                    alt={`Image of ${item.name}`}
                    className="w-[3.125rem] h-[3.125rem]  rounded-md"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>

                <p className="mt-2 lg:mt-0 flex items-center justify-center font-light text-[#13171A]">
                  EGP {item.price}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      )}

      {/* Order Footer */}
      <div className="flex justify-end mt-4 gap-2">
        <p className="font-bold text-[#757575] ">Total</p>
        <p className="font-bold text-black">EGP {order.total}</p>
      </div>
    </section>
  );
};

export default OrderCard;

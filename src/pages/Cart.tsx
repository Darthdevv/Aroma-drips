import { useState } from "react";
import EmptyCart from "@/assets/images/EmptyCart.png";
import OrderSuccess from "@/assets/images/OrderSuccess.png";
import { motion } from "framer-motion";
import DeleteIcon from "@/assets/icons/DeleteIcon";
import ChevronLeftIcon from "@/assets/icons/ChevronLeft";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { decreaseQuantity, increaseQuantity, removeProduct } from "@/redux/cartSlice";

/**
 * @interface Product
 * @property {number} id - Unique identifier for the product.
 * @property {string} name - Name of the product.
 * @property {string} description - Short description of the product.
 * @property {number} price - Price of the product.
 * @property {number} quantity - Quantity of the product in the cart.
 * @property {string} image - Image URL of the product.
 */
// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

/**
 * @component Cart
 * @description This component displays the cart items, allows quantity adjustments,
 * removes items, applies promo codes, and calculates the total price.
 * @returns {JSX.Element} The Cart component.
 */
const Cart = (): JSX.Element => {
  const cartProducts = useSelector((state: RootState) => state.cart.cart)
  const dispatch = useDispatch()

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);


  /**
   * Removes a product from the cart.
   * @param {number} id - The ID of the product to be removed.
   */


  /**
   * Applies a promo code and updates the discount value.
   */
  const handleApplyPromo = (): void => {
    if (promoCode === "DISCOUNT10") {
      setDiscount(10.5);
    } else {
      setDiscount(0);
    }
  };

  const subtotal: number = cartProducts.reduce(
    (acc, p) => acc + Number(p.price) * p.quantity, // ✅ Convert to number
    0
  );

  const taxAndFees: number = 10.5;
  const total: number = subtotal + taxAndFees - discount;

  return (
    <section>
      {/* Page Header */}
      <header className="bg-background-white h-[6.625rem] w-full flex items-center justify-start p-4 text-black text-lg font-semibold">
        <Link to={'/?tab=home'} className="flex items-center justify-center gap-3 px-4">
          <ChevronLeftIcon />
          <span className="text-2xl">Cart</span>
        </Link>
      </header>
      <main className="flex justify-center items-center bg-gray-100 p-6">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full">
          {cartProducts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2">
              {/* Cart Items */}
              <div className="lg:col-span-8">
                <h3 className="text-lg font-semibold px-2 mb-2">
                  {cartProducts.length} Items
                </h3>
                <div className="divide-y">
                  {cartProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex justify-between items-center py-4 w-full"
                    >
                      <div className="flex items-center space-x-4 w-full">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="w-full">
                          <div className="flex items-center justify-between w-full">
                            <p className="font-semibold mb-2">{product.name}</p>
                            <button
                              onClick={() => dispatch(removeProduct(product.id))}
                              className="text-red-500 hover:text-red-700"
                            >
                              <DeleteIcon />
                            </button>
                          </div>
                          <p className="text-gray-500 text-sm">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between w-full mt-2">
                            <p className="text-orange-500 font-semibold">
                              {product.price} LE
                            </p>
                            <div className="flex items-center justify-center space-x-4">
                              <button onClick={() => dispatch(decreaseQuantity(product.id))} className="flex items-center justify-center w-[1.768rem] h-[1.768rem] aspect-square rounded-full border border-accent-orange text-accent-orange pb-4 font-bold">
                                _
                              </button>
                              <span className="text-gray-800">
                                {product.quantity}
                              </span>
                              <button onClick={() => dispatch(increaseQuantity(product.id))} className="flex items-center justify-center w-[1.768rem] h-[1.768rem] aspect-square rounded-full border border-accent-orange text-white bg-accent-orange pb-1 font-bold">
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary Section */}
              <div className="lg:col-span-4 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Promo Code"
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                  >
                    Apply
                  </button>
                </div>
                <div className="mt-4">
                  <p className="flex justify-between py-3">
                    <span>Subtotal</span>
                    <span>{subtotal.toFixed(2)} LE</span>
                  </p>
                  <p className="flex justify-between py-3">
                    <span>Tax and Fees</span>
                    <span>{taxAndFees.toFixed(2)} LE</span>
                  </p>
                  {discount > 0 && (
                    <p className="flex justify-between text-green-600 py-3">
                      <span>Promo Code</span>
                      <span>-{discount.toFixed(2)} LE</span>
                    </p>
                  )}
                  <p className="flex justify-between font-semibold mt-2">
                    <span>Total ({cartProducts.length} items)</span>
                    <span>{total.toFixed(2)} LE</span>
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center ml-auto mt-4 w-full lg:w-[12.8125rem] h-[2.6875rem] bg-accent-darkorange rounded-[1.7813rem] text-white py-2"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col items-center w-full text-center"
            >
              <img src={EmptyCart} alt="Empty Cart" className="" />
              <p className="text-2xl font-semibold mb-2">
                Your Cart feels lonely.
              </p>
              <p className="text-[#838282] text-lg">
                Your cart lives to serve. Fill it with items to make it happy.
              </p>
              <button className="my-4 bg-accent-darkorange text-white px-6 py-2 rounded-[1.75rem]">
                Continue Browsing
              </button>
            </motion.div>
          )}
        </div>
      </main>

      {/* Order Success Modal */}
      {isModalOpen && (
        <main className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#F8EDDC] p-6 rounded-lg shadow-lg w-[28.8125rem] h-[31.3125rem] text-center relative z-10">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-7 right-7 text-gray-500 hover:text-gray-700"
            >
              <DeleteIcon width={24.77} height={24.77} />
            </button>
            <img
              src={OrderSuccess}
              alt="Order Success"
              className="mx-auto mb-[15px]"
            />
            <p className="text-gray-500 text-lg font-thin">
              You placed the order successfully.You will get your Coffee within
              25 minutes. Thanks for using our services. Enjoy your Coffee :)
            </p>
            <p className="mx-auto flex items-center justify-center mt-2 font-semibold bg-white w-[355px] h-[34px] rounded-[18px]">
              Order ID: #00110022
            </p>
            <div className="flex items-center justify-center w-full mt-4 text-[#F27245] font-semibold">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2"
              >
                KEEP BROWSING
              </button>
              <span className="mx-2 border-l border-[#F27245] h-6"></span>
              <button className="px-4 py-2">ORDER HISTORY</button>
            </div>
          </div>
        </main>
      )}
    </section>
  );
};

export default Cart;

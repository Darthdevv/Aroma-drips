import { useEffect, useState } from "react";
import EmptyCart from "@/assets/images/EmptyCart.png";
import DarkEmptyCart from "@/assets/images/Dark-EmptyCart.png";
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
 * @property {string} category - Category of the product.
 */
// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   quantity: number;
//   image: string;
//   category: string;
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


  useEffect(() => {
    console.log(cartProducts)
  })

  return (
    <section className="bg-background-grey dark:bg-background-navy min-h-screen">
      {/* Page Header */}
      <header className="bg-background-white dark:bg-background-navygrey h-[6.625rem] w-full flex items-center justify-start p-4 text-text-blackish dark:text-text-whitish text-lg font-semibold">
        <Link
          to={"/home"}
          className="flex items-center justify-center gap-3 px-4 text-text-blackish dark:text-text-whitish"
        >
          <ChevronLeftIcon />
          <span className="text-2xl">Cart</span>
        </Link>
      </header>
      <main className="flex justify-center items-center bg-background-grey dark:bg-background-navy p-6">
        <div className=" p-6 rounded-xl shadow-lg w-full bg-background-white dark:bg-background-navygrey text-text-blackish dark:text-text-whitish">
          {cartProducts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2 ">
              {/* Cart Items */}
              <div className="lg:col-span-6">
                <h3 className="text-lg font-semibold px-2 mb-2">
                  {cartProducts.length} Items
                </h3>
                <div className="divide-y divide-[#E6E6E6] dark:divide-[#2E3439]">
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
                            <p className="font-medium mb-2 text-text-greyish dark:text-text-whitish">
                              {product.category}
                            </p>
                            <button
                              onClick={() =>
                                dispatch(
                                  removeProduct({
                                    id: product.id,
                                    size: product.size,
                                    addOn: product.addOn,
                                  })
                                )
                              }
                              className="text-red-500 hover:text-red-700"
                            >
                              <DeleteIcon />
                            </button>
                          </div>
                          <p className="text-bold font-bold text-2xl">
                            {product.name}
                          </p>
                          <div className="flex items-center justify-between w-full mt-2">
                            <p className="font-semibold">{product.price} LE</p>
                            <div className="flex items-center justify-center space-x-4">
                              <div className="flex items-center justify-center space-x-4">
                                <button
                                  onClick={() =>
                                    dispatch(
                                      decreaseQuantity({
                                        id: product.id,
                                        size: product.size,
                                        addOn: product.addOn,
                                      })
                                    )
                                  }
                                  className="flex items-center justify-center w-[1.768rem] h-[1.768rem] aspect-square rounded-full border border-accent-orange text-accent-orange pb-3 font-medium"
                                >
                                  _
                                </button>
                                <span className="">{product.quantity}</span>
                                <button
                                  onClick={() =>
                                    dispatch(
                                      increaseQuantity({
                                        id: product.id,
                                        size: product.size,
                                        addOn: product.addOn,
                                      })
                                    )
                                  }
                                  className="flex items-center justify-center w-[1.768rem] h-[1.768rem] aspect-square rounded-full border border-accent-orange text-white bg-accent-orange pt-0.5 font-medium"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-1 h-auto w-px mx-auto bg-[#E6E6E6] dark:bg-[#2E3439]"></div>

              {/* Summary Section */}
              <div className="lg:col-span-5 bg-background-white dark:bg-background-navygrey p-6 rounded-lg">
                <label
                  className="mx-auto my-5 relative bg-background-white dark:bg-background-navy min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border border-[#E6E6E6] dark:border-[#2E3439] py-1 px-1 rounded-lg gap-2 shadow-sm"
                  htmlFor="search-bar"
                >
                  <input
                    id="search-bar"
                    placeholder="Promo Code"
                    className="px-6 py-4 w-full font-semibold rounded-md flex-1 outline-none bg-background-white dark:bg-background-navy placeholder-text-whitish"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="w-full md:w-auto px-10 py-3 mr-2 bg-background-gray dark:bg-background-navygrey text-[#CCCCCC] dark:text-text-whitish font-bold active:scale-95 duration-100 will-change-transform overflow-hidden relative rounded-lg transition-all disabled:opacity-70"
                  >
                    <div className="relative">
                      <div className="flex items-center transition-all opacity-1 valid:">
                        <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                          Apply
                        </span>
                      </div>
                    </div>
                  </button>
                </label>
                <div className="mt-4">
                  <div className="border border-[#E6E6E6] dark:border-[#2E3439] rounded-lg p-3">
                    <p className="flex justify-between py-3 px-2">
                      <span>Subtotal</span>
                      <span>{subtotal.toFixed(2)} LE</span>
                    </p>

                    <div className=" h-px w-auto mx-auto bg-[#E6E6E6] dark:bg-[#2E3439]"></div>

                    <p className="flex justify-between py-3 px-2">
                      <span>Tax and Fees</span>
                      <span>{taxAndFees.toFixed(2)} LE</span>
                    </p>

                    <div className=" h-px w-auto mx-auto bg-[#E6E6E6] dark:bg-[#2E3439]"></div>

                    {discount > 0 && (
                      <p className="flex justify-between py-3 px-2">
                        <span>Promo Code</span>
                        <span>-{discount.toFixed(2)} LE</span>
                      </p>
                    )}

                    {discount > 0 && (
                      <div className=" h-px w-auto mx-auto bg-[#E6E6E6] dark:bg-[#2E3439]"></div>
                    )}

                    <p className="flex justify-between font-semibold mt-2 py-3 px-2">
                      <span>Total ({cartProducts.length} items)</span>
                      <span>{total.toFixed(2)} LE</span>
                    </p>
                  </div>

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
              className="flex flex-col items-center w-full text-center bg-background-white dark:bg-background-navygrey "
            >
              <picture>
                <img src={EmptyCart} alt="empty cart" className="dark:hidden" />
                <img
                  src={DarkEmptyCart}
                  alt="empty cart"
                  className="hidden dark:block"
                />
              </picture>
              <p className="text-2xl font-semibold mb-2">
                Your Cart feels lonely.
              </p>
              <p className="text-[#838282] text-lg">
                Your cart lives to serve. Fill it with items to make it happy.
              </p>
              <Link to='/' className="my-4 bg-accent-darkorange text-white px-6 py-2 rounded-[1.75rem]">
                Continue Browsing
              </Link>
            </motion.div>
          )}
        </div>
      </main>

      {/* Order Success Modal */}
      {isModalOpen && (
        <main className="fixed inset-0 flex items-center justify-center bg-[#2E3439] dark:bg-[#2E3439] dark:bg-opacity-60 bg-opacity-60">
          <div className="bg-[#F8EDDC] dark:bg-background-navy dark:text-text-whitish p-6 rounded-lg shadow-lg w-[28.8125rem] h-[31.3125rem] text-center relative z-[999]">
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
            <p className="text-text-greyish dark:text-text-whitish text-lg font-medium">
              You placed the order successfully.You will get your Coffee within
              25 minutes. Thanks for using our services. Enjoy your Coffee :)
            </p>
            <p className="mx-auto flex items-center justify-center mt-2 font-semibold bg-[#FFF3F0] dark:bg-background-navy text-text-blackish dark:text-text-whitish w-[355px] h-[34px] rounded-[18px]">
              Order ID: #00110022
            </p>
            <div className="flex items-center justify-center w-full mt-4 text-[#F27245] font-semibold">
              <Link to="/"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2"
              >
                KEEP BROWSING
              </Link>
              <span className="mx-2 border-l border-[#F27245] h-6"></span>
              <Link to="/orderHistory" className="px-4 py-2">ORDER HISTORY</Link>
            </div>
          </div>
        </main>
      )}
    </section>
  );
};

export default Cart;

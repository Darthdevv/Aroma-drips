import ArrowIconToRight from "@/assets/icons/ArrowIconToRight";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const CartNotificationBanner = () => {
    // Get cart items from Redux store
    const cart = useSelector((state: RootState) => state.cart.cart);

    // Calculate total quantity and total price
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Don't show banner if cart is empty
    if (totalQuantity === 0) {
        return null;
    }

    return (
        <div className="mx-5 h-[4.313rem] rounded-full bg-accent-green dark:bg-background-navygrey text-text-whitish">
            <div className="w-full flex justify-between items-center h-full px-8">
                <div className="flex gap-2 items-center">
                    <span className="text-[19px] font-semibold">Quantity</span>
                    <span className="text-[13px]">
                        {totalQuantity} {totalQuantity === 1 ? 'Item' : 'Items'} / Total: {totalPrice} LE
                    </span>
                </div>
                <Link
                    to={'/cart'}
                    className="w-[6.813rem] flex justify-center gap-2 items-center bg-white dark:bg-[#333333] rounded-full h-[2.813rem] text-[19px] dark:text-text-whitish text-text-blackish"
                >
                    Cart<ArrowIconToRight />
                </Link>
            </div>
        </div>
    );
}

export default CartNotificationBanner;
// import ArrowIconToRight from "@/assets/icons/ArrowIconToRight"
// import { Link } from "react-router-dom"


// const CartNotificationBanner = () => {
//     return (
//         <div className="w-[102rem] fixed bottom-15 right-4 z-50 h-[4.313rem] rounded-full bg-[#244937] text-white">
//             <div className="w-full flex justify-between items-center h-full px-8">
//                 <div>
//                     <span className="text-[19px] font-semibold">Quantity</span> <span className="text-[13px]">02 Items / Total : 35 LE</span>
//                 </div>
//                 <Link to={'/cart'} className="w-[6.813rem] flex justify-center gap-2 items-center bg-white rounded-full h-[2.813rem] text-[19px] text-black">
//                     Cart<ArrowIconToRight />
//                 </Link>
//             </div>
//         </div>
//     )
// }

// export default CartNotificationBanner
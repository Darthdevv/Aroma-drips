import { motion } from "framer-motion";
import ShareIcon from "@/assets/icons/ShareIcon";
import { MojitoItems } from "@/constants/Menu-options";
import { useNavigate } from "react-router-dom";

const MojitoProducts = () => {
    const navigate = useNavigate()
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 mx-28">
            {MojitoItems.map((item, index) => (
                <motion.div
                    key={index}
                    className="bg-white relative flex flex-col items-center w-[14.75rem] mt-20 mb-14 h-[15.875rem] rounded-t-[120px] rounded-b-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.img
                        src={item.imageUrl}
                        className="rounded-full w-[9.688rem] absolute top-[-35px]"
                        alt="image url"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                    <div className="flex flex-col justify-center items-center z-40 mt-36">
                        <div className="text-center">
                            <h1 className="text-[1.25rem] font-bold">{item.name}</h1>
                        </div>
                        <div className="text-center">
                            <h1 className="text-[1rem] text-[#ff8b43] font-bold">{item.price} LE</h1>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0">
                        <div
                            onClick={() => {
                                navigate('/?tab=product-details', { state: item })
                            }}
                            className="cursor-pointer">
                            <ShareIcon />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default MojitoProducts;

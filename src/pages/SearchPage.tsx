import { allProducts } from "@/constants/Menu-options";
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from 'framer-motion'
import ShareIcon from "@/assets/icons/ShareIcon";
import SearchComponent from "@/components/SearchComponent";

const SearchPage = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("q")?.toLowerCase() || "";


    // Filter products based on search query
    const filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    )
    return (
        <>
            <SearchComponent />
            <div className="p-4">
                {filteredProducts.length === 0 ? (
                    <p className="text-center text-gray-500">No products found matching your search.</p>
                ) : (
                    <main className="flex flex-wrap justify-center md:justify-start ml-2 gap-16 px-4 md:px-10 lg:px-20">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={index}
                                className="bg-background-white dark:bg-background-navygrey text-text-blackish dark:text-text-whitish  relative flex flex-col items-center w-[14.75rem] h-[15.875rem] rounded-t-[120px] rounded-b-2xl"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Product Image */}
                                <motion.img
                                    src={product.imageUrl}
                                    className="rounded-full w-[9.688rem] absolute top-[-35px]"
                                    alt={`${product.name} image`}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                />

                                {/* Product Details */}
                                <div className="flex flex-col justify-center items-center z-40 mt-36">
                                    <div className="text-center">
                                        <h1 className="text-[1.25rem] font-bold">{product.name}</h1>
                                    </div>
                                    <div className="text-center">
                                        <h1 className="text-[1rem] text-[#ff8b43] font-bold">{product.price} LE</h1>
                                    </div>
                                </div>

                                {/* Share Icon */}
                                <div className="absolute -bottom-[1px] -right-[1px] rounded-3xl">
                                    <div
                                        onClick={() => navigate('/product-details', { state: product })}
                                        className="cursor-pointer"
                                    >
                                        <ShareIcon />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </main>
                )

                }
            </div>
        </>
    )
}

export default SearchPage
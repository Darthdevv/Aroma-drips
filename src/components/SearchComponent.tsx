import { Search } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const SearchComponent = () => {
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            searchQuery: "",
        },
    });

    const onSubmit = (data: { searchQuery: string }) => {
        if (data.searchQuery.trim()) {
            console.log(data.searchQuery.trim());
            navigate(`/search?q=${encodeURIComponent(data.searchQuery.trim())}`)
        }
    }
    return (
        <div className="h-[6.625rem] py-5 w-full flex items-center justify-end bg-[#fff] dark:bg-background-navygrey">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative w-[40rem] flex items-center bg-[#fff] dark:bg-background-navygrey rounded-full shadow-sm"
            >
                <Search className="absolute left-4 text-text-whitish font-semibold" size={20} />
                <Controller
                    name="searchQuery"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            placeholder="Menu"
                            className="w-full md:w-[36.375rem] h-[3.625rem] pl-10 bg-background-gray dark:bg-background-navy rounded-full outline-none text-text-whitish placeholder:text-text-whitish font-semibold"
                        />
                    )}
                />
                <button type='submit' className="absolute right-1  h-[3.6rem] w-[9.75rem] bg-[#244937] text-white flex items-center justify-center rounded-full px-6 font-medium">
                    {/* <IconFilter className="mr-2" size={20} /> */}
                    Search
                </button>
            </form>
            <div className='mx-8'>
                <ThemeToggle/>
            </div>
        </div>
    )
}

export default SearchComponent


// import { Controller, useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";


// const SearchComponent = () => {
//     const navigate = useNavigate();
//     const { control, handleSubmit } = useForm({
//         defaultValues: {
//             searchQuery: "",
//         },
//     });

//     const onSubmit = (data: { searchQuery: string }) => {
//         if (data.searchQuery.trim()) {
//             console.log(data.searchQuery.trim());
//             navigate(`/search?q=${encodeURIComponent(data.searchQuery.trim())}`)
//         }
//     }
//     return (
//         <>
//             <SearchComponent />
//             <div className="h-[6.625rem] py-5 w-full flex items-center justify-center bg-[#fff] dark:bg-background-navygrey">
//                 <form
//                     onSubmit={handleSubmit(onSubmit)}
//                     className="relative w-[40rem] flex items-center bg-[#fff] dark:bg-background-navygrey rounded-full shadow-sm">
//                     {/* <IconSearch className="absolute left-4 text-text-whitish font-semibold" size={20} /> */}
//                     <Controller
//                         name="searchQuery"
//                         control={control}
//                         render={({ field }) => (
//                             <input
//                                 {...field}
//                                 type="text"
//                                 placeholder="Menu"
//                                 className="w-full md:w-[36.375rem] h-[3.625rem] pl-10 bg-background-gray dark:bg-background-navy rounded-full outline-none text-text-whitish placeholder:text-text-whitish font-semibold"
//                             />
//                         )}
//                     />
//                     <button type='submit' className="absolute right-1  h-[3.6rem] w-[9.75rem] bg-[#244937] text-white flex items-center justify-center rounded-full px-6 font-medium">
//                         {/* <IconFilter className="mr-2" size={20} /> */}
//                         Search
//                     </button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default SearchComponent
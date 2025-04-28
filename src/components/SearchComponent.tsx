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
            navigate(`/search?q=${encodeURIComponent(data.searchQuery.trim())}`);
        }
    };

    return (
        <div className="h-auto md:h-[6.625rem] py-3 md:py-5 w-full flex flex-col md:flex-row items-center justify-between bg-[#fff] dark:bg-background-navygrey px-4 gap-4 md:gap-0">
            <div className="w-full md:flex-1 flex justify-center order-2 md:order-1">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="relative w-full max-w-[40rem] flex items-center bg-[#fff] dark:bg-background-navygrey rounded-full shadow-sm"
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
                                className="w-full h-[3rem] md:h-[3.625rem] pl-10 bg-background-gray dark:bg-background-navy rounded-full outline-none text-text-whitish placeholder:text-text-whitish font-semibold text-sm md:text-base"
                            />
                        )}
                    />
                    <button
                        type="submit"
                        className="absolute right-1 h-[2.8rem] md:h-[3.6rem] w-[6rem] md:w-[9.75rem] bg-[#244937] text-white flex items-center justify-center rounded-full px-4 md:px-6 font-medium text-sm md:text-base"
                    >
                        Search
                    </button>
                </form>
            </div>

            <div className="w-full md:w-auto flex justify-end order-1 md:order-2 md:ml-4">
                <ThemeToggle />
            </div>
        </div>
    );
};

export default SearchComponent;
/**
 * SearchFilter Component
 *
 * This component provides a search input field and a dropdown filter for selecting a time range.
 *
 * Features:
 * - Search input with a placeholder and a search icon.
 * - Dropdown menu for selecting a predefined time range.
 * - Click handling for opening and closing the dropdown.
 * - State management for search term and selected filter.
 *
 * @component
 * @example
 * return (
 *   <SearchFilter />
 * )
 */
import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const SearchFilter = () => {
  /**
   * State for storing the search term.
   * @type {[string, function]}
   */
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * State for storing the selected filter.
   * @type {[string, function]}
   */
  const [selectedFilter, setSelectedFilter] = useState("Last 3 Months");

  /**
   * State for managing the dropdown open/close state.
   * @type {[boolean, function]}
   */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Available filter options.
   * @type {string[]}
   */
  const filters = ["Last 7 Days", "Last 30 Days", "Last 3 Months", "Last Year"];

  return (
    <div className="flex items-center space-x-4 p-2 bg-background-gray rounded-lg w-full pl-8 pr-8 mt-6">
      {/* Search Input */}
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-accent-darkorange"
        />
      </div>

      {/* Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-white border border-gray-100 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-accent-darkorange"
        >
          <span className="text-gray-600">{selectedFilter}</span>
          <ChevronDown className="text-gray-400" />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-sm">
            {filters.map((filter) => (
              <div
                key={filter}
                onClick={() => {
                  setSelectedFilter(filter);
                  setIsOpen(false);
                }}
                className="px-4 py-2 text-gray-700 hover:bg-accent-darkorange hover:text-white cursor-pointer rounded-md"
              >
                {filter}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;

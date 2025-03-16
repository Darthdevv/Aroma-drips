/**
 * @fileoverview SearchFilter component allows users to search and filter results
 * using predefined date ranges. Users can select multiple filters from a dropdown
 * and apply or reset them.
 *
 * @module SearchFilter
 */

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

/**
 * SearchFilter Component
 *
 * A component that provides a search input field and a dropdown with selectable filters.
 * Users can apply filters and reset selections.
 *
 * @component
 * @example
 * return (
 *   <SearchFilter />
 * )
 */
const SearchFilter = () => {
  /** @type {[string, Function]} State for the search input value */
  const [searchTerm, setSearchTerm] = useState("");

  /** @type {[string[], Function]} State for selected filters */
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  /** @type {[boolean, Function]} State for dropdown visibility */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggles the dropdown visibility.
   */
  const toggleDropdown = () => setIsOpen(!isOpen);

  /**
   * Adds or removes a filter from the selected filters list.
   *
   * @param {string} filter - The filter option to toggle.
   */
  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  /**
   * Logs the applied filters and closes the dropdown.
   */
  const applyFilters = () => {
    console.log("Applied Filters: ", selectedFilters);
    setIsOpen(false);
  };

  /**
   * Resets all selected filters.
   */
  const resetFilters = () => {
    setSelectedFilters([]);
  };

  /** @constant {string[]} filters - List of available filter options */
  const filters = ["Last 7 Days", "Last 30 Days", "Last 3 Months", "Last Year"];

  return (
    <div className="flex items-center space-x-4 p-2 bg-background-gray dark:bg-background-navy rounded-lg w-full pl-8 pr-8 mt-5">
      {/* Search Input */}
      <div className="relative flex-grow">
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-text-whitish" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="w-full pl-[53px] pr-4 py-3 bg-white dark:bg-background-navygrey text-text-whitish placeholder:text-text-whitish rounded-full focus:outline-none focus:ring-2 focus:ring-accent-darkorange"
        />
      </div>

      {/* Dropdown */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 bg-white dark:bg-background-navygrey px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-accent-darkorange text-text-greyish dark:text-text-whitish"
        >
          <span>
            {selectedFilters.length > 0
              ? selectedFilters.join(", ")
              : "Select Filter"}
          </span>
          <ChevronDown />
        </button>
        {isOpen && (
          <div className="absolute top-14 -left-14 w-52 bg-white dark:bg-background-navygrey text-text-blackish dark:text-text-whitish border border-text-whitish dark:border-[#2E3439] rounded-lg shadow-lg p-4">
            {filters.map((filter) => (
              <label
                key={filter}
                className="flex items-center space-x-2 py-1 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(filter)}
                  onChange={() => toggleFilter(filter)}
                  className="w-4 h-4 appearance-none border-2 rounded-sm checked:bg-orange-500 checked:border-orange-500 checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center checked:after:items-center checked:after:w-full checked:after:h-full"
                />
                <span>{filter}</span>
              </label>
            ))}
            <div className="flex justify-between mt-3">
              <button
                onClick={applyFilters}
                disabled={selectedFilters.length === 0}
                className={`px-5 py-2 rounded-full text-white dark:text-background-navy transition ${
                  selectedFilters.length
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-[#E7E7E7]"
                }`}
              >
                Apply
              </button>
              <button onClick={resetFilters} className="px-4 py-2 rounded-full">
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;

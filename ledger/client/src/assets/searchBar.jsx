import React, { useState, useEffect } from "react";

function SearchBar({ model, setModel, modelMain }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    // Use the debounced version of the search function
    const debouncedSearch = setTimeout(() => {
      doSearch(searchTerm);
    }, 300);

    // Cleanup function for debounced search
    return () => clearTimeout(debouncedSearch);
  }, [searchTerm]);

  const handleChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  function doSearch(query) {
    setSearchLoading(true);

    try {
      query = query.toString().toLowerCase();

      // Simulate loading time with a timeout
      setTimeout(() => {
        // Perform the search operation on the original model
        const filteredModel = modelMain.filter((item) =>
          Object.values(item).some(
            (value) => value && value.toString().toLowerCase().includes(query)
          )
        );

        setModel(filteredModel);
        setSearchLoading(false);
      }, 300); // Simulated loading time
    } catch (error) {
      console.error("An error occurred during search:", error);
      setSearchLoading(false);
    }
  }

  return (
    <div className="relative w-full">
      <input
        onChange={handleChange}
        value={searchTerm}
        placeholder="Search orders"
        className="w-full border border-gray-300 rounded min-h-[40px] max-h-[40px] mb-4 px-3 py-2 pr-10 focus:outline-none"
      />

      <div
        className={`absolute right-0 top-0 pb-4 pr-4 h-full w-12 text-gray-500 flex items-center justify-center ${
          searchLoading ? "" : "hidden"
        }`}
      >
        <i className="fa fa-spinner fa-spin"></i>
      </div>

      <div
        className={`absolute right-0 top-0 pb-4 pr-3 h-full w-12 text-gray-500 flex items-center justify-center focus:outline-none ${
          searchLoading ? "hidden" : ""
        }`}
      >
        <i className="fa fa-search"></i>
      </div>
    </div>
  );
}

export default SearchBar;

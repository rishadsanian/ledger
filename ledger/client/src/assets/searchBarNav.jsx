import React, { useState, useEffect } from "react";

function SearchBarNav() {
  const [model, setModel] = useState([
    {
      id: 1,
      orderNumber: "ORD123",
      customerName: "John Doe",
      product: "Widget A",
      status: "Pending",
    },
    {
      id: 2,
      orderNumber: "ORD124",
      customerName: "Jane Smith",
      product: "Widget B",
      status: "Shipped",
    },
    {
      id: 3,
      orderNumber: "ORD125",
      customerName: "Bob Johnson",
      product: "Widget C",
      status: "Delivered",
    },
    // Add more mock data as needed
  ]);

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
        const filteredModel = model.filter((item) =>
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
    <div className="relative w-full h-full flex items-center justify-center">
      <input
        onChange={handleChange}
        value={searchTerm}
        placeholder="Search Ledger"
        className="w-full border border-gray-700 rounded-2xl min-h-[35px] max-h-[35px] px-3 pr-12 py-2 focus:outline-none bg-gray-700 bg-opacity-30 text-white transition-colors duration-300
             focus:bg-opacity-100 focus:bg-gray-700 "
      />
      <div
        className={`absolute right-0 top-0  pr-4 h-full w-12 text-white flex items-center justify-center ${
          searchLoading ? "" : "hidden"
        }`}
      >
        <i className="fa fa-spinner fa-spin"></i>
      </div>

      <div
        className={`absolute right-0 top-0  pr-3 h-full w-12 text-white flex items-center justify-center focus:outline-none ${
          searchLoading ? "hidden" : ""
        }`}
      >
        <i className="fa fa-search"></i>
      </div>
    </div>
  );
}

export default SearchBarNav;

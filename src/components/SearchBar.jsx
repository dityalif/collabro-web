import React, { useState } from "react";
const SearchBar = ({ onTagSelect }) => {
    const [query, setQuery] = useState("");
    const [suggestions] = useState([
        "Secretary",
        "Admin 1",
        "Database engineer",
        "Frontend developer",
        "Computer Engineering",
    ]);

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    const handleSelect = (item) => {
        onTagSelect(item);
        setQuery("");
    };

    return (
        <div className="max-w-full md:max-w-sm rounded-xl bg-light">
            {/* Search Input */}
            <div className="relative flex items-center border-2 border-greenish rounded-xl">
                <span className="pl-3 text-green-500">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1586 19.0334L22.5 23.2334M11.25 6.7334C13.7353 6.7334 15.75 8.74812 15.75 11.2334M21.1 12.0334C21.1 17.4458 16.7124 21.8334 11.3 21.8334C5.88761 21.8334 1.5 17.4458 1.5 12.0334C1.5 6.62101 5.88761 2.2334 11.3 2.2334C16.7124 2.2334 21.1 6.62101 21.1 12.0334Z" stroke="#00AA5B" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                </span>
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleSearch}
                    className="w-full px-3 py-2 focus:outline-none bg-light rounded-xl"
                />
            </div>

            {/* Suggestions */}
            {query && (
                <ul className="border border-green-300 mt-2 rounded-lg shadow-lg">
                    {suggestions
                        .filter((item) =>
                            item.toLowerCase().includes(query.toLowerCase())
                        )
                        .map((item, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 hover:bg-green-100 border-b last:border-b-0 border-green-300 cursor-pointer"
                                onClick={() => handleSelect(item)}
                            >
                                {item}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;

import { useState } from "react";
import { IoMdSearch } from "react-icons/io";


const SearchBar = ({ setSearchQuery }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSearchSubmit = () => {
        setSearchQuery(searchInput);
    }

    return(
        <div className="flex items-center bg-slate-100 rounded p-2 w-full">
            <IoMdSearch className="text-gray-500 w-5 h-4"/>

            <input 
                className="bg-slate-100 grow outline-none text-xs" 
                type="search"
                placeholder="Buscar"
                value={searchInput}
                onChange={handleSearchInput}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearchSubmit()
                    }
                }}
            />
        </div>
    )
}

export default SearchBar
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
    return(
        <div className="flex items-center bg-slate-100 rounded p-2 w-full">
            <IoMdSearch className="text-gray-500 w-5 h-4"/>

            <input 
                className="grow outline-none text-xs" 
                type="search"
                placeholder="Buscar"
            />
        </div>
    )
}

export default SearchBar
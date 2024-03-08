import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom"

const Select = ({options, onCategorySelect}) => {
    return(

        <div className="m-12 flex justify-center items-center p-4 rounded-lg flex text-center bg-orange-500 font-semibold text-base text-zinc-50 md:hidden">
            <select onChange={(e) => onCategorySelect(e.target.value)} name="options" className="w-full appearance-none bg-orange-500 text-center outline-none">
                {options.map((option) => (
                    <option  key={option.name} value={option.name} className="bg-zinc-50 text-orange-500">
                        {option.name}
                    </option>
                ))}
            </select>
            <IoMdArrowDropdown className=""/>
        </div>
    )
}

export default Select
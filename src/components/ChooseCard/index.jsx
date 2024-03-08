import DividerLine from "../DividerLine/DividerLine"

const ChooseCard = ({options, hidden, onCategorySelect }) => {
    const handleSelectCategory = (category) => {
        onCategorySelect(category)
    }

    return (
        <div className="hidden md:flex flex-col w-1/5 bg-slate-100 shadow-[0_3px_8px_1px_rgba(0,0,0,0.3)] rounded-lg p-2 m-4">
            {options.map((option) => (
                <div key={option.name} className={`hidden md:flex flex-col`}>

                    <div className="md:flex md:items-center md:gap-4 md:m-2">
                        <input 
                            type="radio"  
                            value={option.name}
                            key={option.id}
                            name="chooseOption"
                            id={option.name}
                            className={`hover:text-orange-500 ${hidden? "hidden": "flex"}`}
                            onClick={() => handleSelectCategory(option.name)}
                        />
                        <label 
                            htmlFor={option.name}
                            className="hover:text-orange-500 font-semibold text-base text-stone-500 m-2"
                        >
                            {option.name}
                        </label>
                    </div>
                    
                    <DividerLine borderColor="border-stone-500"/>
                </div>
            ))}

        </div>
    )
}

export default ChooseCard
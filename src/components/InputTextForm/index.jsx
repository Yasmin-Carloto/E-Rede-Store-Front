const InputTextForm = ({type, inputName, labelName, handleChange}) => {
    function onTyping(e){
        handleChange(e)
    }
    
    return (
        <div className="flex flex-col gap-1 m-2">
            <label className="text-base font-semibold" htmlFor={inputName}>{labelName}:*</label>
            <input onChange={(e) => onTyping(e)} required className="p-2 bg-slate-100 rounded-lg" placeholder={`Digite o(a) ${labelName}...`} type={type} name={inputName} id={inputName}/>
        </div>
    )
}

export default InputTextForm
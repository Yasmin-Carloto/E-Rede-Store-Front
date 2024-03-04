const Button = ({bgColor, text, textSize, textWeight, textColor}) => {
    return (
        <button className={`px-2 rounded-lg	w-32 h-10 bg-${bgColor} text-${textSize} font-${textWeight} text-${textColor}`}>
            {text}
        </button>
    )
}

export default Button
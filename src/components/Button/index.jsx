import { Link } from "react-router-dom"

const Button = ({bgColor, text, textSize, textColor, rounded, width, height, onClick}) => {

    return(
        <button onClick={async () => await onClick()} className={`${bgColor} p-2 ${rounded ? 'rounded-lg': ''} ${width} ${height} ${textSize} font-semibold ${textColor}`}>
            {text}
        </button>
    )

    
}

export default Button
import { Link } from "react-router-dom"

const MenuLink = ({path, linkName}) => {
    // Fazer o mesmo que foi feito para o menu. Se o link for clicado, deixá-lo laranja.

    return(
        <Link 
            to={path}
            className="rounded-lg hover:bg-slate-200 hover:text-orange-500 p-2 text-stone-500 text-xs md:text-base md:text-zinc-50 md:hover:bg-transparent"
        >
            {linkName}
        </Link>
    )
}

export default MenuLink
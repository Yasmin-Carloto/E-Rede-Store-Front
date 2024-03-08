import { MdOutlineShoppingCart  } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";
import { useCart } from "../../contexts/CartContext";
import logo from "../../assets/e-redeLogo.png"
import SearchBar from "../SearchBar";
import Button from "../Button";
import Menu from "../Menu";
import { useState, useEffect } from "react";
import CartContainer from "../CartContainer";
import { useNavigate } from "react-router-dom";
import { ContextToken } from "../../contexts/LoginContext";
import { useContext } from "react"
import { useSearchQuery } from "../../contexts/SearchContext";

const Header = () => {    
    const { cart } = useCart()
    const {token, setToken} = useContext(ContextToken)
    const [userEmail, setUserEmail] = useState("")
    const { searchQuery, setSearchQuery } = useSearchQuery()

    const [pagesLinks, setPagesLinks] = useState([
        {name: "Home", path: "/"},
        {name: "Produtos", path: "/products/categories"},
        {name: "Categorias", path: "/categories"},
        {name: "Meus pedidos", path: "/orders"}
    ])

    const [menu, setMenu] = useState(false)
    const navigate = useNavigate()

    const toggleMenu = () => {
        setMenu(menu ? false : true)
    }

    const [cartAppear, setCartAppear] = useState(false)

    const toggleCartAppearence = () => {
        setCartAppear(cartAppear ? false : true)
    }

    const tokenIsValid = () => {
        if(token === "null"){
            return false
        }else{
            return true
        }
    }
    const validation = tokenIsValid()

    useEffect(() => {
        if (validation) {
            const decodedToken = atob(token.split(".")[1])
            const { email } = JSON.parse(decodedToken)
            setUserEmail(email)
        }
    }, [token])

    return (
        <header className="bg-blue-900 flex flex-col md:pb-px p-8 gap-2 relative z-10">

            <div className="flex flex-col gap-2 md:flex-row md:justify-center md:items-center md:justify-between">

                <div className="flex justify-between items-center w-full">
                    <TfiMenu className="text-white h-7 w-7 md:hidden " onClick={toggleMenu}/> 
                    <img src={logo} alt="Logo do e-rede store" className="h-7"/>
                    <MdOutlineShoppingCart onClick={toggleCartAppearence} className="md:hidden text-white h-7 w-7 md:hidden cursor-pointer"/>
                </div>

                <SearchBar setSearchQuery={setSearchQuery}/>

                <div className="hidden md:flex justify-evenly items-center w-full">

                    { validation ? 
                        <h1 className="text-lg p-2 font-semibold text-orange-500">
                            {userEmail}
                        </h1>
                        :

                        <div>
                            <Button
                                text="Cadastre-se"
                                textSize="text-base"
                                textColor="text-white"
                                onClick={() => navigate("/signup")}
                                width="w-32"
                                height="h-10"
                            />
        
                            <Button
                                bgColor="bg-orange-500"
                                text="Entrar"
                                textSize="text-base"
                                textColor="text-white"
                                width="w-32"
                                height="h-10"
                                onClick={() => navigate("/login")}
                                rounded={true}
                            />
                        </div>
                    }

                    <MdOutlineShoppingCart onClick={toggleCartAppearence} className=" md:flex text-white h-7 w-7 cursor-pointer"/>
                </div>

            </div>

            <div className={` ${cartAppear ? '' : 'hidden'} ${cartAppear ? '' : 'md:hidden'} bg-slate-100 justify-end md:w-full md:flex md:static md:justify-end block relative right-1`}>
                <CartContainer
                    products={cart}
                />
            </div>

            
            <div className={` ${menu ? '' : 'hidden'} md:justify-center md:w-full md:flex md:static block absolute top-16`}>
                <Menu
                    links={pagesLinks}
                />
            </div>

        </header>
    )
}

export default Header
import { MdOutlineShoppingCart  } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";

import logo from "../../assets/e-redeLogo.png"
import SearchBar from "../SearchBar";
import Button from "../Button";

const Header = () => {
    return (
        <header className="bg-blue-900 flex flex-col p-8 gap-2 md:flex-row md:justify-center md:items-center md:justify-between">
            <div className="flex justify-between items-center w-full">

                <TfiMenu className="text-white h-7 w-7 md:hidden "/>
                <img src={logo} alt="Logo do e-rede store" className=""/>
                <MdOutlineShoppingCart className="text-white h-7 w-7 md:hidden"/>
                
            </div>

            <SearchBar/>                

            <div className="hidden md:flex justify-evenly items-center w-full">
                <Button
                    text="Cadastre-se"
                    textSize="base"
                    textWeight="600"
                    textColor="white"
                />

                <Button
                    bgColor="orange-500"
                    text="Entrar"
                    textSize="base"
                    textWeight="600"
                    textColor="white"
                />

                <MdOutlineShoppingCart className="text-white h-7 w-7"/>
            </div>

        </header>
    )
}

export default Header
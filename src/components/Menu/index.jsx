import { useState, useEffect } from "react"
import MenuLink from "../StyledLink"
import { Link, useNavigate } from "react-router-dom"
import DividerLine from "../DividerLine/DividerLine"
import Button from "../Button"
import { ContextToken } from "../../contexts/LoginContext"
import { useContext } from "react"

const Menu = ({links}) => {
    const navigate = useNavigate()
    const {token, setToken} = useContext(ContextToken)
    const [userEmail, setUserEmail] = useState("");

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
        <section className="flex flex-col bg-slate-100 md:pb-px p-4 rounded-lg justify-around gap-2 md:bg-blue-900 md:items-center">
            <h1 className="md:hidden font-semibold text-base">Páginas</h1>

            <DividerLine borderColor="border-stone-900"/>

            <div className="flex flex-col md:flex-row">
                {links.map((link) => (
                    <MenuLink
                        key={link.name}
                        path={link.path}
                        linkName={link.name}
                    />
                ))}
            </div>

            <DividerLine borderColor="border-stone-900"/>

            {validation ? 
                <h1 className="md:hidden text-xs p-2 font-semibold">
                    <span className="text-orange-500">Usuário: </span>
                    {userEmail}
                </h1>
                :
                <div className="md:hidden flex">
                    <Button
                        text="Cadastre-se"
                        textSize="text-xs"
                        textColor="text-stone-500"
                        onClick={() => navigate("/signup")}
                        width="w-24"
                    />

                    <Button
                        bgColor="bg-blue-900"
                        text="Entrar"
                        textSize="text-xs"
                        textColor="text-white"
                        rounded={true}
                        onClick={() => navigate("/login")}
                        height="h-8"
                        width="w-24"	
                    />
                </div>
            }
        </section>
    )
}

export default Menu
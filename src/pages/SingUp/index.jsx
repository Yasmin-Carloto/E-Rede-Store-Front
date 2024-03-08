import Button from "../../components/Button"
import InputTextForm from "../../components/InputTextForm"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { createUser } from "../../api/Users/users"
import { ContextToken } from "../../contexts/LoginContext"
import { useContext } from "react"

const SingUp = () => {
    const {token, setToken} = useContext(ContextToken)

    const [user, setUser] = useState({name: "", email:"", password:""})
    const [error, setError] = useState("")
    const navigate = useNavigate()


    async function signup (){
        const response = await createUser(user.name, user.email, user.password)
        if(response.error){
            navigate("/signup")
            setError(response.error)
        }else{
            setToken(response.token)
            setError("")
            navigate("/")
        }
    }

    function handleUserInfoChange(e){
        setUser((prev)=> ({...prev, [e.target.name]:e.target.value}))
    }

    return(
        <section className="flex justify-center items-center bg-blue-900 p-12 h-screen md:w-full md:bg-slate-100">
            <div className="flex justify-center flex-col gap-6 bg-white p-4 md:w-96">
                <h1 className="font-bold text-2xl text-center">Fazer cadastro</h1>

                {error !== ""?
                    <h1 className="text-red-400 text-xl font-medium">Alguma de suas informações é inválida!</h1>
                    :
                    ""
                }

                <div className="flex flex-col">
                    <InputTextForm
                        inputName="name"
                        type="text"
                        labelName="Nome"
                        handleChange={handleUserInfoChange}
                    />
                    <InputTextForm
                        inputName="email"
                        type="text"
                        labelName="Email"
                        handleChange={handleUserInfoChange}
                    />
                    <div className="flex flex-col gap-1">
                        <InputTextForm
                            inputName="password"
                            type="text"
                            labelName="Senha"
                            handleChange={handleUserInfoChange}
                        />
                        <p className="text-xs text-slate-500">Senha deve conter: uma letra maiúscula, um número e oito caracteres.</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <Button
                        bgColor="bg-orange-500"
                        text="Fazer cadastro"
                        textSize="text-base"
                        textColor="text-white"
                        width="w-64"
                        height="h-14"
                        rounded={true}
                        onClick={signup}
                    />

                    <p className="text-base	text-stone-900 pointer">Já possui cadastro? <Link  to="/login" className="text-orange-500">Clique aqui!</Link></p>
                </div>
            </div>
        </section>
    )
}

export default SingUp
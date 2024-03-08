import { useState } from "react"
import InputsContainer from "../../components/InputsContainer"
import React from 'react';
import InputTextForm from "../../components/InputTextForm"
import Button from "../../components/Button"
import { Link, useNavigate } from "react-router-dom"
import loginApi from "../../api/Login/login";
import { ContextToken } from "../../contexts/LoginContext"
import { useContext } from "react"


const Login = () => {
    const [user, setUser] = useState({email:"", password:""})
    const {token, setToken} = useContext(ContextToken)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    
    async function login (){
        const response = await loginApi(user.email, user.password)
        if(response.error){
            navigate("/login")
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
            <div className="flex justify-center flex-col gap-2 bg-white p-4 md:w-96">
                <h1 className="font-bold text-2xl text-center">Login</h1>

                {error !== ""?
                    <h1 className="text-red-400 text-xl font-medium">Usuário inválido!</h1>
                    :
                    ""
                }

                <div className="flex flex-col">
                    <InputTextForm
                        inputName="email"
                        type="text"
                        labelName="Email"
                        handleChange={handleUserInfoChange}
                    />
                    <InputTextForm
                        inputName="password"
                        type="text"
                        labelName="Senha"
                        handleChange={handleUserInfoChange}
                    />
                </div>


                <div className="flex flex-col justify-center items-center gap-2">
                    <Button
                        bgColor="bg-orange-500"
                        text="Fazer login"
                        textSize="text-base"
                        textColor="text-white"
                        width="w-64"
                        height="h-14"
                        onClick={login}
                        rounded={true}
                    />

                    <p className="text-base	text-stone-900 pointer">Não possui cadastro? <Link to="/signup" className="text-orange-500">Clique aqui!</Link></p>
                </div>
            </div>
        </section>
    )
}

export default Login
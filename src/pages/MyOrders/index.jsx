import ChooseCard from "../../components/ChooseCard"
import ProductCardInline from "../../components/ProductCardInline"
import Select from "../../components/Select"
import { useState, useEffect } from "react"
import { getOrders } from "../../api/Orders/orders"
import { ContextToken } from "../../contexts/LoginContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const MyOrders = () => {
    const [ordersOptions, setOrdersOptions] = useState([
        {id: 1, name: "Meus Pedidos", path: "/"},
        {id: 2, name: "Minhas Informações", path: "/about"},
    ])
    
    const [sales, setSales] = useState([])
    const {token, setToken} = useContext(ContextToken)

    useEffect(() => {
        const fetchSales = async () => {
            const response = await getOrders(token)
            setSales(response)
        }

        fetchSales()
    }, [])

    if(token === "null"){
        return(
            <div className="w-full flex justify-center items-center">
                <Link 
                    to="/login"
                    className="w-fit flex flex-col justify-center items-center p-6 gap-2 "
                >
                    <h2 className="text-lg cursor-pointer">Que pena! </h2>
                    <h1 className="text-xl font-semibold hover:text-orange-500">Você ainda não está logado! ☹️</h1>
                    <h2 className="font-bold text-base cursor-pointer hover:bg-orange-500 hover:text-slate-200 bg-slate-200 p-2 rounded">Clique aqui e faça seu login</h2>
                </Link>
            </div>
        )
    }else if(!Array.isArray(sales) || sales.length < 0){
        return(
            <div className="w-full flex justify-center items-center flex flex-col justify-center items-center p-6 gap-2">            
                <h1 className="text-xl font-semibold hover:text-orange-500">Primeiro faça seu pedido! 😊</h1>
            </div>
        )
    }


    return (
        <div className="flex md:m-12 md:flex-row md:justify-center md:items-start md:gap-12 flex-col">
            <Select
                options={ordersOptions}
            />

            <ChooseCard
                options={ordersOptions}
                hidden={true}
            />

            <div className="mx-12 p-2 bg-slate-100 rounded-lg md:flex md:flex-col md:justify-center md:w-full md:gap-6 md:p-12">
                
                <div className="flex items-center justify-between">
                    <h1 className="md:text-stone-500 text-base font-semibold py-2">Meus Pedidos</h1>
                    <h2 className="md:flex hidden text-stone-500">Status Meus Pedidos:</h2>
                </div>
                
                {sales.map((sale) => (
                    <ProductCardInline
                        image={sale.product_image}
                        title={sale.product_name}
                        category={sale.product_category_name}
                        price={sale.product_price}
                        quantity={sale.amount}
                    />
                ))}
            </div>

        </div>
    )
}

export default MyOrders
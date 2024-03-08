import { useNavigate } from "react-router-dom"
import Button from "../Button"
import DividerLine from "../DividerLine/DividerLine"
import ProductCardInline from "../ProductCardInline"
import { ContextToken } from "../../contexts/LoginContext"
import { useCart } from "../../contexts/CartContext"
import { useContext } from "react"
import { placeOrder } from "../../api/Orders/orders"

const CartContainer = ({products}) => {
    const navigate = useNavigate()
    const {token, setToken} = useContext(ContextToken)
    const { getTotalPrice, clearCart, cart } = useCart()

    const tokenIsValid = () => {
        if(token === "null"){
            return false
        }else{
            return true
        }
    }
    const validation = tokenIsValid()

    const setOrder = async () => {
        try {
            let productsArray = []
            const productIds = cart.map(product => Number(product.id))
            for(let i = 0; i<productIds.length; i++){
                productsArray.push({indexProduct: Number(productIds[i]), productQuantity: 1})
            }
            const response = await placeOrder(productsArray, token)
            if(response.sucess === true){
                clearCart()
            }else{
                return (
                    <h1>Houve um problema.</h1>
                )
            }
            
        } catch (error) {
            console.error("Erro ao fazer o pedido:", error)
        }
    }

    return (
        <section className="absolute flex flex-col bg-slate-100 md:pb-px p-4 rounded-lg justify-around gap-2 md:items-center right-1 md:right-20">
            <h1 className="font-semibold text-base">Meu Carrinho</h1>

            <DividerLine borderColor="border-stone-900"/>

            <div className="flex flex-col">
                {products.map((product) => (
                    <ProductCardInline
                        image={product.image}
                        category={product.name_category}
                        hidden="hidden"
                        price={product.price}
                        quantity={product.amount}
                        title={product.name}
                        key={product.id}
                    />
                ))}
            </div>

            <DividerLine borderColor="border-stone-900"/>
            
            {validation ? 
                <div className="flex p-2">
                    <Button
                        text="Esvaziar"
                        textSize="text-xs"
                        textColor="text-stone-500"
                        width="w-24"
                        onClick={() => clearCart}
                    />

                    <Button
                        bgColor="bg-blue-900"
                        text="Finalizar pedido"
                        textSize="text-xs"
                        textColor="text-white"
                        rounded={true}
                        height="h-8"
                        width="w-28"	
                        onClick={() => setOrder()}
                    />
                </div>
                :
                <div className="flex p-2">
                    <Button
                        text="Cadastre-se"
                        textSize="text-xs"
                        textColor="text-stone-500"
                        width="w-24"
                        onClick={() => navigate("/signup")}
                    />

                    <Button
                        bgColor="bg-blue-900"
                        text="Entrar"
                        textSize="text-xs"
                        textColor="text-white"
                        rounded={true}
                        height="h-8"
                        width="w-24"
                        onClick={() => navigate("/login")}	
                    />
                </div>
            }
            <div>
                <h1>R${getTotalPrice()}</h1>
            </div>

        </section>
    )
}

export default CartContainer
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../../api/Products/products"
import { useCart } from "../../contexts/CartContext";
import Button from "../../components/Button"

const ProductInfo = () => {
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(0)
    const { id } = useParams()
    const { addToCart, cart } = useCart()

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await getProducts()
            const foundProduct = response.find(product => product.id === Number(id))
            setProduct(foundProduct)
        }

        fetchProduct()
    }, [id])

    if (!product) {
        return <div>Carregando...</div>
    }

    function addProductsToCart(){
        const quantityNumber = parseInt(quantity, 10)
        if(!isNaN(quantityNumber) && quantityNumber > 0){
            for(let i = 0 ; i<quantityNumber ; i++){
                addToCart(product)
            }
        }else{
            addToCart(product)
        }
    }

    return (
        <div className="flex w-full h-full justify-center items-center">

            <div className="md:w-fit md:h-fit flex flex-col justify-center items-center m-8 p-6 bg-slate-100 gap-2 md:flex-row md:items-start md:gap-6 md:shadow-[0_5px_8px_2px_rgba(0,0,0,0.3)]">

                <div className="h-full">
                    <img className="w-56" src={product.image} alt={`Imagem do produto ${product.name}`}/>
                    <h3 className="hidden md:flex">Quantidade disponível</h3>
                    <h3 className="hidden md:flex">{product.stock} itens disponíveis</h3>
                </div>

                <div className="flex flex-col items-center justify-center md:justify-around md:h-full flex-1">

                    <div className="flex flex-col h-full">
                        <h1 className="text-blue-900 text-2xl font-semibold">{product.name}</h1>
                        <h3 className="text-stone-500 text-base font-medium">{product.name_category}</h3>
                        <p className="text-stone-500 text-[15px] font-medium">{product.description}</p>
                    </div>

                    <div className="flex flex-col justify-center gap-2 md:flex-row md:items-center">
                        <div className="flex w-full justify-center gap-2 md:flex-col md:gap-1">
                            <h1 className="font-semibold text-base">Quantidade:</h1>
                            <input onChange={(e) => setQuantity(e.target.value)} className="border-solid border-2 border-black rounded w-20" type="number"/>
                        </div>
                        <Button
                            bgColor="bg-blue-900"
                            text="Comprar"
                            textSize="text-base"
                            textColor="text-white"
                            path=""
                            rounded={true} 
                            width="w-56"
                            height="h-16"
                            onClick={addProductsToCart}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
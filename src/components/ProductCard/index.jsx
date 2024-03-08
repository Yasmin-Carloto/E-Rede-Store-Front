import { Link } from "react-router-dom"
import Button from "../Button"
import { useCart } from "../../contexts/CartContext"


const ProductCard = ({image, name, price, category, id}) => {
    const { addToCart } = useCart()

    const handleAddToCart = () => {
      const item = {
        id,
        name,
        price,
        category,
        image
      }
      addToCart(item)
    }

    return (
       
        <div className="bg-white m-3 rounded w-36 md:w-44 shadow-[0_5px_8px_2px_rgba(0,0,0,0.3)]">
             <Link to={`/products/${id}`}>
                <img className="rounded" src={`"../../../public${image}`} alt={`Imagem do produto ${name}`}/>

                <div className="p-2">
                    <h2 className="font-bold text-lg md:text-xl text-blue-900">{name}</h2>
                    <h3 className="text-xs text-slate-300">{category.charAt(0).toUpperCase() + category.substring(1)}</h3>

                    <div>
                        <h3 className="text-base md:text-lg text-orange-500 font-semibold">R${price}</h3>
                        <Button
                            bgColor="bg-blue-900"
                            text="Comprar"
                            textSize="text-xs"
                            textColor="text-white"
                            rounded={true}
                            onClick={handleAddToCart} 
                        />
                    </div>
                </div>
                
             </Link>
        </div>
    )
}

export default ProductCard
import { useState } from "react"
import ProductCard from "../ProductCard"

const ProductsContainer = ({productsList}) => { 
    return (
        <section className="flex flex-wrap w-full justify-around">
            {productsList.map((product) => (
                <ProductCard
                    id={product.id}
                    image={product.image}
                    price={product.price}
                    name={product.name}
                    category={product.name_category}
                />
            ))}
        </section>
    )
}

export default ProductsContainer